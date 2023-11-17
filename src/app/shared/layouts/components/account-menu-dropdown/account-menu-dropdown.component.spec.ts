import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMenuDropdownComponent } from './account-menu-dropdown.component';

describe('AccountMenuDropdownComponent', () => {
  let component: AccountMenuDropdownComponent;
  let fixture: ComponentFixture<AccountMenuDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountMenuDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountMenuDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
