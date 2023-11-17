import {NgModule} from '@angular/core';
import {HomeModule} from "./home/home.module";
import {WeissSchwarzModule} from "./weiss-schwarz/weiss-schwarz.module";
import {EventsModule} from "./events/events.module";
import {BoardGamesModule} from "./board-games/board-games.module";
import {AboutUsModule} from "./about-us/about-us.module";
import {VideoGamesModule} from "./video-games/video-games.module";
import {CalendarModule} from "./calendar/calendar.module";
import {AccountModule} from "./account/account.module";


@NgModule({
  declarations: [],
  imports: [
    EventsModule,
    HomeModule,
    WeissSchwarzModule,
    BoardGamesModule,
    CalendarModule,
    AboutUsModule,
    VideoGamesModule,
    AccountModule
  ]
})
export class FeaturesModule {
}
