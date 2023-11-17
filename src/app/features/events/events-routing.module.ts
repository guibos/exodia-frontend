import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WithCalendarComponent} from "../../shared/layouts/pages/with-calendar/with-calendar.component";
import {EventsMainComponent} from "./pages/events-main/events-main.component";
import {GymkhanaComponent} from "./pages/gymkhana/gymkhana.component";
import {GymkhanaDetailsComponent} from "./pages/gymkhana-details/gymkhana-details.component";

const routes: Routes = [
  {
    path: "events",
    component: WithCalendarComponent,
    children: [
      {
        path: "",
        component: EventsMainComponent
      },
      {
        path: "gymkhana",
        component: GymkhanaComponent
      }, {
        path: "gymkhana/:id",
        component: GymkhanaDetailsComponent
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
export class EventsRoutingModule {
}
