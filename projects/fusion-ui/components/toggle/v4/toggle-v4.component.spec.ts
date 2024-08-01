import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleV4Component } from './toggle-v4.component';

describe('ToggleV4Component', () => {
  let component: ToggleV4Component;
  let fixture: ComponentFixture<ToggleV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleV4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
