import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsInputComponent } from './tags-input.component';
import {AttributionService} from "@ironsource/fusion-ui/services/attribution";

describe('TagsInputComponent', () => {
  let component: TagsInputComponent;
  let fixture: ComponentFixture<TagsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TagsInputComponent ],
        providers:[AttributionService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
