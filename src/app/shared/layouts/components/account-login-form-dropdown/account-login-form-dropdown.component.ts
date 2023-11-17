import {Component, Input, OnInit} from '@angular/core';
import {AccountService} from "../../../account/services/account/account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbDropdown} from "@ng-bootstrap/ng-bootstrap";
import {
  AuthenticationStatus
} from "../../../account/classes/authenticationStatus/authentication-status";
import {LoginComponent} from "../../../account/components/login/login.component";

@Component({
  selector: 'app-auth-login-dropdown',
  templateUrl: '../../../account/components/login/login.component.html',
  styleUrls: ['../../../account/components/login/login.component.css']
})
export class AccountLoginFormDropdownComponent extends LoginComponent {
  @Input() dropDownElement: NgbDropdown | null =  null;

  override signIn = 'sign-in-page'

  constructor(_accountService: AccountService, _route: ActivatedRoute, private _router: Router) {
    super(_accountService, _route);
  }

  override authenticationSuccessfully(authenticationStatus: AuthenticationStatus): void {
    this.dropDownElement?.close();
  }

  override authenticationFailed(authenticationStatus: AuthenticationStatus): void {
    this._router.navigate(['/', 'account', 'authentication'], {fragment: this.signIn}).then();
  }

}
