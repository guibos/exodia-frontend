import {Component, Input, OnInit} from '@angular/core';
import {NgswService} from "../../../image/services/ngsw/ngsw.service";

@Component({
  selector: 'app-events-activities',
  templateUrl: './events-activities.component.html',
  styleUrls: ['./events-activities.component.css']
})
export class EventsActivitiesComponent implements OnInit {
  @Input() imagesPath!: string;
  pauseOnHover = false;
  pauseOnFocus = false;
  interval = 3000;

  constructor(private _ngsw: NgswService) {
  }

  ngOnInit(): void {

  }

}
