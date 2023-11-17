import {Component, OnInit} from '@angular/core';
import {SocialNetwork} from "../../../../shared/social-networks/classes/social-network/social-network";
import {socialNetworks} from "../../../../shared/social-networks/constants/social-networks";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  _SOCIAL_NETWORKS: SocialNetwork[] = socialNetworks

  constructor() {
  }

  ngOnInit(): void {
  }

}
