import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownV4Component } from './dropdown-v4.component';

describe('DropdownV4Component', () => {
  let component: DropdownV4Component;
  let fixture: ComponentFixture<DropdownV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DropdownV4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
