import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownCustomPlaceholderComponent} from './dropdown-custom-placeholder.component';
import {IconModule} from '../../../../../fusion-ui/src/lib/components/ui-components/icon/icon.module';

@NgModule({
    declarations: [DropdownCustomPlaceholderComponent],
    imports: [CommonModule, IconModule],
    exports: [DropdownCustomPlaceholderComponent]
})
export class DropdownCustomPlaceholderModule {}
