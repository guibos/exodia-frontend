import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardGamesMainComponent} from './pages/board-games-main/board-games-main.component';
import {BoardGamesRoutingModule} from "./board-games-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    BoardGamesMainComponent,
  ],
  imports: [
    CommonModule,
    BoardGamesRoutingModule,
    SharedModule,
    NgbCarouselModule
  ],
  exports: [
    BoardGamesRoutingModule
  ]
})
export class BoardGamesModule {
}
