import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroppedListComponent } from './dropped-list.component';
import {
  APPLICATION_LIST_OPTIONS,
  BASE_LIST_OPTIONS,
  COUNTRY_LIST_OPTIONS
} from "@ironsource/fusion-ui/components/dropped-list/v4/dropped-list.mock";

describe('DroppedListComponent', () => {
  let component: DroppedListComponent;
  let fixture: ComponentFixture<DroppedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DroppedListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DroppedListComponent);
    component = fixture.componentInstance;
    component.list = BASE_LIST_OPTIONS;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has li list elements', () => {
    const itemsEl = fixture.nativeElement.querySelectorAll('li');
    expect(itemsEl.length).toBe(BASE_LIST_OPTIONS.length);
  });

  it('should has li item with text', () => {
    const itemsEl = fixture.nativeElement.querySelectorAll('li');
    itemsEl.forEach((item, index) => {
      expect(item.textContent).toBe(BASE_LIST_OPTIONS[index].label);
    });
  });

  describe('DroppedListComponent with countries', () => {
    beforeEach(async () => {
      fixture = TestBed.createComponent(DroppedListComponent);
      component = fixture.componentInstance;
      component.list = COUNTRY_LIST_OPTIONS;
      fixture.detectChanges();
    });

    it('should has li item with Country flag and name', () => {
      const itemsEl = fixture.nativeElement.querySelectorAll('li');
      itemsEl.forEach((item, index) => {
        const flagEl = item.querySelector('fusion-flag');
        expect(flagEl.getAttribute('ng-reflect-country-code')).toBe(COUNTRY_LIST_OPTIONS[index].flag);
        expect(item.textContent).toBe(COUNTRY_LIST_OPTIONS[index].label);
      });
    });
  });

  describe('DroppedListComponent with applications', () => {
    beforeEach(async () => {
      fixture = TestBed.createComponent(DroppedListComponent);
      component = fixture.componentInstance;
      component.list = APPLICATION_LIST_OPTIONS;
      fixture.detectChanges();
    });

    it('should has li item with application image and name', () => {
      const itemsEl = fixture.nativeElement.querySelectorAll('li');
      itemsEl.forEach((item, index) => {
        const appImageEl = item.querySelector('img.fu-list-item-image');
        expect(appImageEl.getAttribute('src')).toBe(APPLICATION_LIST_OPTIONS[index].imageUrl);
        expect(item.textContent).toBe(APPLICATION_LIST_OPTIONS[index].label);
      });
    });
  });


});
