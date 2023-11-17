import {EventType} from "../../enums/event-type";


export class EventBaseService {
  public isEventType(eventsTypesEvent: EventType[], eventTypesFilter: EventType[]) {
    return eventsTypesEvent.includes(EventType.Any) || this.intersection(eventsTypesEvent, eventTypesFilter).length > 0
  }

  private intersection(setA: any[], setB: any[]): any[] {
    return setA.filter(Set.prototype.has, new Set(setB));
  }

}
