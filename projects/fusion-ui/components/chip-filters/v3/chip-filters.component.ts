import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'fusion-chip-filters',
    templateUrl: '../common/base/chip-filters.base.component.html',
    styleUrls: ['./chip-filters.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipFiltersComponent {}
