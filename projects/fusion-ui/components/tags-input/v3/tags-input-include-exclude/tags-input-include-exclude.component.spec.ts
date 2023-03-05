import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsInputIncludeExcludeComponent } from './tags-input-include-exclude.component';

describe('TagsInputIncludeExcludeComponent', () => {
  let component: TagsInputIncludeExcludeComponent;
  let fixture: ComponentFixture<TagsInputIncludeExcludeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TagsInputIncludeExcludeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagsInputIncludeExcludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
