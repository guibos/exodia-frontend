import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BoardGamesMainComponent} from './board-games-main.component';

describe('BoardGamesMainComponent', () => {
  let component: BoardGamesMainComponent;
  let fixture: ComponentFixture<BoardGamesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardGamesMainComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BoardGamesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
