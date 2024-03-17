import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLabelsV4Component } from './chart-labels-v4.component';

describe('ChartLabelsV4Component', () => {
  let component: ChartLabelsV4Component;
  let fixture: ComponentFixture<ChartLabelsV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChartLabelsV4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartLabelsV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
