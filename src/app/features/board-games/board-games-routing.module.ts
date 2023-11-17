import {RouterModule, Routes} from "@angular/router";
import {WithCalendarComponent} from "../../shared/layouts/pages/with-calendar/with-calendar.component";
import {NgModule} from "@angular/core";
import {BoardGamesMainComponent} from "./pages/board-games-main/board-games-main.component";

const routes: Routes = [
  {
    path: "activities/board-games",
    component: WithCalendarComponent,
    children: [
      {
        path: "",
        component: BoardGamesMainComponent
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
export class BoardGamesRoutingModule {
}
