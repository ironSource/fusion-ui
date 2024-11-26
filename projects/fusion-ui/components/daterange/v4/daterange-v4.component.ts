import {ChangeDetectionStrategy, Component, forwardRef, inject, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BehaviorSubject} from 'rxjs';
import {IconData, IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DaterangeBaseComponent} from '@ironsource/fusion-ui/components/daterange/common/base';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {
    DropdownPlaceholder,
    DropdownSelectComponent,
    DropdownSelectConfigurations
} from '@ironsource/fusion-ui/components/dropdown-select/v4';
import {ButtonComponent} from '@ironsource/fusion-ui/components/button/v4';
import {CalendarComponent} from '@ironsource/fusion-ui/components/calendar/v4';
import {CheckboxComponent} from '@ironsource/fusion-ui/components/checkbox/v4';
import {InputComponent} from '@ironsource/fusion-ui/components/input/v4';
import {TestIdsService} from '@ironsource/fusion-ui/services/test-ids';
import {DateRangeTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';

@Component({
    selector: 'fusion-daterange',
    standalone: true, // todo: just for storybook to work, will be fixed in storybook 8.5.0
    host: {class: 'fusion-v4'},
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IconModule,
        ClickOutsideModule,
        DropdownSelectComponent,
        ButtonComponent,
        CalendarComponent,
        CheckboxComponent,
        InputComponent,
        GenericPipe
    ],
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
    /** @internal */
    @Input() selectorIcon: IconData = 'ph/calendar-blank';
    @Input() footerMessage: string = 'All dates are in UTC';

    @Input() testId: string;
    /** @internal */
    testIdModifiers: typeof DateRangeTestIdModifiers = DateRangeTestIdModifiers;
    /** @internal */
    testIdsService: TestIdsService = inject(TestIdsService);

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
