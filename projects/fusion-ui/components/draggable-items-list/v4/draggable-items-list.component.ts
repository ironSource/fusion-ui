import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ItemDragAndDrop} from '@ironsource/fusion-ui/components/draggable-items-list/v4/draggable-items-list.entities';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@Component({
    selector: 'fusion-draggable-items-list',
    standalone: true,
    imports: [IconModule],
    templateUrl: './draggable-items-list.component.html',
    styleUrl: './draggable-items-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DraggableItemsListComponent {
    @Input() items: ItemDragAndDrop[] = [];
}
