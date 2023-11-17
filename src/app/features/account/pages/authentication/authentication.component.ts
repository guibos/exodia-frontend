import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../../../shared/account/services/account/account.service";

@Component({
  selector: 'app-account-main',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
