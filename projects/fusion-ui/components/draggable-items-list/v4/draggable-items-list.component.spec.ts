import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DraggableItemsListComponent } from './draggable-items-list.component';
import {ItemDragAndDrop} from "./draggable-items-list.entities";

const ITEMS: ItemDragAndDrop[] = [
  {id: 1, label: 'Milk shake'},
  {id: 2, label: 'Cocktails'},
  {id: 3, label: 'Fruit salad'},
  {id: 4, label: 'Coffee'},
]

describe('DraggableItemsListComponent', () => {
  let component: DraggableItemsListComponent;
  let fixture: ComponentFixture<DraggableItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraggableItemsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraggableItemsListComponent);
    component = fixture.componentInstance;
    component.items = ITEMS;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have item-wrapper', () => {
    const itemWrapper: HTMLElement = fixture.nativeElement.querySelector('.fu-items-wrapper');
    expect(itemWrapper).toBeTruthy()
    expect(itemWrapper.tagName).toBe('UL')
  });

  it('should have items list', () => {
    const items: NodeList = fixture.nativeElement.querySelectorAll('.fu-items-wrapper .fu-list-item');
    expect(items).toBeTruthy();
    expect(items.length).toBe(ITEMS.length);
  });

  it('should have item', () => {
    const item: HTMLElement = fixture.nativeElement.querySelector('.fu-items-wrapper .fu-list-item');
    expect(item).toBeTruthy();
    expect(item.getAttribute('data-id')).toBe(ITEMS[0].id.toString());
  });

  it('should have item drag icon', () => {
    const item: HTMLElement = fixture.nativeElement.querySelector('.fu-items-wrapper .fu-list-item');
    const itemDragIcon: HTMLElement = item.querySelector('.fu-item-drag-icon .fu-drag-icon');
    expect(itemDragIcon).toBeTruthy();
    expect(itemDragIcon.classList).toContain('dots-six-vertical-bold');
  });

  it('should have item label', () => {
    const item: HTMLElement = fixture.nativeElement.querySelector('.fu-items-wrapper .fu-list-item');
    const itemLabel: HTMLElement = item.querySelector('.fu-item-content .fu-item-label');
    expect(itemLabel).toBeTruthy();
    expect(itemLabel.textContent).toBe(ITEMS[0].label);
  });

  it('should have item remove icon', () => {
    const item: HTMLElement = fixture.nativeElement.querySelector('.fu-items-wrapper .fu-list-item');
    const itemRemoveIconButton: HTMLElement = item.querySelector('.fu-item-content fusion-icon-button');
    expect(itemRemoveIconButton).toBeTruthy();
    expect(itemRemoveIconButton.getAttribute('iconname')).toBe('ph/x');
    expect(itemRemoveIconButton.getAttribute('size')).toBe('extraSmall');
  });

});
