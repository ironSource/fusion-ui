import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputInlineV4Component } from './input-inline-v4.component';

describe('InputInlineV4Component', () => {
  let component: InputInlineV4Component;
  let fixture: ComponentFixture<InputInlineV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputInlineV4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputInlineV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
