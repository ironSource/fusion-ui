import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownCustomPlaceholderComponent} from './dropdown-custom-placeholder.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@NgModule({
    declarations: [DropdownCustomPlaceholderComponent],
    imports: [CommonModule, IconModule],
    exports: [DropdownCustomPlaceholderComponent]
})
export class DropdownCustomPlaceholderModule {}
