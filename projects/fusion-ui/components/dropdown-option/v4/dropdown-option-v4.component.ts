import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownOptionBaseComponent} from '@ironsource/fusion-ui/components/dropdown-option/common/base';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';
import {FlagComponent} from '@ironsource/fusion-ui/components/flag/v4';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipDirective} from '@ironsource/fusion-ui/components/tooltip/v4';

@Component({
    selector: 'fusion-dropdown-option',
    standalone: true,
    imports: [CommonModule, DynamicComponentsModule, FlagComponent, GenericPipe, IconModule, TooltipDirective],
    providers: [DropdownService],
    templateUrl: './dropdown-option-v4.component.html',
    styleUrls: ['./dropdown-option-v4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownOptionV4Component extends DropdownOptionBaseComponent {}
