import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderInlineModule} from '@ironsource/fusion-ui/components/loader-inline';
import {DropdownLoaderComponent} from './dropdown-loader.component';
import {DropdownLoaderDirective} from './dropdown-loader.directive';

@NgModule({
    declarations: [DropdownLoaderDirective, DropdownLoaderComponent],
    exports: [DropdownLoaderDirective, LoaderInlineModule],
    imports: [CommonModule, LoaderInlineModule]
})
export class DropdownLoaderModule {}
