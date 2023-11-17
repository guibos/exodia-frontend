import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GymkhanaCardComponent} from './gymkhana-card.component';

describe('GymkhanaCardComponent', () => {
  let component: GymkhanaCardComponent;
  let fixture: ComponentFixture<GymkhanaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GymkhanaCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GymkhanaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
