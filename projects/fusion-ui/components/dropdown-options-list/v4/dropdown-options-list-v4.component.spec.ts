import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownOptionsListV4Component } from './dropdown-options-list-v4.component';
import {TooltipComponent} from "@ironsource/fusion-ui/components/tooltip/v4";

describe('DropdownOptionsListV4Component', () => {
  let component: DropdownOptionsListV4Component;
  let fixture: ComponentFixture<DropdownOptionsListV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DropdownOptionsListV4Component, TooltipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownOptionsListV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
