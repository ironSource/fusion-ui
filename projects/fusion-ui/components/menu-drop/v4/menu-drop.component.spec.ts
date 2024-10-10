import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDropV4Component } from './menu-drop.component';

describe('MenuDropV4Component', () => {
  let component: MenuDropV4Component;
  let fixture: ComponentFixture<MenuDropV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MenuDropV4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDropV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
