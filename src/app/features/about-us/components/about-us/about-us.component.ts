import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  officialCreationDate = new Date("2021-04-04")
  creationDate = new Date("2019-11-01")

  constructor() {
  }

  ngOnInit(): void {
  }

}
