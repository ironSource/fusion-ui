import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalV4Component } from './modal-v4.component';

describe('ModalV4Component', () => {
  let component: ModalV4Component;
  let fixture: ComponentFixture<ModalV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ModalV4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
