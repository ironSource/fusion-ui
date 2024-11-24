import {ChangeDetectionStrategy, Component, forwardRef, Input, TemplateRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown';
import {NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {MultiDropdownBaseComponent} from '@ironsource/fusion-ui/components/multi-dropdown/common/base';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {TooltipDirective} from '@ironsource/fusion-ui/components/tooltip/v4';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {DropdownSelectComponent} from '@ironsource/fusion-ui/components/dropdown-select/v4';
import {DropdownTriggerSize} from '@ironsource/fusion-ui/components/dropdown/v4';
import {IconData, IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {CheckboxComponent} from '@ironsource/fusion-ui/components/checkbox/v4';
import {ButtonComponent} from '@ironsource/fusion-ui/components/button/v4';
import {FlagComponent} from '@ironsource/fusion-ui/components/flag/v4';
import {DropdownSearchComponent} from '@ironsource/fusion-ui/components/dropdown-search/v4';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';
import {LoaderComponent} from '@ironsource/fusion-ui/components/loader/v4';
import {InputVariant} from '@ironsource/fusion-ui/components/input/v4';
import {InputHelperComponent} from '@ironsource/fusion-ui/components/input-helper/v4';
import {InputLabelComponent} from '@ironsource/fusion-ui/components/input-label/v4';
import {DynamicComponent} from '@ironsource/fusion-ui/components/dynamic-components/common/entities';

@Component({
    selector: 'fusion-multi-dropdown',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TooltipDirective,
        ClickOutsideModule,
        DropdownSelectComponent,
        IconModule,
        FlagComponent,
        CheckboxComponent,
        ButtonComponent,
        DropdownSearchComponent,
        LoaderComponent,
        GenericPipe,
        InputHelperComponent,
        InputLabelComponent
    ],
    host: {class: 'fusion-v4'},
    templateUrl: './multi-dropdown-v4.component.html',
    styleUrls: ['./multi-dropdown-v4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        DropdownService,
        {provide: ApiBase, useExisting: MultiDropdownV4Component},
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MultiDropdownV4Component),
            multi: true
        }
    ]
})
export class MultiDropdownV4Component extends MultiDropdownBaseComponent {
    @Input() size: DropdownTriggerSize = 'medium';
    @Input() optionTemplateRef: TemplateRef<any>;
    @Input() showSelectedFirst = true;
    @Input() testId: string;

    @Input() helperText: string;
    @Input() helperIcon: string;
    @Input() helperVariant: InputVariant = 'default';

    @Input() labelText: string;
    @Input() labelRequired: boolean = false;
    @Input() labelIcon: IconData;
    @Input() labelTooltipText: string;

    /** @ignore */
    @Input() dynamicTrigger?: DynamicComponent;

    /** @ignore */
    getOptionContent(option: DropdownOption): string {
        return this.dropdownService.optionToString(this.selected[0], this.mappingOptions, {dropdownType: 'multi'});
    }
}
