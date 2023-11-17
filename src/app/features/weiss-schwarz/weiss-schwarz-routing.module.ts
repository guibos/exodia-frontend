import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeissSchwarzMainComponent} from "./pages/weiss-schwarz-main/weiss-schwarz-main.component";
import {WithCalendarComponent} from "../../shared/layouts/pages/with-calendar/with-calendar.component";
import {AlbumComponent} from "./pages/album/album.component";
import {InsertsComponent} from "./pages/inserts/inserts.component";

const routes: Routes = [
  {
    path: "activities/weiss-schwarz",
    component: WithCalendarComponent,
    children: [
      {
        path: "",
        component: WeissSchwarzMainComponent
      }, {
        path: "album",
        component: AlbumComponent
      }, {
        path: "inserts",
        component: InsertsComponent
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
export class WeissSchwarzRoutingModule {
}
