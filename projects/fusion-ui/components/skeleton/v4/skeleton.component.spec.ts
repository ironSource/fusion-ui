import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonComponent } from './skeleton.component';

describe('SkeletonComponent', () => {
  let component: SkeletonComponent;
  let fixture: ComponentFixture<SkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });

  it('should have default: shape-rectangle class', () => {
    expect(fixture.nativeElement.querySelector('div.fu-shape-rectangle')).toBeTruthy();
  });

  it('type circle should have: shape-circle class', () => {
    fixture = TestBed.createComponent(SkeletonComponent);
    component = fixture.componentInstance;
    component.shape = 'circle';
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('div.fu-shape-circle')).toBeTruthy();
  });

  it('type square should have: shape-square class', () => {
    fixture = TestBed.createComponent(SkeletonComponent);
    component = fixture.componentInstance;
    component.shape = 'square';
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('div.fu-shape-square')).toBeTruthy();
  });

  it('type pill should have: shape-pill class', () => {
    fixture = TestBed.createComponent(SkeletonComponent);
    component = fixture.componentInstance;
    component.shape = 'pill';
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('div.fu-shape-pill')).toBeTruthy();
  });

});
