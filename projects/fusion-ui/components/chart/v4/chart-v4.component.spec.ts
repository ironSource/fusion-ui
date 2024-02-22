import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartV4Component } from './chart-v4.component';

describe('ChartV4Component', () => {
  let component: ChartV4Component;
  let fixture: ComponentFixture<ChartV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChartV4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
