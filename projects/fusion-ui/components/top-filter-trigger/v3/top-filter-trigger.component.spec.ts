import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFilterTriggerComponent } from './top-filter-trigger.component';

describe('TopFilterTriggerComponent', () => {
  let component: TopFilterTriggerComponent;
  let fixture: ComponentFixture<TopFilterTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TopFilterTriggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopFilterTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
