import {Component} from '@angular/core';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import {ImageInformation} from "../../../../shared/image/classes/image-information/image-information";


@Component({
  selector: 'app-events-logos-carousel',
  templateUrl: './events-logos-carousel.component.html',
  styleUrls: ['./events-logos-carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class EventsLogosCarouselComponent {
  images: ImageInformation[] = [
    new ImageInformation(
      '/assets/events/logos/japan-weekend.png',
      "Japan Weekend",
    ), new ImageInformation(
      '/assets/events/logos/akihabara-deep.png',
      "Akihabara Deep"
    ), new ImageInformation(
      '/assets/events/logos/fontana-by-night.png',
      "Fontana by Night"
    ),
  ];
  pauseOnHover = false;
  pauseOnFocus = false;
  interval = 3000;
}
