import {ChangeDetectionStrategy, Component, HostBinding, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipDirective} from '@ironsource/fusion-ui/components/tooltip/v4';
import {ChipFilterBaseComponent} from '@ironsource/fusion-ui/components/chip-filter/common/base';
import {ChipFilterButtonSize, ChipFilterButtonWeight} from './chip-filter-button.entities';

@Component({
    selector: 'fusion-chip-filter-button',
    imports: [CommonModule, GenericPipe, IconModule, TooltipDirective],
    host: {class: 'fusion-v4'},
    templateUrl: '../chip-filter.component.html',
    styleUrls: ['../chip-filter.component.scss', './chip-filter-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipFilterButtonComponent extends ChipFilterBaseComponent {
    @Input() size: ChipFilterButtonSize = 'medium';
    @Input() weight: ChipFilterButtonWeight = 'light';
    @Input() showCaretIcon = true;

    @HostBinding('class') get chipFilterButtonClass(): string {
        return [this.size === 'small' && 'fu-size-small', this.weight === 'bold' && 'fu-size-bold'].filter(Boolean).join(' ');
    }

    get closeIconName(): string {
        return 'ph/caret-down';
    }
    get showClose(): boolean {
        return false;
    }
    get showCaretDown(): boolean {
        return this.showCaretIcon;
    }

    /** @internal */
    placeholderChipV4Mode = true;
}
