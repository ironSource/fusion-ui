import {ChangeDetectionStrategy, Component, Injector, Input} from '@angular/core';
import {MonthPicker, MonthPickerPlaceholder} from '../month-picker';
import {MONTH_PICKER_PLACEHOLDER} from '../month-picker.configuration';
import {StyleBase} from '../../../style/style-base';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {StyleVersion} from '@ironsource/fusion-ui/services';

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
export class MonthPickerPlaceholderComponent extends StyleBase {
    @Input() placeholder: MonthPickerPlaceholder = MONTH_PICKER_PLACEHOLDER;
    @Input() selected: MonthPicker;

    arrowIconName$: Observable<string | {iconName: string; iconVersion?: string}> = this.selectedVersion$.pipe(
        map(styleVersion => (styleVersion === StyleVersion.V2 ? 'arrow-down' : {iconName: 'arrow-dropdown', iconVersion: 'v1'})),
        startWith({iconName: 'arrow-dropdown', iconVersion: 'v1'})
    );

    get selectedDate(): Date {
        return new Date(`${this.selected?.year}-${this.selected?.month + 1}-10`);
    }

    constructor(injector: Injector) {
        super(injector);
    }
}
