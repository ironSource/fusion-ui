import {ComponentRef, Directive} from '@angular/core';
import {DropdownOptionBaseDirective} from '@ironsource/fusion-ui/components/dropdown-option/common/base';
import {DropdownOptionComponent} from './dropdown-option.component';

@Directive({
    selector: '[fusionDropdownOption]'
})
export class DropdownOptionDirective extends DropdownOptionBaseDirective {
    protected dropdownOptionComponentType = DropdownOptionComponent;
    protected optionComponentRef: ComponentRef<DropdownOptionComponent>;
}
