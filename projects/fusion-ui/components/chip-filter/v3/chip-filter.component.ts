import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ChipFilterBaseComponent} from '@ironsource/fusion-ui/components/chip-filter/common/base';

@Component({
    selector: 'fusion-chip-filter',
    templateUrl: './chip-filter.component.html',
    styleUrls: ['./chip-filter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipFilterComponent extends ChipFilterBaseComponent {}
