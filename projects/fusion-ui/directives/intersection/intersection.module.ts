import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IntersectionDirective} from './intersection.directive';

@NgModule({
    declarations: [IntersectionDirective],
    exports: [IntersectionDirective],
    imports: [CommonModule]
})
export class IntersectionModule {}
