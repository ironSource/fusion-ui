import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPopMenuComponent } from './navigation-pop-menu.component';

describe('NavigationPopMenuComponent', () => {
  let component: NavigationPopMenuComponent;
  let fixture: ComponentFixture<NavigationPopMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NavigationPopMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationPopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
