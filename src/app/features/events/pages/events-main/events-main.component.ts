import {Component, OnInit} from '@angular/core';
import {EventType} from "../../../../shared/events/enums/event-type";
import {EventData} from "../../classes/event-data/event-data";


@Component({
  selector: 'app-events-main',
  templateUrl: './events-main.component.html',
  styleUrls: ['./events-main.component.css']
})
export class EventsMainComponent implements OnInit {
  title = $localize`:@@events:Events`
  eventTypes = [EventType.Event]
  maxEvents = 4
  imagesPath = '/assets/events/logos'
  EVENTS_IMAGES_PATH = '/assets/events/activities/'

  events: EventData[] = [
    new EventData(
      "Japan Weekend",
      $localize`:@@events.japan-weekend-description:Japan Weekend is the largest pop culture event in Spain.`,
      "https://www.japanweekend.com/",
      "/assets/events/logos/japan-weekend.png"
    ),
    new EventData(
      "Akihabara@Deep",
      $localize`:@@events.akihabara-deep-description:Akihabara@Deep is an interassociative project for the creation of the first free multiplex lounge for alternative leisure and oriental culture.`,
      'https://www.instagram.com/akihabaracat',
      "/assets/events/logos/akihabara-deep.png"
    ),
    new EventData(
      "Fontana by Night",
      $localize`:@@events.fontana-by-night-description:La Fontana by Night is the festival of dispersed culture and alternative leisure of the Barcelona Youth Council (CJB) and Espai Jove La Fontana.`,
      'https://lafontana.org/events/',
      "/assets/events/logos/fontana-by-night.png"
    ),
    new EventData(
      "Big Day",
      $localize`:@@events.big-day-description:On the Big Day you can spend a day playing board games with classic games and other more modern ones in Espai Jove Casa Sagnier.`,
      'https://ajuntament.barcelona.cat/espai-jove-casa-sagnier/',
      "/assets/events/logos/big-day.png"
    ),
    new EventData(
      "Setmana del Japó",
      $localize`:@@events.big-day-description:On the Big Day you can spend a day playing board games with classic games and other more modern ones in Espai Jove Casa Sagnier.`,
      'https://ajuntament.barcelona.cat/espai-jove-casa-sagnier/',
      "/assets/events/logos/setmana-del-japo.png"
    ),
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
