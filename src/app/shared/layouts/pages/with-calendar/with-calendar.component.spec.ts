import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WithCalendarComponent} from './with-calendar.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('WithCalendarComponent', () => {
  let component: WithCalendarComponent;
  let fixture: ComponentFixture<WithCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WithCalendarComponent],
      imports: [RouterTestingModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
