import {Component, Input} from '@angular/core';
import {NgbDropdown} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-account-login-dropdown',
  templateUrl: './account-login-dropdown.component.html',
  styleUrls: ['./account-login-dropdown.component.css']
})
export class AccountLoginDropdownComponent {
  @Input() dropDownElement: NgbDropdown | null =  null;

}
