import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardWeissSchwarzComponent} from './card-weiss-schwarz.component';

describe('CardWeissSchwarzComponent', () => {
  let component: CardWeissSchwarzComponent;
  let fixture: ComponentFixture<CardWeissSchwarzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardWeissSchwarzComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWeissSchwarzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
