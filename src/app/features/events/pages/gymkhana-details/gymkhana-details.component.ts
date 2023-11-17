import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GymkhanaService} from "../../services/gymkhana/gymkhana.service";
import {LDEvent} from "../../../../shared/events/classes/ld-event/ld-event";
import {EventType} from "../../../../shared/events/enums/event-type";
import {SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-gymkhana-details',
  templateUrl: './gymkhana-details.component.html',
  styleUrls: ['./gymkhana-details.component.css']
})
export class GymkhanaDetailsComponent implements OnInit {
  eventTypes = [EventType.Event]
  public eventDetail: LDEvent | null = null

  constructor(
    public route: ActivatedRoute,
    private gymkhanaService: GymkhanaService
  ) {

  }

  get title(): string {
    return this.eventDetail !== null ? this.eventDetail.name : ''
  }

  get description(): SafeHtml {
    return this.eventDetail !== null ? this.eventDetail.description : ''
  }

  ngOnInit(): void {
    this.gymkhanaService.getEventDetails(
      Number(this.route.snapshot.url[1])
    ).subscribe(res => {
      this.eventDetail = res
    })
  }


}
