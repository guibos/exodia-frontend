import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ShirokuroCarrouselComponent} from './shirokuro-carrousel.component';

describe('ShirokuroCarrouselComponent', () => {
  let component: ShirokuroCarrouselComponent;
  let fixture: ComponentFixture<ShirokuroCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShirokuroCarrouselComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ShirokuroCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
