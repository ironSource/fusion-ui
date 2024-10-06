import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DragAndDropDirective, DragAndDropListChanges} from '@ironsource/fusion-ui/directives/drag-and-drop';
import {IconButtonComponent} from '@ironsource/fusion-ui/components/button/v4';
import {ItemDragAndDrop} from './draggable-items-list.entities';

@Component({
    selector: 'fusion-draggable-items-list',
    standalone: true,
    imports: [IconModule, DragAndDropDirective, IconButtonComponent],
    templateUrl: './draggable-items-list.component.html',
    styleUrl: './draggable-items-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DraggableItemsListComponent {
    @Input() items: ItemDragAndDrop[] = [];

    @Output() orderChanged = new EventEmitter<DragAndDropListChanges>();
    @Output() itemRemoved = new EventEmitter<{removedAtIndex: number; itemList: ItemDragAndDrop[]}>();

    removeItem(index: number) {
        this.items.splice(index, 1);
        this.itemRemoved.emit({removedAtIndex: index, itemList: this.items});
    }
}
