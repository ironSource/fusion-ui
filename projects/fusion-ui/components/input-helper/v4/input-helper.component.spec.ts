import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputHelperComponent } from './input-helper.component';
import {ChangeDetectionStrategy, DebugElement} from "@angular/core";

const helperText = 'test for helper';
const helperIcon = 'ph/fill/warning-octagon';

describe('InputHelperComponent', () => {
  let component: InputHelperComponent;
  let fixture: ComponentFixture<InputHelperComponent>;
  let debugEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputHelperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.overrideComponent(InputHelperComponent,{
      set: {changeDetection: ChangeDetectionStrategy.Default}
    }).createComponent(InputHelperComponent);

    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text', () => {
    component.text = helperText;
    fixture.detectChanges();
    expect(debugEl.nativeElement.textContent).toBe(helperText);
  });

  it('should render text and icon', () => {
    component.text = helperText;
    component.iconName = helperIcon;
    fixture.detectChanges();
    expect(debugEl.nativeElement.textContent).toBe(helperText);
    const icon = debugEl.nativeElement.querySelector('fusion-icon');
    expect(icon).toBeTruthy();
    expect(icon.classList).toContain('fu-helper-icon');
    expect(icon.classList).toContain('warning-octagon-fill');
    expect(icon.getAttribute('ng-reflect-name')).toBe(helperIcon);
  });

  it('should render state error', () => {
    component.text = helperText;
    component.state = 'error';
    fixture.detectChanges();
    const helperHolder = debugEl.nativeElement.querySelector('.fu-input-helper');
    expect(helperHolder.textContent).toBe(helperText);
    expect(helperHolder.classList).toContain('fu-variant-error');
  });

  it('should render text in state warning', () => {
    component.text = helperText;
    component.state = 'warning';
    fixture.detectChanges();
    const helperHolder = debugEl.nativeElement.querySelector('.fu-input-helper');
    expect(helperHolder.textContent).toBe(helperText);
    expect(helperHolder.classList).toContain('fu-variant-warning');
  });

  it('should render text in state success', () => {
    component.text = helperText;
    component.state = 'success';
    fixture.detectChanges();
    const helperHolder = debugEl.nativeElement.querySelector('.fu-input-helper');
    expect(helperHolder.textContent).toBe(helperText);
    expect(helperHolder.classList).toContain('fu-variant-success');
  });
});
