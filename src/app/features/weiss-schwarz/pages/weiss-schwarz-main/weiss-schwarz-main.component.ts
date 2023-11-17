import {Component, OnInit} from '@angular/core';
import {EventType} from "../../../../shared/events/enums/event-type";

@Component({
  selector: 'app-weiss-schwarz-main',
  templateUrl: './weiss-schwarz-main.component.html',
  styleUrls: ['./weiss-schwarz-main.component.css']
})
export class WeissSchwarzMainComponent implements OnInit {
  title: string = 'Weiβ Schwarz'
  eventTypes: EventType[] = [EventType.WeissSchwarz]
  maxEvents = 5
  EVENTS_IMAGES_PATH = '/assets/events/activities/weiss-schwarz'

  constructor() {
  }

  ngOnInit(): void {
  }

}
