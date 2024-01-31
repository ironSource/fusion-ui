import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipFilterComponent } from './chip-filter.component';

describe('ChipFilterComponent', () => {
  let component: ChipFilterComponent;
  let fixture: ComponentFixture<ChipFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChipFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
