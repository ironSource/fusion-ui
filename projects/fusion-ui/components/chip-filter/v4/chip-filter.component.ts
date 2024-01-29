import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChipFilterBaseComponent} from '@ironsource/fusion-ui/components/chip-filter/common/base';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipDirective} from '@ironsource/fusion-ui/components/tooltip/v4';

@Component({
    selector: 'fusion-chip-filter',
    standalone: true,
    imports: [CommonModule, GenericPipe, IconModule, TooltipDirective],
    host: {class: 'fusion-v4'},
    templateUrl: './chip-filter.component.html',
    styleUrls: ['./chip-filter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipFilterComponent extends ChipFilterBaseComponent {
    /** @internal */
    placeholderChipV4Mode = true;
}
