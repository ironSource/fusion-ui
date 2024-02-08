import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipFilterButtonComponent } from './chip-filter-button.component';

describe('ChipFilterButtonComponent', () => {
  let component: ChipFilterButtonComponent;
  let fixture: ComponentFixture<ChipFilterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChipFilterButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipFilterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
