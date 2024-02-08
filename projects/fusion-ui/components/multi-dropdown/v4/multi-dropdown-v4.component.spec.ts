import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiDropdownV4Component } from './multi-dropdown-v4.component';

describe('MultiDropdownV4Component', () => {
  let component: MultiDropdownV4Component;
  let fixture: ComponentFixture<MultiDropdownV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MultiDropdownV4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiDropdownV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
