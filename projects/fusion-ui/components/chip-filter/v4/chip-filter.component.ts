import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChipFilterBaseComponent, ChipType} from '@ironsource/fusion-ui/components/chip-filter/common/base';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipDirective} from '@ironsource/fusion-ui/components/tooltip/v4';

@Component({
    selector: 'fusion-chip-filter',
    standalone: true, // todo: just for storybook to work, will be fixed in storybook 8.5.0
    imports: [CommonModule, GenericPipe, IconModule, TooltipDirective],
    host: {class: 'fusion-v4'},
    templateUrl: './chip-filter.component.html',
    styleUrls: ['./chip-filter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipFilterComponent extends ChipFilterBaseComponent {
    /** @internal */
    placeholderChipV4Mode = true;

    get showClose(): boolean {
        return this.chipType$.getValue() !== 'AddFilter' && this.isCloseIcon$.getValue() && this.selected;
    }
    get showCaretDown(): boolean {
        return (
            this.chipType$.getValue() !== 'AddFilter' && ((this.isCloseIcon$.getValue() && !this.selected) || !this.isCloseIcon$.getValue())
        );
    }
}
