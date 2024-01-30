import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchV4Component } from './search-v4.component';

describe('SearchV4Component', () => {
  let component: SearchV4Component;
  let fixture: ComponentFixture<SearchV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SearchV4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
