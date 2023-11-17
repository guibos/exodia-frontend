import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutUsMainComponent} from './pages/about-us-main/about-us-main.component';
import {AboutUsRoutingModule} from "./about-us-routing.module";
import {AboutUsComponent} from './components/about-us/about-us.component';
import {JoinUsComponent} from './components/join-us/join-us.component';
import {SharedModule} from "../../shared/shared.module";
import {ContactComponent} from './components/contact/contact.component';


@NgModule({
  declarations: [
    AboutUsMainComponent,
    AboutUsComponent,
    JoinUsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule
  ],
  exports: [
    AboutUsRoutingModule
  ]
})
export class AboutUsModule {
}
