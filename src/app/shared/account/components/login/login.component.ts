import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AccountService} from "../../services/account/account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationStatus} from "../../classes/authenticationStatus/authentication-status";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signIn = 'sign-in'

  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  public showAuthenticationStatusMessage: boolean = false
  public authenticationStatusMessage = ''

  constructor(protected _accountService: AccountService, protected _route: ActivatedRoute) {
  }

  public onSubmit() {
    this._accountService.login(this.authForm.value.username!, this.authForm.value.password!).subscribe(
      (authenticationStatus) => {
        if (!authenticationStatus.statusOk) {
          this.authenticationFailed(authenticationStatus)
        } else {
          this.authenticationSuccessfully(authenticationStatus)
        }
      }
    )
  }


  public authenticationFailed(authenticationStatus: AuthenticationStatus): void {

  }

  protected authenticationSuccessfully(authenticationStatus: AuthenticationStatus): void {
  }

}
