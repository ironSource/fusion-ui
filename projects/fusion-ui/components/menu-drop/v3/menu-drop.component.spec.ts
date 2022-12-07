import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDropComponent } from './menu-drop.component';

describe('MenuDropComponent', () => {
  let component: MenuDropComponent;
  let fixture: ComponentFixture<MenuDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MenuDropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
