import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCellEditComponent } from './custom-cell-edit.component';

describe('CustomCellEditComponent', () => {
  let component: CustomCellEditComponent;
  let fixture: ComponentFixture<CustomCellEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CustomCellEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCellEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
