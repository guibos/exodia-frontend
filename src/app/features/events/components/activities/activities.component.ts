import {Component, OnInit} from '@angular/core';
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  faAnglesRight = faAnglesRight;

  constructor() {
  }

  ngOnInit(): void {
  }

}
