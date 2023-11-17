import {Component, Input, OnInit} from '@angular/core';
import {EventType} from "../../../events/enums/event-type";

@Component({
  selector: 'app-activity-participate-card',
  templateUrl: './activity-participate-card.component.html',
  styleUrls: ['./activity-participate-card.component.css']
})
export class ActivityParticipateCardComponent implements OnInit {

  @Input() eventTypes!: EventType[];
  @Input() imageUrl!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
