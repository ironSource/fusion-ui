import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroppedListComponent } from './dropped-list.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
