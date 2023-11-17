import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InsertsComponent} from './inserts.component';

describe('InsertsComponent', () => {
  let component: InsertsComponent;
  let fixture: ComponentFixture<InsertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InsertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
