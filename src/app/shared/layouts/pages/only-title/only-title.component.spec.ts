import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OnlyTitleComponent} from './only-title.component';

describe('OnlyHeaderComponent', () => {
  let component: OnlyTitleComponent;
  let fixture: ComponentFixture<OnlyTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlyTitleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OnlyTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
