import {Component, OnInit} from '@angular/core';
import {socialNetworks} from "../../../social-networks/constants/social-networks";
import {SocialNetwork} from "../../../social-networks/classes/social-network/social-network";
import {NavItems} from "../../classes/nav-items/nav-items";
import {navItems} from "../../../navigation/constants/nav-items";


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  _SOCIAL_NETWORKS: SocialNetwork[] = socialNetworks
  _navItems: NavItems[] = navItems

  constructor() {
  }

  ngOnInit(): void {
  }

}
