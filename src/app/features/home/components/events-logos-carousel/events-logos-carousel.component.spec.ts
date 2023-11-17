import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventsLogosCarouselComponent} from './events-logos-carousel.component';

describe('EventsLogosCarouselComponent', () => {
  let component: EventsLogosCarouselComponent;
  let fixture: ComponentFixture<EventsLogosCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventsLogosCarouselComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsLogosCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
