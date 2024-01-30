import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputV4Component } from './input-v4.component';

describe('InputV4Component', () => {
  let component: InputV4Component;
  let fixture: ComponentFixture<InputV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ InputV4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
