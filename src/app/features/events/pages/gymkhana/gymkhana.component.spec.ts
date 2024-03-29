import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GymkhanaComponent} from './gymkhana.component';

describe('GymkhanaComponent', () => {
  let component: GymkhanaComponent;
  let fixture: ComponentFixture<GymkhanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GymkhanaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GymkhanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
