import {Component, OnInit} from '@angular/core';
import {EventType} from "../../../../shared/events/enums/event-type";

@Component({
  selector: 'app-card-weiss-schwarz',
  templateUrl: './card-weiss-schwarz.component.html',
  styleUrls: ['./card-weiss-schwarz.component.css']
})
export class CardWeissSchwarzComponent implements OnInit {
  public eventTypes: EventType[] = [EventType.WeissSchwarz]

  constructor() {
  }

  ngOnInit(): void {
  }

}
