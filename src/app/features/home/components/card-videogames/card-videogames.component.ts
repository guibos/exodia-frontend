import {Component, OnInit} from '@angular/core';
import {EventType} from "../../../../shared/events/enums/event-type";

@Component({
  selector: 'app-card-videogames',
  templateUrl: './card-videogames.component.html',
  styleUrls: ['./card-videogames.component.css']
})
export class CardVideogamesComponent implements OnInit {
  eventTypes = [EventType.VideoGames]

  constructor() {
  }

  ngOnInit(): void {
  }

}
