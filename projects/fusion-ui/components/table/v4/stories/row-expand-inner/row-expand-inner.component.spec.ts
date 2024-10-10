import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowExpandInnerComponent } from './row-expand-inner.component';

describe('RowExpandInnerComponent', () => {
  let component: RowExpandInnerComponent;
  let fixture: ComponentFixture<RowExpandInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowExpandInnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowExpandInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
