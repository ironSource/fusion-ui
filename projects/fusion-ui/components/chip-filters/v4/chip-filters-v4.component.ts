import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ChipFilterComponent} from '@ironsource/fusion-ui/components/chip-filter/v4';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DropdownComponent} from '@ironsource/fusion-ui/components/dropdown/v4';
import {ChipFiltersBaseComponent} from '@ironsource/fusion-ui/components/chip-filters/common/base';

@Component({
    selector: 'fusion-chip-filters',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, IconModule, ChipFilterComponent, DropdownComponent],
    host: {class: 'fusion-v4'},
    templateUrl: '../common/base/chip-filters.base.component.html',
    styleUrls: ['./chip-filters-v4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipFiltersV4Component extends ChipFiltersBaseComponent {
    addFilterIcon = 'ph/plus';
}
