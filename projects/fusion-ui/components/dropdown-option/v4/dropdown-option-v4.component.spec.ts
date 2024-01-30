import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownOptionV4Component } from './dropdown-option-v4.component';

describe('DropdownOptionV4Component', () => {
  let component: DropdownOptionV4Component;
  let fixture: ComponentFixture<DropdownOptionV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DropdownOptionV4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownOptionV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
