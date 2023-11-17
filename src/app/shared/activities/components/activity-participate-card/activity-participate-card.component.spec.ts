import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ActivityParticipateCardComponent} from './activity-participate-card.component';

describe('ActivityParticipateCardComponent', () => {
  let component: ActivityParticipateCardComponent;
  let fixture: ComponentFixture<ActivityParticipateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivityParticipateCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ActivityParticipateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
