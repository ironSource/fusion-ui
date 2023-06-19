import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPrimaryMenuComponent } from './navigation-primary-menu.component';

describe('NavigationPrimaryMenuComponent', () => {
  let component: NavigationPrimaryMenuComponent;
  let fixture: ComponentFixture<NavigationPrimaryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NavigationPrimaryMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationPrimaryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
