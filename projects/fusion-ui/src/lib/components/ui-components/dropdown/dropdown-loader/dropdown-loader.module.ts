import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownLoaderComponent} from './dropdown-loader.component';
import {DropdownLoaderDirective} from './dropdown-loader.directive';
import {LoaderInlineModule} from '../../loader-inline/loader-inline.module';

@NgModule({
    declarations: [DropdownLoaderDirective, DropdownLoaderComponent],
    exports: [DropdownLoaderDirective, LoaderInlineModule],
    imports: [CommonModule, LoaderInlineModule]
})
export class DropdownLoaderModule {}
