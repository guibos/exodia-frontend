import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardBoardGamesComponent} from './card-board-games.component';

describe('CardBoardGamesComponent', () => {
  let component: CardBoardGamesComponent;
  let fixture: ComponentFixture<CardBoardGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardBoardGamesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBoardGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
