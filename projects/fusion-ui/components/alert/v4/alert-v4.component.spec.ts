import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertV4Component } from './alert-v4.component';

describe('AlertV4Component', () => {
  let component: AlertV4Component;
  let fixture: ComponentFixture<AlertV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AlertV4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
