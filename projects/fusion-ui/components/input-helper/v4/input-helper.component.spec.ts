import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputHelperComponent } from './input-helper.component';

describe('InputHelperComponent', () => {
  let component: InputHelperComponent;
  let fixture: ComponentFixture<InputHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputHelperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
