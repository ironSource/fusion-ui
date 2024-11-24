import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ChipFiltersBaseComponent} from '@ironsource/fusion-ui/components/chip-filters/common/base';

@Component({
    selector: 'fusion-chip-filters',
    templateUrl: '../common/base/chip-filters.base.component.html',
    styleUrls: ['./chip-filters.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ChipFiltersComponent extends ChipFiltersBaseComponent {}
