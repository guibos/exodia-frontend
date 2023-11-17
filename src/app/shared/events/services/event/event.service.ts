import {Injectable} from '@angular/core';
import {EventBattleFyService} from "../event-battle-fy/event-battle-fy.service";
import {forkJoin, map, Observable} from "rxjs";
import {EventType} from "../../enums/event-type";
import {LDEvent} from "../../classes/ld-event/ld-event";
import {EventEventbriteService} from "../event-eventbrite/event-eventbrite.service";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private internalMaxEvents = 20

  constructor(
    private eventBattleFyServiceService: EventBattleFyService,
    private eventEventbriteService: EventEventbriteService
  ) {
  }

  getEvents(eventsType: EventType[], maxEvents: number): Observable<LDEvent[]> {
    return forkJoin(
      [this.eventEventbriteService.getEvents(eventsType, this.internalMaxEvents),
        this.eventBattleFyServiceService.getEvents(eventsType, this.internalMaxEvents),]
    ).pipe(
      map(([a, b]) => a.concat(b)),
      map(events => events.sort((a, b) => a.startDate.getTime() - b.startDate.getTime())),
      map(events => events.slice(0, maxEvents))
    )
  }


}
