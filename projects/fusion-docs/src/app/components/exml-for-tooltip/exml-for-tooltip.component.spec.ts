import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmlForTooltipComponent } from './exml-for-tooltip.component';

describe('ExmlForTooltipComponent', () => {
  let component: ExmlForTooltipComponent;
  let fixture: ComponentFixture<ExmlForTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExmlForTooltipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExmlForTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
