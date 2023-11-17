import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {
  localizations = [
    'ca-ES',
    'en-US',
    'es-ES'
  ]

  constructor(@Inject(LOCALE_ID) public locale: string) {
  }

  ngOnInit(): void {
  }

}
