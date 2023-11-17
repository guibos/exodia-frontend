import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LanguageSelectorItemComponent} from './language-selector-item.component';

describe('LanguageSelectorItemComponent', () => {
  let component: LanguageSelectorItemComponent;
  let fixture: ComponentFixture<LanguageSelectorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguageSelectorItemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LanguageSelectorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
