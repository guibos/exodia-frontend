import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GymkhanaDetailsComponent} from './gymkhana-details.component';

describe('GymkhanaDetailsComponent', () => {
  let component: GymkhanaDetailsComponent;
  let fixture: ComponentFixture<GymkhanaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GymkhanaDetailsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GymkhanaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
