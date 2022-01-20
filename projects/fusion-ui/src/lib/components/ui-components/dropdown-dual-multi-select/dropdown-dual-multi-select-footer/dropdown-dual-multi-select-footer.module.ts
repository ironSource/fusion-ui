import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDualMultiSelectFooterComponent} from './dropdown-dual-multi-select-footer.component';
import {ButtonModule} from '../../button/button.module';

@NgModule({
    declarations: [DropdownDualMultiSelectFooterComponent],
    exports: [DropdownDualMultiSelectFooterComponent],
    imports: [CommonModule, ButtonModule]
})
export class DropdownDualMultiSelectFooterModule {}
