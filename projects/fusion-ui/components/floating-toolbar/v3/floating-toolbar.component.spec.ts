import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingToolbarComponent } from './floating-toolbar.component';

describe('FloatingToolbarComponent', () => {
  let component: FloatingToolbarComponent;
  let fixture: ComponentFixture<FloatingToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FloatingToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
