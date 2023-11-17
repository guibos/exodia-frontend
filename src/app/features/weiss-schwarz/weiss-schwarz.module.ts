import {NgModule} from '@angular/core';
import {WeissSchwarzRoutingModule} from "./weiss-schwarz-routing.module";
import {WeissSchwarzMainComponent} from './pages/weiss-schwarz-main/weiss-schwarz-main.component';
import {CardSelectionComponent} from './components/card-selection/card-selection.component';
import {CommonModule} from "@angular/common";
import {NgImageSliderModule} from "ng-image-slider";
import {TournamentsComponent} from "./components/tournaments/tournaments.component";
import {LearnToPlayComponent} from "./components/learn-to-play/learn-to-play.component";
import {SharedModule} from "../../shared/shared.module";
import {AlbumComponent} from './pages/album/album.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InsertsComponent} from './pages/inserts/inserts.component';
import {NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import {ApolloModule} from "apollo-angular";


@NgModule({
  declarations: [
    WeissSchwarzMainComponent,
    CardSelectionComponent,
    TournamentsComponent,
    LearnToPlayComponent,
    AlbumComponent,
    InsertsComponent,
  ],

  imports: [
    ApolloModule,
    CommonModule,
    WeissSchwarzRoutingModule,
    NgImageSliderModule,
    SharedModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTypeaheadModule
  ],
  exports: [
    WeissSchwarzRoutingModule
  ]
})
export class WeissSchwarzModule {
}


