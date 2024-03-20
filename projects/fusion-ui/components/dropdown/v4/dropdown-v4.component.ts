import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownBaseComponent} from '@ironsource/fusion-ui/components/dropdown/common/base';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';
import {NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {DropdownSelectComponent} from '@ironsource/fusion-ui/components/dropdown-select/v4';
import {DropdownSearchComponent} from '@ironsource/fusion-ui/components/dropdown-search/v4';
import {DropdownOptionsListComponent} from '@ironsource/fusion-ui/components/dropdown-options-list/v4';
import {DropdownTriggerSize} from './dropdown-v4.entities';
import {LoaderComponent} from '@ironsource/fusion-ui/components/loader/v4';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';

@Component({
    selector: 'fusion-dropdown',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TooltipModule,
        ClickOutsideModule,
        DropdownSelectComponent,
        DropdownSearchComponent,
        DropdownOptionsListComponent,
        LoaderComponent,
        GenericPipe
    ],
    host: {class: 'fusion-v4'},
    templateUrl: './dropdown-v4.component.html',
    styleUrls: ['./dropdown-v4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        DropdownService,
        {provide: ApiBase, useExisting: DropdownV4Component},
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropdownV4Component),
            multi: true
        }
    ]
})
export class DropdownV4Component extends DropdownBaseComponent {
    @Input() size: DropdownTriggerSize = 'medium';
    @Input() triggerMode: 'button' | 'button-text' | 'default' = 'default';
}
