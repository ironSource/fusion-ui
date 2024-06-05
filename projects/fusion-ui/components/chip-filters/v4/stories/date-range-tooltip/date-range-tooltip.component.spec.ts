import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangeTooltipComponent } from './date-range-tooltip.component';

describe('DateRangeTooltipComponent', () => {
  let component: DateRangeTooltipComponent;
  let fixture: ComponentFixture<DateRangeTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateRangeTooltipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateRangeTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
