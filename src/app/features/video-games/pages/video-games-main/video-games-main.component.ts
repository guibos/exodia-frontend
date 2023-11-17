import {Component, OnInit} from '@angular/core';
import {EventType} from "../../../../shared/events/enums/event-type";

@Component({
  selector: 'app-video-games-main',
  templateUrl: './video-games-main.component.html',
  styleUrls: ['./video-games-main.component.css']
})
export class VideoGamesMainComponent implements OnInit {
  title: string = $localize`:@@video-games.title:Video Games`
  eventTypes: EventType[] = [EventType.VideoGames]
  maxEvents = 5
  imagesPath = '/assets/activities/video-games/games'
  eventsImagePath = '/assets/events/activities/video-games'

  constructor() {
  }

  ngOnInit(): void {
  }

}
