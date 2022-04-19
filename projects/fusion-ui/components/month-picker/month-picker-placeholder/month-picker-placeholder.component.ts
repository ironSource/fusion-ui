import {ChangeDetectionStrategy, Component, Injector, Input} from '@angular/core';
import {MonthPicker, MonthPickerPlaceholder} from '../month-picker';
import {MONTH_PICKER_PLACEHOLDER} from '../month-picker.configuration';
import {FusionBase, StyleVersion} from '@ironsource/fusion-ui/components/fusion-base';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {IconData} from '@ironsource/fusion-ui/components/icon';

@Component({
    selector: 'fusion-month-picker-placeholder',
    templateUrl: './month-picker-placeholder.component.html',
    styleUrls: [
        './month-picker-placeholder.component.scss',
        './month-picker-placeholder-v1.component.scss',
        './month-picker-placeholder-v2.component.scss'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthPickerPlaceholderComponent extends FusionBase {
    @Input() placeholder: MonthPickerPlaceholder = MONTH_PICKER_PLACEHOLDER;
    @Input() selected: MonthPicker;

    arrowIconName$: Observable<IconData> = this.selectedVersion$.pipe(
        map(styleVersion =>
            styleVersion === StyleVersion.V2 || styleVersion === StyleVersion.V3
                ? {iconName: 'arrow-down', iconVersion: 'v2'}
                : {iconName: 'arrow-dropdown', iconVersion: 'v1'}
        ),
        startWith({iconName: 'arrow-dropdown', iconVersion: 'v1'})
    );

    get selectedDate(): Date {
        return new Date(`${this.selected?.year}-${this.selected?.month + 1}-10`);
    }

    constructor(injector: Injector) {
        super(injector);
    }
}
