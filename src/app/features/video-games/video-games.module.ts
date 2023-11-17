import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoGamesMainComponent} from './pages/video-games-main/video-games-main.component';
import {VideoGamesRoutingModule} from "./video-games-routing.module";
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [

    VideoGamesMainComponent,
  ],
  imports: [
    CommonModule,
    VideoGamesRoutingModule,
    NgbCarouselModule,
    SharedModule
  ],
  exports: [
    VideoGamesRoutingModule
  ]
})
export class VideoGamesModule {
}
