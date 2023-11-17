import {Component, Inject, Input, LOCALE_ID, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-language-selector-item',
  templateUrl: './language-selector-item.component.html',
  styleUrls: ['./language-selector-item.component.css']
})
export class LanguageSelectorItemComponent implements OnInit {
  @Input() localization!: string;

  constructor(@Inject(LOCALE_ID) public locale: string, private router: Router) {
  }

  get language(): string {
    return this.localization.slice(0, 2).toUpperCase()
  }

  get active(): string {
    return this.localization == this.locale ? 'active ' : ''
  }

  get url(): string {
    let url = this.router.url.replace(`/${this.locale}`, '')

    return `/${this.localization}${url}`
  }

  ngOnInit(): void {
  }

}
