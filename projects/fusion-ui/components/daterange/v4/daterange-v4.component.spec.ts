import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaterangeV4Component } from './daterange-v4.component';

describe('DaterangeV4Component', () => {
  let component: DaterangeV4Component;
  let fixture: ComponentFixture<DaterangeV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaterangeV4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DaterangeV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
