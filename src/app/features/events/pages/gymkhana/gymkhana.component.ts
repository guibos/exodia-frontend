import {Component, OnInit} from '@angular/core';
import {EventType} from "../../../../shared/events/enums/event-type";
import {GymkhanaService} from "../../services/gymkhana/gymkhana.service";
import {LDEvent} from "../../../../shared/events/classes/ld-event/ld-event";

@Component({
  selector: 'app-gymkhana',
  templateUrl: './gymkhana.component.html',
  styleUrls: ['./gymkhana.component.css']
})
export class GymkhanaComponent implements OnInit {
  title = $localize`:@@gymkhana-title:Gymkhana`
  eventTypes = [EventType.Event]
  gymkhanas: LDEvent[] = []
  maxEvents = 4

  constructor(private gymkhanaService: GymkhanaService) {
  }

  ngOnInit(): void {
    this.gymkhanaService.getEvents().subscribe(events => {
      this.gymkhanas = events
    })
  }

  currentEvents(): LDEvent[] {
    return this.gymkhanas.filter(event => event.startDate.getTime() < Date.now() && event.endDate.getTime() > Date.now())
  }

  futureEvents(): LDEvent[] {
    return this.gymkhanas.filter(event => event.startDate.getTime() > Date.now())
  }

}
