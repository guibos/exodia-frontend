import {EventType} from "../../enums/event-type";
import {SafeHtml} from "@angular/platform-browser";
import {LDEventStatus} from "../../enums/ld-event-status";
import {LDEventAttendanceMode} from "../../enums/ld-event-attendance-mode";
import {LDOffer} from "../ld-offer/ld-offer";
import {LDType} from "../../enums/ld-type";
import {LDLocation} from "../ld-location/ld-location";
import {LDPerformer} from "../ld-performer/ld-performer";
import {LDOrganizer} from "../ld-organizer/ld-organizer";
import {formatCurrency} from "@angular/common";
import {LDEventBadge} from "../ld-event-badge/ld-event-badge";


class Interval {
  constructor(
    public time: number,
    public singlePeriod: string,
    public multiplePeriod: string
  ) {
  }

}

const intervalOptions = [
  new Interval(
    24 * 60 * 60 * 1000,
    $localize`:@@interval.day:day`,
    $localize`:@@interval.days:days`,
  ),
  new Interval(
    60 * 60 * 1000,
    $localize`:@@interval.hour:hour`,
    $localize`:@@interval.hours:hours`,
  ),
  new Interval(
    60 * 1000,
    $localize`:@@interval.minute:minute`,
    $localize`:@@interval.minutes:minutes`,
  ),
  new Interval(
    1000,
    $localize`:@@interval.second:second`,
    $localize`:@@interval.seconds:seconds`,
  ),
]

export class LDEvent {
  constructor(
    public _id: string,
    public name: string,
    public description: SafeHtml,
    public startDate: Date,
    public endDate: Date,
    public eventStatus: LDEventStatus,
    public eventAttendanceMode: LDEventAttendanceMode,
    public location: LDLocation[],
    public image: string[],
    public offers: LDOffer[],
    public performer: LDPerformer[],
    public organizer: LDOrganizer[],
    public url: string,
    public types: EventType[],
    public participants: number | null,
    public locale: string,
    public type: LDType = LDType.event,
    public badges: LDEventBadge[] = []
  ) {
  }

  public getHumanRegressiveInterval(): string {
    const currentDate = new Date()
    const diffInMs = this.startDate.valueOf() - currentDate.valueOf()
    for (let interval of intervalOptions) {
      let diff = Math.round(diffInMs / interval.time)
      if (diff > 1) {
        return `${diff} ${interval.multiplePeriod}`
      } else if (diff > 0) {
        return `${diff} ${interval.singlePeriod}`
      }
    }
    return ''
  }

  public getHumanPrice(): string {
    let maxString = ''
    let minString = ''
    let max = this.offers.reduce((prev, current) => (prev.price > current.price) ? prev : current)
    let min = this.offers.reduce((prev, current) => (prev.price < current.price) ? prev : current)

    if (max.price != 0) {
      maxString = formatCurrency(max.price, this.locale, max.priceCurrency)
    } else {
      maxString = $localize`:@@event.free-price:Free`
    }

    if (min.price != 0) {
      minString = formatCurrency(min.price, this.locale, min.priceCurrency)
    } else {
      minString = $localize`:@@event.free-price:Free`
    }

    if (maxString === minString) {
      return `${maxString}`
    }
    return `${maxString} ~ ${minString}`
  }

  public getHumanEventType(): string {
    switch (this.types[0]) {
      case EventType.BoardGames:
        return $localize`:@@eventType.boardGame:Board games`
      case EventType.WeissSchwarz:
        return 'Weiß Schwarz'
      case EventType.Event:
        return $localize`:@@eventType.event:Event`
      default:
        return $localize`:@@eventType.other:Other`
    }
  }

  public toJSONLD(): object {
    let description = ''
    if (this.description.hasOwnProperty('changingThisBreaksApplicationSecurity')) {
      // @ts-ignore
      description = this.description.changingThisBreaksApplicationSecurity
    } else {
      description = this.description.toString()
    }

    return {
      "@context": "https://schema.org",
      "@type": this.type.valueOf(),
      "name": this.name,
      "startDate": this.startDate.toISOString(),
      "endDate": this.endDate.toISOString(),
      "eventAttendanceMode": this.eventAttendanceMode.valueOf(),
      "eventStatus": this.eventStatus.valueOf(),
      "location": this.location.map(location => location.toJSONLD()),
      "image": this.image,
      "description": description,
      "offers": this.offers.map(offer => offer.toJSONLD()),
      "performer": this.performer.map(performer => performer.toJSONLD()),
      "organizer": this.organizer.map(organizer => organizer.toJSONLD())
    }
  }

}
