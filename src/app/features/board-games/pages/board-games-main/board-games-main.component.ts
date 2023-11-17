import {Component, OnInit} from '@angular/core';
import {EventType} from "../../../../shared/events/enums/event-type";

@Component({
  selector: 'app-board-games-main',
  templateUrl: './board-games-main.component.html',
  styleUrls: ['./board-games-main.component.css']
})
export class BoardGamesMainComponent implements OnInit {
  title: string = $localize`:@@boardGames.title:Board games`
  eventTypes: EventType[] = [EventType.BoardGames]
  maxEvents = 5
  imagesPath = '/assets/activities/board-games/games'
  EVENTS_IMAGES_PATH = '/assets/events/activities/board-games'


  constructor() {
  }

  ngOnInit(): void {
  }

}
