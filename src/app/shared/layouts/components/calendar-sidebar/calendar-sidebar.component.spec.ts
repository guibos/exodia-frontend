import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CalendarSidebarComponent} from './calendar-sidebar.component';

describe('SocialNetworkSidebarComponent', () => {
  let component: CalendarSidebarComponent;
  let fixture: ComponentFixture<CalendarSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarSidebarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
