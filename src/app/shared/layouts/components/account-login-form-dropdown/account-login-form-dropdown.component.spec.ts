import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLoginFormDropdownComponent } from './account-login-form-dropdown.component';

describe('AccountLoginFormDropdownComponent', () => {
  let component: AccountLoginFormDropdownComponent;
  let fixture: ComponentFixture<AccountLoginFormDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountLoginFormDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountLoginFormDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
