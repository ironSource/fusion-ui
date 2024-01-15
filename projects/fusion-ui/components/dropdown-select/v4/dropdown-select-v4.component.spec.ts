import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSelectV4Component } from './dropdown-select-v4.component';

describe('DropdownSelectV4Component', () => {
  let component: DropdownSelectV4Component;
  let fixture: ComponentFixture<DropdownSelectV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DropdownSelectV4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownSelectV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
