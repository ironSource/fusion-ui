import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFilterIncludeExcludeComponent } from './top-filter-include-exclude.component';

describe('TopFilterIncludeExcludeComponent', () => {
  let component: TopFilterIncludeExcludeComponent;
  let fixture: ComponentFixture<TopFilterIncludeExcludeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TopFilterIncludeExcludeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopFilterIncludeExcludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
