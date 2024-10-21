import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineCopyComponent } from './inline-copy.component';

describe('InlineCopyComponent', () => {
  let component: InlineCopyComponent;
  let fixture: ComponentFixture<InlineCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineCopyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InlineCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
