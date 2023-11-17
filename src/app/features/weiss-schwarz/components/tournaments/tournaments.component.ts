import {Component, OnInit} from '@angular/core';
import {EventType} from "../../../../shared/events/enums/event-type";

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {
  eventTypes = [EventType.WeissSchwarz]

  constructor() {
  }

  ngOnInit(): void {
  }

}
