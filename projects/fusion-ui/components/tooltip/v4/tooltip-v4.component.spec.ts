import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipV4Component } from './tooltip-v4.component';

describe('TooltipV4Component', () => {
  let component: TooltipV4Component;
  let fixture: ComponentFixture<TooltipV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TooltipV4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
