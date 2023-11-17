import {Component, Input, OnInit} from '@angular/core';
import {LDEvent} from "../../../../shared/events/classes/ld-event/ld-event";

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
  @Input() event!: LDEvent;

  constructor() {
  }

  ngOnInit(): void {
  }

}
