import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownOptionsComponent } from './dropdown-options.component';

describe('DropdownOptionsComponent', () => {
  let component: DropdownOptionsComponent;
  let fixture: ComponentFixture<DropdownOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
