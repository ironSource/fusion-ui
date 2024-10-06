import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextWithDroppedListComponent } from './text-with-dropped-list.component';

describe('TextWithDroppedListComponent', () => {
  let component: TextWithDroppedListComponent;
  let fixture: ComponentFixture<TextWithDroppedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextWithDroppedListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextWithDroppedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
