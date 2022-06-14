import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderInlineModule} from '@ironsource/fusion-ui/components/loader-inline/v2';
import {DropdownLoaderComponent} from './dropdown-loader.component';
import {DropdownLoaderDirective} from './dropdown-loader.directive';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@NgModule({
    declarations: [DropdownLoaderDirective, DropdownLoaderComponent],
    exports: [DropdownLoaderDirective, LoaderInlineModule],
    imports: [CommonModule, LoaderInlineModule, IconModule]
})
export class DropdownLoaderModule {}
