import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {DroppedListOption} from './text-with-dropped-list.entities';

@Component({
    selector: 'fusion-text-with-dropped-list',
    standalone: true,
    host: {
        class: 'fusion-v4',
        '[class.fu-disabled]': 'disabled',
        '[class.fu-small]': 'size === "small"'
    },
    imports: [],
    templateUrl: './text-with-dropped-list.component.html',
    styleUrl: './text-with-dropped-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextWithDroppedListComponent {
    @Input() size: 'small' | 'medium' = 'medium';
    @Input() text: string;
    @Input() disabled = false;
    @Input() list: DroppedListOption[] = [];
}
