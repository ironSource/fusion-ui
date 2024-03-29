import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v3';
import {DaterangeComponent} from './daterange.component';
import {DaterangeService} from '@ironsource/fusion-ui/components/daterange/common/base';
import {CalendarModule} from '@ironsource/fusion-ui/components/calendar/v3';
import {DropdownSelectModule} from '@ironsource/fusion-ui/components/dropdown-select/v3';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v3';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox';
import {InputModule} from '@ironsource/fusion-ui/components/input';

@NgModule({
    declarations: [DaterangeComponent],
    imports: [
        CommonModule,
        IconModule,
        ReactiveFormsModule,
        ClickOutsideModule,
        CalendarModule,
        ButtonModule,
        DropdownSelectModule,
        TooltipModule,
        CheckboxModule,
        InputModule
    ],
    providers: [DaterangeService],
    exports: [DaterangeComponent]
})
export class DaterangeModule {}
