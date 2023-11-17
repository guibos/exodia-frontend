import {Component, OnInit} from '@angular/core';
import {EventService} from "../../../../shared/events/services/event/event.service";
import {LDEvent} from "../../../../shared/events/classes/ld-event/ld-event";
import {EventType} from "../../../../shared/events/enums/event-type";

@Component({
  selector: 'app-main-calendar',
  templateUrl: './main-calendar.component.html',
  styleUrls: ['./main-calendar.component.css']
})
export class MainCalendarComponent implements OnInit {

  title = $localize`:@@calendar.title:Calendar`
  events: LDEvent[] = []
  eventTypes = [EventType.Any]
  maxEvents = 20

  constructor(
    private eventService: EventService
  ) {

  }

  ngOnInit(): void {
    this.eventService.getEvents(this.eventTypes, this.maxEvents).subscribe(events => {
      this.events = events
    })
  }

}
