import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipFiltersV4Component } from './chip-filters-v4.component';

describe('ChipFiltersV4Component', () => {
  let component: ChipFiltersV4Component;
  let fixture: ComponentFixture<ChipFiltersV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChipFiltersV4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipFiltersV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
