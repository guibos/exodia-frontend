import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JoinUsTextComponent} from './join-us-text.component';

describe('JoinUsTextComponent', () => {
  let component: JoinUsTextComponent;
  let fixture: ComponentFixture<JoinUsTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JoinUsTextComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(JoinUsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
