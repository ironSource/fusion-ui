import {ChangeDetectionStrategy, Component, forwardRef, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown';
import {NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {MultiDropdownBaseComponent} from '@ironsource/fusion-ui/components/multi-dropdown/common/base';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {ClickOutsideModule} from '@ironsource/fusion-ui';
import {DropdownSelectComponent} from '@ironsource/fusion-ui/components/dropdown-select/v4';
import {DropdownTriggerSize} from '@ironsource/fusion-ui/components/dropdown/v4';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {CheckboxComponent} from '@ironsource/fusion-ui/components/checkbox/v4';
import {ButtonComponent} from '@ironsource/fusion-ui/components/button/v4';
import {FlagComponent} from '@ironsource/fusion-ui/components/flag/v4';
import {DropdownSearchV4Component} from '@ironsource/fusion-ui/components/dropdown-search/v4/dropdown-search-v4.component';

@Component({
    selector: 'fusion-multi-dropdown',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TooltipModule,
        ClickOutsideModule,
        DropdownSelectComponent,
        IconModule,
        FlagComponent,
        CheckboxComponent,
        ButtonComponent,
        DropdownSearchV4Component
    ],
    host: {class: 'fusion-v4'},
    templateUrl: './multi-dropdown-v4.component.html',
    styleUrls: ['./multi-dropdown-v4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        DropdownService,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MultiDropdownV4Component),
            multi: true
        }
    ]
})
export class MultiDropdownV4Component extends MultiDropdownBaseComponent {
    @Input() size: DropdownTriggerSize = 'medium';

    /** @ignore */
    getOptionContent(option: DropdownOption): string {
        return this.dropdownService.optionToString(this.selected[0], this.mappingOptions, {dropdownType: 'multi'});
    }
}
