import {Component, OnInit} from '@angular/core';
import {EventType} from "../../../../shared/events/enums/event-type";

@Component({
  selector: 'app-about-us-main',
  templateUrl: './about-us-main.component.html',
  styleUrls: ['./about-us-main.component.css']
})
export class AboutUsMainComponent implements OnInit {
  title = $localize`:@@contact:About us`
  eventTypes: EventType[] = [EventType.Any]
  maxEvents = 4

  constructor() {
  }

  ngOnInit(): void {
  }

}
