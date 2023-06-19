import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSecondaryMenuComponent } from './navigation-secondary-menu.component';

describe('NavigationSecondaryMenuComponent', () => {
  let component: NavigationSecondaryMenuComponent;
  let fixture: ComponentFixture<NavigationSecondaryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NavigationSecondaryMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationSecondaryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
