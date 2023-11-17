import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {navItems} from "../../../navigation/constants/nav-items";
import {EventService} from "../../../events/services/event/event.service";
import {EventType} from "../../../events/enums/event-type";

@Injectable({
  providedIn: 'root'
})
export class JSONLDService {
  host: string = 'https://shirokuro.club'
  name: string = 'Shirokuro.club'
  maxEvents: number = 99999999999
  className: string = 'LinkedData'

  scriptType = 'application/ld+json';

  constructor(@Inject(DOCUMENT) private _document: Document, private eventService: EventService) {
  }

  insertSchema(): void {
    if (!this._document.head.getElementsByClassName(this.className).length) {
      this.eventService.getEvents([EventType.Any], this.maxEvents).subscribe(events => {
        let data: any[] = [
          this.getLogoLD(),
          this.getBreadcrumbLD(),
          this.getCourses(),

        ].concat(events.map(event => event.toJSONLD()))


        let script = this._document.createElement('script');
        script.setAttribute('class', this.className);
        script.type = this.scriptType;
        script.text = JSON.stringify(data);
        this._document.head.appendChild(script)
      })
    }
  }

  getLogoLD(): any {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": this.host,
      "logo": `${this.host}/assets/icons/icon.svg`
    }
  }

  getBreadcrumbLD(): any {
    let itemListElement: any[] = []

    navItems.slice(1, -1).forEach((navItem, index) => {
      itemListElement.push(
        {
          "@type": "ListItem",
          "position": index + 1,
          "name": navItem.name,
          "item": `${this.host}/${navItem.url}`
        })
    })
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": itemListElement
    }
  }

  getCourses(): any {
    return {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": $localize`:@@course.weiss-schwarz-name:Weiβ Schwarz demonstrations`,
      "description": $localize`:@@course.weiss-schwarz-description:We carry out totally free demonstrations. Depending on availability, a demo deck will be given away to new players.`,
      "provider": {
        "@type": "Organization",
        "name": this.name,
        "sameAs": this.host
      }
    }
  }


}
