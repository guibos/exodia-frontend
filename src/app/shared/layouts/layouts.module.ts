import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {WithCalendarComponent} from './pages/with-calendar/with-calendar.component';
import {CalendarSidebarComponent} from "./components/calendar-sidebar/calendar-sidebar.component";
import {EmptyComponent} from './pages/empty/empty.component';
import {OnlyTitleComponent} from "./pages/only-title/only-title.component";
import {LanguageSelectorComponent} from './components/language-selector/language-selector.component';
import {LanguageSelectorItemComponent} from './components/language-selector-item/language-selector-item.component';
import {AccountDropdownComponent} from './components/account-dropdown/account-dropdown.component';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {SharedModule} from "../shared.module";
import {NavbarComponent} from "./components/navbar/navbar.component";
import { AccountLoginDropdownComponent } from './components/account-login-dropdown/account-login-dropdown.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AccountLoginFormDropdownComponent } from './components/account-login-form-dropdown/account-login-form-dropdown.component';
import { AccountMenuDropdownComponent } from './components/account-menu-dropdown/account-menu-dropdown.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    WithCalendarComponent,
    CalendarSidebarComponent,
    EmptyComponent,
    OnlyTitleComponent,
    LanguageSelectorComponent,
    LanguageSelectorItemComponent,
    AccountDropdownComponent,
    FooterComponent,
    AccountLoginDropdownComponent,
    AccountLoginFormDropdownComponent,
    AccountMenuDropdownComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    FontAwesomeModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
        NavbarComponent,

    LanguageSelectorComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutsModule {
}
