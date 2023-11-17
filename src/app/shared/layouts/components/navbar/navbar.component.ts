import {Component, OnInit} from '@angular/core';
import {navItems} from "../../../navigation/constants/nav-items";
import {NavItems} from "../../classes/nav-items/nav-items";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  _navItems: NavItems[] = navItems
  public isMenuCollapsed = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
