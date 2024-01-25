import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarStoryWrapperComponent } from './snackbar-story-wrapper.component';
import {SnackbarService} from "../snackbar.service";

describe('SnackbarStoryWrapperComponent', () => {
  let component: SnackbarStoryWrapperComponent;
  let fixture: ComponentFixture<SnackbarStoryWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SnackbarStoryWrapperComponent ],
      providers: [SnackbarService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarStoryWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
