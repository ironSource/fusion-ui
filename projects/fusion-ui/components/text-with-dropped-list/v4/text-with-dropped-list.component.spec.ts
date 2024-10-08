import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextWithDroppedListComponent } from './text-with-dropped-list.component';
import {BASE_LIST_OPTIONS} from "@ironsource/fusion-ui/components/dropped-list/v4/dropped-list.mock";

const TEXT = 'Test text';

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
    component.text = TEXT;
    component.list = BASE_LIST_OPTIONS
    component.size = 'small';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have text', () => {
    const textEl = fixture.nativeElement.querySelector('.fu-text');
    expect(textEl).toBeTruthy();
    expect(textEl.textContent).toBe(TEXT);
  });

  it('should have class small', () => {
    expect(fixture.nativeElement.classList).toContain('fu-small')
  });

  it('should have list on mouseenter', () => {
    fixture.nativeElement.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    const droppedListEl = fixture.nativeElement.querySelector('.fu-dropped-list');
    expect(droppedListEl).toBeTruthy();
    const textElId = fixture.nativeElement.querySelector('.fu-text').id;
    expect(droppedListEl.id).toBe('for_'+textElId);
  });
});
