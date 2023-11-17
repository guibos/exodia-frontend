import {Component, Input, OnInit} from '@angular/core';
import {LDEvent} from "../../../../shared/events/classes/ld-event/ld-event";

@Component({
  selector: 'app-gymkhana-card',
  templateUrl: './gymkhana-card.component.html',
  styleUrls: ['./gymkhana-card.component.css']
})
export class GymkhanaCardComponent implements OnInit {
  @Input() event!: LDEvent;

  constructor() {
  }

  get routerLink(): string {
    return `/events/gymkhana/${this.event._id}`;
  }

  ngOnInit(): void {
  }

}
