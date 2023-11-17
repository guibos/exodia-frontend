import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {LDEvent} from "../../classes/ld-event/ld-event";
import {HttpClient} from "@angular/common/http";
import {defaultIfEmpty, forkJoin, map, mergeMap, Observable} from "rxjs";
import {EventType} from "../../enums/event-type";
import {environment} from "../../../../../environments/environment";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {EventBaseService} from "../../classes/event-base-service/event-base-service";
import {stringFormat} from "../../../shared.module";
import {LDEventStatus} from "../../enums/ld-event-status";
import {LDEventAttendanceMode} from "../../enums/ld-event-attendance-mode";
import {LDOffer} from "../../classes/ld-offer/ld-offer";
import {LdOfferAvailability} from "../../enums/ld-offer-availability";
import {BattleFyConfig} from "../../classes/battle-fy-config/battle-fy-config";

interface Game {
  name: string,
  status: string
}

interface Tournament {
  _id: string,
  slug: string,
  startTime: string,
  name: string,
  bannerUrl: string
  game: Game,
  playersPerTeam: number,
  teamsCount: number,
}

interface OrganizationTournaments {
  total: number,
  tournaments: Tournament[]
}

interface Languages {
  es_MX: string

}

interface Translation {
  about: Languages
}

interface TournamentInfo {
  organizationID: string,
  startTime: string,
  playersPerTeam: number,
  name: string,
  about: string,
  gameName: string,
  bannerUrl: string,
  translation: Translation,
  slug: string
  createdAt: string
}


@Injectable({
  providedIn: 'root'
})
export class EventBattleFyService extends EventBaseService {
  private _TOURNAMENTS_ENDPOINT = 'https://search.battlefy.com/tournament/organization/{0}/upcoming?page=1&size={1}'
  private _TOURNAMENT_ENDPOINT = 'https://api.battlefy.com/tournaments/{0}'
  private _TOURNAMENT_URL = 'https://battlefy.com/{0}/{1}/{2}/'

  constructor(private _http: HttpClient, @Inject(LOCALE_ID) protected localeId: string, private sanitizer: DomSanitizer) {
    super()
  }

  public getEvents(eventTypes: EventType[], maxEvents: number): Observable<LDEvent[]> {
    let observables: Observable<LDEvent[]>[] = environment.battleFyConfig.map(
      config => this.getEventsByOrg(config, eventTypes, maxEvents))

    return forkJoin(observables).pipe(
      map(res => res.flat())
    )
  }

  private getEventsByOrg(config: BattleFyConfig, eventTypes: EventType[], maxEvents: number): Observable<LDEvent[]> {
    const tournamentsData = this._getTournaments(config, eventTypes, maxEvents)

    return tournamentsData.pipe(
      mergeMap(tournament => {
          return forkJoin(
            tournament.map(
              tournament => {
                return this._getEventFromTournament(tournament, config)
              }
            )
          );
        },
      ),
      defaultIfEmpty([])
    )
  }

  private _getTournaments(config: BattleFyConfig, eventsType: EventType[], maxEvents: number): Observable<Tournament[]> {
    const tournamentsUrl = stringFormat(this._TOURNAMENTS_ENDPOINT, config.organization, maxEvents)
    return this._http.get<OrganizationTournaments>(tournamentsUrl,).pipe(
      map(
        organizationTournaments => this._filterTournaments(organizationTournaments, eventsType)
      ),
    )
  }

  private _filterTournaments(organizationTournaments: OrganizationTournaments, eventsType: EventType[]):
    Tournament[] {
    let tournaments: Tournament[] = []

    organizationTournaments.tournaments.map(
      tournament => {
        if (
          this.isEventType(eventsType, [tournament.game.name as EventType])
        ) {
          tournaments.push(tournament)
        }
      }
    )
    return tournaments
  }

  private _getEventFromTournament(tournament: Tournament, config: BattleFyConfig,):
    Observable<LDEvent> {
    return this._http.get<TournamentInfo>(stringFormat(this._TOURNAMENT_ENDPOINT, tournament._id),).pipe(
      map(tournamentInfo => {

        let startDate = new Date(tournamentInfo.startTime)
        let endDate = this.getEndDate(startDate)
        let url = stringFormat(this._TOURNAMENT_URL, tournamentInfo.organizationID, tournamentInfo.slug, tournament._id)
        let offers = [
          new LDOffer(
            LdOfferAvailability.inStock,
            url,
            0.0,
            'EUR',
            new Date(tournamentInfo.createdAt)
          )
        ]

        return new LDEvent(
          tournament._id,
          tournamentInfo.name,
          this._getTournamentDescription(tournamentInfo),
          startDate,
          endDate,
          LDEventStatus.scheduled,
          LDEventAttendanceMode.offline,
          config.location,
          [tournamentInfo.bannerUrl],
          offers,
          config.performer,
          config.organizer,

          stringFormat(this._TOURNAMENT_URL, tournamentInfo.organizationID, tournamentInfo.slug, tournament._id),
          this.getEventTypes(tournament),
          tournament.playersPerTeam * tournament.teamsCount,
          this.localeId)
      })
    )
  }


  private getEndDate(startDate: Date): Date {
    let endDate = new Date(startDate)
    endDate.setHours(23)
    endDate.setMinutes(59)
    endDate.setSeconds(59)
    endDate.setMilliseconds(9999)
    return endDate
  }

  private _getTournamentDescription(tournament: TournamentInfo): SafeHtml {
    let description: string
    if (this.localeId === 'en-US') {
      description = tournament.about
    } else if (this.localeId === 'es-ES') {
      description = tournament.translation.about.es_MX
    } else if (this.localeId === 'ca-ES') {
      description = tournament.translation.about.es_MX
    } else {
      description = tournament.about
    }
    return this.sanitizer.bypassSecurityTrustHtml(description)
  }

  private getEventTypes(tournament: Tournament): EventType[] {
    if (tournament.game.name == 'Weiss Schwarz') {
      return [EventType.WeissSchwarz]
    } else {
      return [EventType.Other]
    }
  }
}
