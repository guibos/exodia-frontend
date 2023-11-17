import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ParticipateTextComponent} from './participate-text.component';

describe('ParticipateTextComponent', () => {
  let component: ParticipateTextComponent;
  let fixture: ComponentFixture<ParticipateTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParticipateTextComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ParticipateTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
