import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarRoutingModule} from "./calendar-routing.routing";
import {MainCalendarComponent} from './pages/main-calendar/main-calendar.component';
import {EventCardComponent} from './components/event-card/event-card.component';


@NgModule({
  declarations: [
    MainCalendarComponent,
    EventCardComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule
  ],
  exports: [
    CalendarRoutingModule
  ]
})
export class CalendarModule {
}
