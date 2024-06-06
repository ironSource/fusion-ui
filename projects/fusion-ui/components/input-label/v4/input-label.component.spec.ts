import {ChangeDetectionStrategy, DebugElement} from "@angular/core";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputLabelComponent } from './input-label.component';

const LABEL_TEXT: string = 'Label text' ;
const LABEL_ICON: string = 'ph/question' ;

describe('InputLabelComponent', () => {
  let component: InputLabelComponent;
  let fixture: ComponentFixture<InputLabelComponent>;
  let debugEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.overrideComponent(InputLabelComponent,{
      set: {changeDetection: ChangeDetectionStrategy.Default}
    }).createComponent(InputLabelComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have text', () => {
    component.text = LABEL_TEXT;
    fixture.detectChanges();
    expect(debugEl.nativeElement.textContent).toBe(LABEL_TEXT);
  });

  it('can be required', () => {
    component.required = true;
    fixture.detectChanges();
    const requiredEl = debugEl.nativeElement.querySelector('.fu-input-label-required');
    expect(requiredEl).toBeTruthy();
  });

  it('can have icon', () => {
    component.icon = LABEL_ICON;
    fixture.detectChanges();
    const iconEl = debugEl.nativeElement.querySelector('.fu-input-label-icon');
    expect(iconEl).toBeTruthy();
    expect(iconEl.classList).toContain(LABEL_ICON.replace('ph/',''));
    expect(iconEl.getAttribute('ng-reflect-name')).toBe(LABEL_ICON);

  });

});
