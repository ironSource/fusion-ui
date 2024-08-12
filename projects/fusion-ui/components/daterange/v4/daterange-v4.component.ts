import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {IconData, IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DaterangeBaseComponent} from '@ironsource/fusion-ui/components/daterange/common/base';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {
    DropdownPlaceholder,
    DropdownSelectComponent,
    DropdownSelectConfigurations
} from '@ironsource/fusion-ui/components/dropdown-select/v4';
import {ButtonComponent} from '@ironsource/fusion-ui/components/button/v4';
import {CalendarComponent} from '@ironsource/fusion-ui/components/calendar/v4';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: 'fusion-daterange',
    standalone: true,
    host: {class: 'fusion-v4'},
    imports: [CommonModule, IconModule, ClickOutsideModule, DropdownSelectComponent, ButtonComponent, CalendarComponent],
    templateUrl: './daterange-v4.component.html',
    styleUrl: './daterange-v4.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {provide: ApiBase, useExisting: DaterangeV4Component},
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DaterangeV4Component),
            multi: true
        }
    ]
})
export class DaterangeV4Component extends DaterangeBaseComponent {
    @Input() selectorIcon: IconData = 'ph/calendar-blank';
    @Input() footerMessage: string = 'All dates are in UTC';
    /** @internal */
    dropdownSelectConfigurations$ = new BehaviorSubject<DropdownSelectConfigurations>({
        placeholder: {value: 'Select'}
    });

    /** @internal */
    pevIconName = 'ph/caret-left';
    /** @internal */
    nextIconName = 'ph/caret-right';

    get isOpen(): boolean {
        return this.dropdownSelectConfigurations$.getValue().isOpen;
    }

    get placeholder(): DropdownPlaceholder {
        return this.dropdownSelectConfigurations$.getValue().placeholder;
    }
}
