import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventsMainComponent} from './pages/events-main/events-main.component';
import {NgbCarouselModule, NgbCollapseModule} from "@ng-bootstrap/ng-bootstrap";
import {EventsRoutingModule} from "./events-routing.module";
import {HomeModule} from "../home/home.module";

import {SharedModule} from "../../shared/shared.module";
import {EventCardComponent} from "./components/event-card/event-card.component";
import {GymkhanaComponent} from './pages/gymkhana/gymkhana.component';
import {ApolloModule} from "apollo-angular";
import {GymkhanaCardComponent} from './components/gymkhana-card/gymkhana-card.component';
import {MapComponent} from './components/map/map.component';
import {GymkhanaDetailsComponent} from './pages/gymkhana-details/gymkhana-details.component';
import {ActivitiesComponent} from './components/activities/activities.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    EventsMainComponent,
    EventCardComponent,
    GymkhanaComponent,
    GymkhanaCardComponent,
    MapComponent,
    GymkhanaDetailsComponent,
    ActivitiesComponent,
  ],
  imports: [
    ApolloModule,
    NgbCollapseModule,
    CommonModule,
    NgbCarouselModule,
    EventsRoutingModule,
    HomeModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports: [
    EventsRoutingModule,
    EventCardComponent
  ]
})
export class EventsModule {
}
