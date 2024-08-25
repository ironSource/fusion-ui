import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerV4Component } from './datepicker-v4.component';

describe('DatepickerV4Component', () => {
  let component: DatepickerV4Component;
  let fixture: ComponentFixture<DatepickerV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerV4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatepickerV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
