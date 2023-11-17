import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JoinUsCardComponent} from './join-us-card.component';

describe('JoinUsCardComponent', () => {
  let component: JoinUsCardComponent;
  let fixture: ComponentFixture<JoinUsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JoinUsCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(JoinUsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
