import {Component, Input, OnInit} from '@angular/core';
import {EventData} from "../../classes/event-data/event-data";

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
  @Input() event!: EventData;

  constructor() {
  }

  ngOnInit(): void {
  }

}
