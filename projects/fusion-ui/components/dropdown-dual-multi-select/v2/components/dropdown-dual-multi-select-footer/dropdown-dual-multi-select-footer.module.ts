import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDualMultiSelectFooterComponent} from './dropdown-dual-multi-select-footer.component';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';

@NgModule({
    declarations: [DropdownDualMultiSelectFooterComponent],
    exports: [DropdownDualMultiSelectFooterComponent],
    imports: [CommonModule, ButtonModule]
})
export class DropdownDualMultiSelectFooterModule {}
