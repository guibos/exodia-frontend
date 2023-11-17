import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from "./home-routing.module";
import {CardEventsComponent} from './components/card-events/card-events.component';
import {CardWeissSchwarzComponent} from './components/card-weiss-schwarz/card-weiss-schwarz.component';
import {CardBoardGamesComponent} from './components/card-board-games/card-board-games.component';
import {CardVideogamesComponent} from "./components/card-videogames/card-videogames.component";
import {
  EventsLogosCarouselComponent
} from './components/events-logos-carousel/events-logos-carousel.component';
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import {MainComponent} from "./pages/main/main.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    MainComponent,
    CardVideogamesComponent,
    CardEventsComponent,
    CardWeissSchwarzComponent,
    CardBoardGamesComponent,
    CardVideogamesComponent,
    EventsLogosCarouselComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbCarouselModule,
    SharedModule
  ],
  exports: [
    HomeRoutingModule,
    EventsLogosCarouselComponent
  ]
})
export class HomeModule {
}
