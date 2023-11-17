import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WithCalendarComponent} from "../../shared/layouts/pages/with-calendar/with-calendar.component";
import {VideoGamesMainComponent} from "./pages/video-games-main/video-games-main.component";

const routes: Routes = [
  {
    path: "activities/video-games",
    component: WithCalendarComponent,
    children: [
      {
        path: "",
        component: VideoGamesMainComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class VideoGamesRoutingModule {
}
