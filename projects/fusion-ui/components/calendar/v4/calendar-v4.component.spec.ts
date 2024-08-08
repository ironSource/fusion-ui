import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarV4Component } from './calendar-v4.component';

describe('CalendarV4Component', () => {
  let component: CalendarV4Component;
  let fixture: ComponentFixture<CalendarV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarV4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
