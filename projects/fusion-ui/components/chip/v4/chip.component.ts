import {ChangeDetectionStrategy, Component, EventEmitter, input, Output} from '@angular/core';
import {IconData, IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@Component({
    selector: 'fusion-chip',
    standalone: true,
    host: {class: 'fusion-v4'},
    imports: [IconModule],
    templateUrl: './chip.component.html',
    styleUrl: './chip.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipComponent {
    label = input.required<string>();
    iconName = input<IconData>();
    removeIconName = input<IconData>('ph/fill/x-circle');
    removable = input<boolean>(false);
    theme = input<'default' | 'primary' | 'info' | 'error' | 'success' | 'warning' | 'dark'>('default');
    size = input<'small' | 'medium'>('small');
    variant = input<'filled' | 'outlined'>('filled');
    shape = input<'square' | 'round'>('square');
    selected = input<boolean>(false);
    disabled = input<boolean>(false);

    /** @internal */
    @Output() readonly remove = new EventEmitter<string>();
}
