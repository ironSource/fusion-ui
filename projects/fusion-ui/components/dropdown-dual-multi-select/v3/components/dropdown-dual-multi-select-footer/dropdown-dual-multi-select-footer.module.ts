import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDualMultiSelectFooterComponent} from './dropdown-dual-multi-select-footer.component';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v3';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';

@NgModule({
    declarations: [DropdownDualMultiSelectFooterComponent],
    exports: [DropdownDualMultiSelectFooterComponent],
    imports: [CommonModule, ButtonModule, GenericPipe]
})
export class DropdownDualMultiSelectFooterModule {}
