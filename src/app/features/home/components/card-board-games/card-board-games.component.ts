import {Component, OnInit} from '@angular/core';
import {EventType} from "../../../../shared/events/enums/event-type";

@Component({
  selector: 'app-card-board-games',
  templateUrl: './card-board-games.component.html',
  styleUrls: ['./card-board-games.component.css']
})
export class CardBoardGamesComponent implements OnInit {
  eventTypes: EventType[] = [EventType.BoardGames]

  constructor() {
  }

  ngOnInit(): void {
  }

  click() {
  }

}
