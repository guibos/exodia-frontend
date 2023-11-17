import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WeissSchawarzMainComponent} from './weiss-schwarz-main.component';

describe('WeissSchawarzMainComponent', () => {
  let component: WeissSchawarzMainComponent;
  let fixture: ComponentFixture<WeissSchawarzMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeissSchawarzMainComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeissSchawarzMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
