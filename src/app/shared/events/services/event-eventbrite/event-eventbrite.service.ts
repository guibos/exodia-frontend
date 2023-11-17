import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {EventType} from "../../enums/event-type";
import {forkJoin, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {LDEvent} from "../../classes/ld-event/ld-event";
import {EventBaseService} from "../../classes/event-base-service/event-base-service";
import {environment} from "../../../../../environments/environment";
import {stringFormat} from "../../../shared.module";
import {LDEventStatus} from "../../enums/ld-event-status";
import {LDEventAttendanceMode} from "../../enums/ld-event-attendance-mode";
import {LDOffer} from "../../classes/ld-offer/ld-offer";
import {LdOfferAvailability} from "../../enums/ld-offer-availability";
import {EventbriteConfig} from "../../classes/eventbrite-config/eventbrite-config";

// let eventTypeMapping = new Map<string, EventType>([
//     ["OrganizerTag/event", EventType.Event],
//     ["OrganizerTag/events", EventType.Event],
//     ["OrganizerTag/evento", EventType.Event],
//     ["OrganizerTag/eventos", EventType.Event],
//     ["OrganizerTag/weiss_schwarz", EventType.WeissSchwarz],
//     ["OrganizerTag/weib_schwarz", EventType.WeissSchwarz],
//     ["OrganizerTag/weiß_schwarz", EventType.WeissSchwarz],
//     ["OrganizerTag/boardgames", EventType.BoardGames],
//     ["OrganizerTag/boardgame", EventType.BoardGames],
//     ["OrganizerTag/juegosdemesa", EventType.BoardGames],
//     ["OrganizerTag/board_games", EventType.BoardGames],
// ]);

interface Price {
  currency: string,
  value: number
}

interface TicketAvailability {
  minimum_ticket_price: Price,
  maximum_ticket_price: Price
}

interface EventImage {
  url: string
}

interface Tag {
  tag: string
}

interface MultiText {
  text: string,
  html: string

}

interface DateData {
  timezone: string,
  local: string,
  utc: string
}

interface Category {
  id: string,
  name: string
}

interface EventbriteEvent {
  id: string,
  url: string,
  created: string,
  start: DateData
  end: DateData
  published: string
  ticket_availability: TicketAvailability,
  name: MultiText
  description: MultiText,
  tags: Tag[],
  logo: EventImage,
  category: Category,
  subcategory: Category,
  format_id: string,
  online_event: boolean
}

interface OrganizationEvents {
  events: EventbriteEvent[]
}

@Injectable({
  providedIn: 'root'
})
export class EventEventbriteService extends EventBaseService {
  private _ENDPOINT = 'https://www.eventbriteapi.com/v3/organizations/{0}/events/?token={1}&expand=expand=logo,category,subcategory,ticket_availability,format&page_size={2}&status=live,started'

  constructor(private _http: HttpClient, @Inject(LOCALE_ID) protected localeId: string) {
    super()
  }

  public getEvents(eventTypes: EventType[], maxEvents: number): Observable<LDEvent[]> {
    let observables: Observable<LDEvent[]>[] = environment.eventbrite.map(
      config => this.getEventsByOrg(config, eventTypes, maxEvents))

    return forkJoin(observables).pipe(
      map(res => res.flat())
    )

  }

  private getEventsByOrg(orgConfig: EventbriteConfig, eventTypes: EventType[], maxEvents: number): Observable<LDEvent[]> {
    const url = stringFormat(this._ENDPOINT, orgConfig.organization, orgConfig.token, maxEvents)
    return this._http.get<OrganizationEvents>(url,).pipe(
      map(
        res => {
          return this._parseData(orgConfig, eventTypes, res)
        }
      )
    )
  }

  private _parseData(orgConfig: EventbriteConfig, eventTypes: EventType[], data: OrganizationEvents): LDEvent[] {
    let events: LDEvent[] = []

    for (let event of data.events) {
      let eventType = this._getEventType(event)
      if (this.isEventType(eventTypes, eventType)) {
        events.push(
          new LDEvent(
            event.id,
            event.name.text,
            event.description.html,
            new Date(event.start.utc),
            new Date(event.end.utc),
            LDEventStatus.scheduled,
            event.online_event ? LDEventAttendanceMode.online : LDEventAttendanceMode.offline,
            orgConfig.location,
            [event.logo.url],
            this._parseOffer(event),
            orgConfig.performer,
            orgConfig.organizer,
            event.url,
            eventType,
            null,
            this.localeId
          )
        )
      }
    }
    return events
  }

  private _parseOffer(event: EventbriteEvent): LDOffer[] {
    return [
      new LDOffer(
        LdOfferAvailability.inStock,
        event.url,
        event.ticket_availability.minimum_ticket_price.value,
        event.ticket_availability.minimum_ticket_price.currency,
        new Date(event.created)
      ),
      new LDOffer(
        LdOfferAvailability.inStock,
        event.url,
        event.ticket_availability.maximum_ticket_price.value,
        event.ticket_availability.maximum_ticket_price.currency,
        new Date(event.created)
      ),
    ]
  }

  private _getEventType(event: EventbriteEvent): EventType[] {
    let eventTypes: EventType[] = []
    let lowerText = event.name.text.toLowerCase()

    if (lowerText.includes('juegos de mesa') || lowerText.includes('jocs de taula')) {
      eventTypes.push(EventType.BoardGames)
    }
    if (lowerText.includes('weiβ schwarz') || lowerText.includes('weiss schwarz')) {
      eventTypes.push(EventType.WeissSchwarz)
    }
    if (event.format_id == "4") {
      eventTypes.push(EventType.Event)
    }
    if (eventTypes.length == 0) {
      eventTypes.push(EventType.Other)
    }

    return eventTypes
  }

}
