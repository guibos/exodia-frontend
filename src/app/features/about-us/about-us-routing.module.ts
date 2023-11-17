import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WithCalendarComponent} from "../../shared/layouts/pages/with-calendar/with-calendar.component";
import {AboutUsMainComponent} from "./pages/about-us-main/about-us-main.component";

const routes: Routes = [
  {
    path: "about-us",
    component: WithCalendarComponent,
    children: [
      {
        path: "",
        component: AboutUsMainComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule {
}
