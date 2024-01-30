import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSearchV4Component } from './dropdown-search-v4.component';

describe('DropdownSearchV4Component', () => {
  let component: DropdownSearchV4Component;
  let fixture: ComponentFixture<DropdownSearchV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DropdownSearchV4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownSearchV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
