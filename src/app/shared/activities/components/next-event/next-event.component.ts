import {Component, Inject, Input, LOCALE_ID, OnInit} from '@angular/core';
import {EventService} from "../../../events/services/event/event.service";
import {EventType} from "../../../events/enums/event-type";
import {LDEvent} from "../../../events/classes/ld-event/ld-event";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-next-event',
  templateUrl: './next-event.component.html',
  styleUrls: ['./next-event.component.css']
})
export class NextEventComponent implements OnInit {
  @Input() eventTypes!: EventType[];
  public nextEventText: string
  private maxEvents = 1

  constructor(private eventService: EventService, @Inject(LOCALE_ID) protected localeId: string) {
    this.nextEventText = ''
  }

  ngOnInit(): void {
    this.eventService.getEvents(this.eventTypes, this.maxEvents).subscribe(
      res => {
        this.nextEventText = this.humanDescription(res)

      }
    )

  }

  public humanDescription(event: LDEvent[]): string {
    if (event.length >= 1) {
      return $localize`:@@nextEvent.humanDescriptionOK:Next event or activity:` + ' ' + formatDate(event.pop()!.startDate, 'short', this.localeId)
    }
    return $localize`:@@nextEvent.humanDescriptionKO:No events or activities programed.`


  }

}
