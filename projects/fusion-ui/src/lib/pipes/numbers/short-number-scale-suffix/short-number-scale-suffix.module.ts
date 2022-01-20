import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShortNumberScaleSuffixPipe} from './short-number-scale-suffix.pipe';

@NgModule({
    declarations: [ShortNumberScaleSuffixPipe],
    exports: [ShortNumberScaleSuffixPipe],
    providers: [ShortNumberScaleSuffixPipe],
    imports: [CommonModule]
})
export class ShortNumberScaleSuffixModule {}
