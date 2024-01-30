import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleButtonGroupComponent } from './toggle-button-group.component';

describe('ToggleButtonGroupComponent', () => {
  let component: ToggleButtonGroupComponent;
  let fixture: ComponentFixture<ToggleButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ToggleButtonGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
