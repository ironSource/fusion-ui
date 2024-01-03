import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerButtonComponent } from './trigger-button.component';

describe('TriggerButtonComponent', () => {
  let component: TriggerButtonComponent;
  let fixture: ComponentFixture<TriggerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TriggerButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriggerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
