import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'fusion-dropdown-dual-multi-select-loading',
    templateUrl: './dropdown-dual-multi-select-loading.component.html',
    styleUrls: ['./dropdown-dual-multi-select-loading.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class DropdownDualMultiSelectLoadingComponent {
    @Input() position: 'left' | 'right';
    @Input() set amount(numberOfItems: number) {
        this.items = new Array(numberOfItems);
    }

    items: Array<number>;
}
