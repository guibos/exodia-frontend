import {Component} from '@angular/core';
import {EventService} from "../../../events/services/event/event.service";
import {EventType} from "../../../events/enums/event-type";
import {LDEvent} from "../../../events/classes/ld-event/ld-event";
import {ActivatedRoute} from "@angular/router";
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-calendar-sidebar',
  templateUrl: './calendar-sidebar.component.html',
  styleUrls: ['./calendar-sidebar.component.css']
})
export class CalendarSidebarComponent {
  events: LDEvent[] = []
  faAnglesRight = faAnglesRight;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {
    this.eventService.getEvents(this.eventTypes, this.maxEvents).subscribe(events => {
      this.events = events
    })
  }

  get eventTypes(): EventType[] {
    if (this.route.snapshot.children[0]) {
      let component: any = this.route.snapshot.children[0].component!
      return new component().eventTypes
    }
    return [EventType.Any]
  }

  get maxEvents(): number {
    if (this.route.snapshot.children[0]) {
      let component: any = this.route.snapshot.children[0].component!
      return new component().maxEvents
    }
    return 5
  }

}
