import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardVideogamesComponent} from './card-videogames.component';

describe('CardVideogamesComponent', () => {
  let component: CardVideogamesComponent;
  let fixture: ComponentFixture<CardVideogamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardVideogamesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVideogamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
