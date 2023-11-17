import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLoginDropdownComponent } from './account-login-dropdown.component';

describe('AccountLoginDropdownComponent', () => {
  let component: AccountLoginDropdownComponent;
  let fixture: ComponentFixture<AccountLoginDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountLoginDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountLoginDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
