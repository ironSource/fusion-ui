import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChipFiltersBaseComponent} from '../common/base';

@Component({
    selector: 'fusion-chip-filters',
    standalone: true,
    imports: [CommonModule],
    host: {class: 'fusion-v4'},
    templateUrl: '../common/base/chip-filters.base.component.html',
    styleUrls: ['./chip-filters-v4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipFiltersV4Component extends ChipFiltersBaseComponent {}
