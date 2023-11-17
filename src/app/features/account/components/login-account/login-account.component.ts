import {Component, OnInit,} from '@angular/core';

import {LoginComponent} from "../../../../shared/account/components/login/login.component";
import {AuthenticationStatus} from "../../../../shared/account/classes/authenticationStatus/authentication-status";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountService} from "../../../../shared/account/services/account/account.service";
import { Location } from '@angular/common'

@Component({
  selector: 'app-login-account',
  templateUrl: '../../../../shared/account/components/login/login.component.html',
  styleUrls: ['../../../../shared/account/components/login/login.component.css']
})
export class LoginAccountComponent extends LoginComponent implements OnInit {

  constructor(_accountService: AccountService, _route: ActivatedRoute, private _location: Location) {
    super(_accountService, _route);
  }

  ngOnInit(): void {
    this._route.queryParams
      .subscribe(params => {
        if (params['authentication'] && params['message']) {
          this.showAuthenticationStatusMessage = true
          this.authenticationStatusMessage = params['message'];
        }
      }
    );
  }

  override authenticationSuccessfully(authenticationStatus: AuthenticationStatus): void {
    this._location.back();
  }

  override authenticationFailed(authenticationStatus: AuthenticationStatus): void {
    this.showAuthenticationStatusMessage = true
    this.authenticationStatusMessage = authenticationStatus.message;
  }
}
