import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainCalendarComponent} from "./pages/main-calendar/main-calendar.component";
import {OnlyTitleComponent} from "../../shared/layouts/pages/only-title/only-title.component";

const routes: Routes = [
  {
    path: "calendar",
    component: OnlyTitleComponent,
    children: [
      {
        path: "",
        component: MainCalendarComponent
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
export class CalendarRoutingModule {
}
