import {NgModule} from '@angular/core';
import {MessengerComponent} from './layouts/components/messenger/messenger.component';
import {NgbCarouselModule, NgbCollapseModule, NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {EventBattleFyService} from "./events/services/event-battle-fy/event-battle-fy.service";
import {EventService} from "./events/services/event/event.service";
import {EventEventbriteService} from "./events/services/event-eventbrite/event-eventbrite.service";
import {CommonModule} from "@angular/common";

import {JoinUsCardComponent} from './join-us/components/join-us-card/join-us-card.component';
import {JoinUsTextComponent} from './join-us/components/join-us-text/join-us-text.component';
import {ShirokuroCarrouselComponent} from './carrousel/components/shirokuro-carrousel/shirokuro-carrousel.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NextEventComponent} from "./activities/components/next-event/next-event.component";
import {
  ActivityParticipateCardComponent
} from "./activities/components/activity-participate-card/activity-participate-card.component";
import {EventsActivitiesComponent} from "./activities/components/events-activities/events-activities.component";
import {ParticipateTextComponent} from "./activities/components/participate-text/participate-text.component";
import {AccountModule} from "./account/account.module";

export function stringFormat(template: string, ...args: any[]): string {
  return template.replace(/{(\d+)}/g, function (match, number) {
    return typeof args[number] != 'undefined'
      ? args[number]
      : match
      ;
  });
}


@NgModule({
  declarations: [
    MessengerComponent,
    NextEventComponent,
    ActivityParticipateCardComponent,
    JoinUsCardComponent,
    EventsActivitiesComponent,
    ParticipateTextComponent,
    JoinUsTextComponent,
    ShirokuroCarrouselComponent,
  ],
  imports: [
    RouterModule,
    NgbCollapseModule,
    HttpClientModule,
    CommonModule,
    NgbCarouselModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    AccountModule
  ],
  exports: [
    MessengerComponent,
    NextEventComponent,
    ActivityParticipateCardComponent,
    JoinUsCardComponent,
    EventsActivitiesComponent,
    ParticipateTextComponent,
    JoinUsTextComponent,
    ShirokuroCarrouselComponent,
  ],
  providers: [
    EventBattleFyService,
    EventEventbriteService,
    EventService,
  ]

})
export class SharedModule {
}
