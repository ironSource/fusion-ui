import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadMoreDirective} from './load-more.directive';

@NgModule({
    declarations: [LoadMoreDirective],
    imports: [CommonModule],
    exports: [LoadMoreDirective]
})
export class LoadMoreModule {}
