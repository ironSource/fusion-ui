import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollToDirective} from './scroll-to.directive';

@NgModule({
    declarations: [ScrollToDirective],
    exports: [ScrollToDirective],
    imports: [CommonModule]
})
export class ScrollToModule {}
