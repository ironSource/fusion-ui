import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChipComponent } from './chip.component';


const LABEL = 'Label';

describe('ChipComponent', () => {
  let component: ChipComponent;
  let fixture: ComponentFixture<ChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', LABEL);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create label', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.fu-chip-label')).toBeTruthy();
    expect(el.querySelector('.fu-chip-label').textContent).toBe(LABEL);
  });

  it('by default should be small', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.fu-chip-small')).toBeTruthy();
  });
  it('by default should be filled', () => {
    
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.fu-chip-filled')).toBeTruthy();
  });

  it('can be rounded', () => {
    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', LABEL);
    fixture.componentRef.setInput('shape', 'round');
    fixture.detectChanges();
    
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.fu-chip-round')).toBeTruthy();
  });

  it('can be disabled', () => {
    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', LABEL);
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.fu-chip-disabled')).toBeTruthy();
  });
  it('can be selected', () => {
    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', LABEL);
    fixture.componentRef.setInput('selected', true);
    fixture.detectChanges();
    
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.fu-chip-selected')).toBeTruthy();
  });
  it('can be medium size', () => {
    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', LABEL);
    fixture.componentRef.setInput('size', 'medium');
    fixture.detectChanges();
    
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.fu-chip-medium')).toBeTruthy();
  });

  it('can be primary theme', () => {
    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', LABEL);
    fixture.componentRef.setInput('theme', 'primary');
    fixture.detectChanges();
    
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.fu-chip-primary')).toBeTruthy();
  });

  it('can be info theme', () => {
    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', LABEL);
    fixture.componentRef.setInput('theme', 'info');
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.fu-chip-info')).toBeTruthy();
  });

  it('can be error theme', () => {
    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', LABEL);
    fixture.componentRef.setInput('theme', 'error');
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.fu-chip-error')).toBeTruthy();
  });

  it('can be warning theme', () => {
    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', LABEL);
    fixture.componentRef.setInput('theme', 'warning');
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.fu-chip-warning')).toBeTruthy();
  });

  it('can be success theme', () => {
    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', LABEL);
    fixture.componentRef.setInput('theme', 'success');
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.fu-chip-success')).toBeTruthy();
  });

  it('can be dark theme', () => {
    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', LABEL);
    fixture.componentRef.setInput('theme', 'dark');
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.fu-chip-dark')).toBeTruthy();
  });

});
