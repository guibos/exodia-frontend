import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountRoutingModule} from "./account-routing.module";
import { RegisterComponent } from './components/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthenticationComponent} from "./pages/authentication/authentication.component";
import { LoginCardComponent } from './components/login-card/login-card.component';
import {SharedModule} from "../../shared/shared.module";
import { LoginAccountComponent } from './components/login-account/login-account.component';



@NgModule({
  declarations: [
    AuthenticationComponent,
    RegisterComponent,
    LoginCardComponent,
    LoginAccountComponent,

  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    AccountRoutingModule
  ]
})
export class AccountModule {
}
