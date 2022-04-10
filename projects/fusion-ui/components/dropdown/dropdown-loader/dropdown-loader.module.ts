import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownLoaderComponent} from './dropdown-loader.component';
import {DropdownLoaderDirective} from './dropdown-loader.directive';
import {LoaderInlineModule} from '@ironsource/fusion-ui/components/loader-inline';

@NgModule({
    declarations: [DropdownLoaderDirective, DropdownLoaderComponent],
    exports: [DropdownLoaderDirective, LoaderInlineModule],
    imports: [CommonModule, LoaderInlineModule]
})
export class DropdownLoaderModule {}
