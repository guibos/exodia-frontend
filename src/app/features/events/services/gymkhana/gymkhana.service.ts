import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {LDEvent} from "../../../../shared/events/classes/ld-event/ld-event";
import {map, Observable} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";
import {Apollo} from "apollo-angular";
import {gql} from "@apollo/client/core";
import {LDEventStatus} from "../../../../shared/events/enums/ld-event-status";
import {LDEventAttendanceMode} from "../../../../shared/events/enums/ld-event-attendance-mode";
import {EventType} from "../../../../shared/events/enums/event-type";
import {LDType} from "../../../../shared/events/enums/ld-type";
import {environment} from "../../../../../environments/environment";
import {LDLocation} from "../../../../shared/events/classes/ld-location/ld-location";
import {LDEventBadge} from "../../../../shared/events/classes/ld-event-badge/ld-event-badge";
import {LDOrganizer} from "../../../../shared/events/classes/ld-organizer/ld-organizer";

@Injectable({
  providedIn: 'root'
})
export class GymkhanaService {

  constructor(private sanitizer: DomSanitizer, private apollo: Apollo, @Inject(LOCALE_ID) protected localeId: string) {

  }

  public getEvents(): Observable<LDEvent[]> {
    let eventsQuery = gql`
    query{
      events {
        id,
        nameEn,
        nameEs,
        nameCa,
        descriptionEn,
        descriptionEs,
        descriptionCa,
        startDatetime,
        endDatetime,
        image{
          url
        }
        locationName,
        locationAddress,
      }
    }`

    return this.apollo.use('gymkhana').watchQuery<any>({query: eventsQuery}).valueChanges.pipe(
      map(res => this._parseEvents(res.data.events)),
      map(events => events.sort((a, b) => a.startDate.getTime() - b.startDate.getTime())),
    )
  }

  public getEventDetails(id: number): Observable<LDEvent> {
    let eventDetailQuery = gql`
      query GetEventDetail($gymkhanaId: ID!) {
        eventDetail(pk: $gymkhanaId) {
          id,
          nameEn,
          nameEs,
          nameCa,
          descriptionEn,
          descriptionEs,
          descriptionCa,
          startDatetime,
          endDatetime,
          image{
            url
          },
          badges{
            id,
            nameEn,
            nameEs,
            nameCa,
            descriptionEn,
            descriptionEs,
            descriptionCa,
            points,
            image{
              url
            },
            organizer{
              name,
              url,
              image{
                url
              }
            }
          }
        }
      }
    `
    return this.apollo.use('gymkhana').watchQuery<any>({query: eventDetailQuery, variables: {
          gymkhanaId: id
        }}).valueChanges.pipe(
      map(res => this._parseEvent(res.data.eventDetail)),
    )

  }

  private _parseEvents(events: any[]): LDEvent[] {
    let eventsParsed: LDEvent[] = []


    for (let event of events) {
      eventsParsed.push(this._parseEvent(event))
    }
    return eventsParsed
  }

  private _parseEvent(event: any): LDEvent {
    let name: string
    let description: string
    if (this.localeId === 'es-ES') {
      name = event.nameEs
      description = event.descriptionEs
    } else if (this.localeId === 'ca-ES') {
      name = event.nameCa
      description = event.descriptionCa
    } else {
      name = event.nameEn
      description = event.descriptionEn
    }
    return new LDEvent(
      event.id,
      name,
      description,
      new Date(event.startDatetime),
      new Date(event.endDatetime),
      LDEventStatus.scheduled,
      LDEventAttendanceMode.mixed,
      [new LDLocation(
        event.locationName,
        event.locationAddress,
        '',
        LDType.place
      )],
      [environment.gymkhana.host + event.image.url],
      [],
      environment.gymkhana.performer,
      environment.gymkhana.organizer,
      `/events/gymkhana/${event.id}`,
      [EventType.Event],
      0,
      this.localeId,
      LDType.event,
      this._parseBadges(event.badges)
    )
  }

  private _parseBadges(badges: any[] | undefined): LDEventBadge[] {
    if (badges === undefined) {
      return []
    }
    let ldBadges: LDEventBadge[] = []
    let badge: any
    let name: string
    let description: string

    for (badge of badges) {
      if (this.localeId === 'es-ES') {
        name = badge.nameEs
        description = badge.descriptionEs
      } else if (this.localeId === 'ca-ES') {
        name = badge.nameCa
        description = badge.descriptionCa
      } else {
        name = badge.nameEn
        description = badge.descriptionEn
      }

      ldBadges.push(new LDEventBadge(
        badge.id,
        name,
        description,
        new LDOrganizer(
          LDType.organization,
          badge.organizer.name,
          badge.organizer.url,
          badge.organizer.image.url
        ),
        badge.points,
        badge.image.url,
      ))
    }
    return ldBadges


  }
}
