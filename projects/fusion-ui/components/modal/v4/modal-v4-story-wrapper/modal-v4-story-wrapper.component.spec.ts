import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalV4StoryWrapperComponent } from './modal-v4-story-wrapper.component';

describe('ModalV4StoryWrapperComponent', () => {
  let component: ModalV4StoryWrapperComponent;
  let fixture: ComponentFixture<ModalV4StoryWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ModalV4StoryWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalV4StoryWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
