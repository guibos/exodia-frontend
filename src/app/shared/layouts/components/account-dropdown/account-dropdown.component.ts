import {Component, OnInit} from '@angular/core';
import {faCircleUser, faCoffee} from '@fortawesome/free-solid-svg-icons';
import {AccountService} from "../../../account/services/account/account.service";

@Component({
  selector: 'app-auth-dropdown',
  templateUrl: './account-dropdown.component.html',
  styleUrls: ['./account-dropdown.component.css']
})
export class AccountDropdownComponent implements OnInit {
  faCircleUser = faCircleUser;

  get logged() {
    return this.accountService.logged();
  }

  constructor(public accountService: AccountService) {
  }

  ngOnInit(): void {
  }

}
