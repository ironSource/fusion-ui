import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CapitalizePipe} from './capitalize.pipe';

@NgModule({
    declarations: [CapitalizePipe],
    providers: [CapitalizePipe],
    exports: [CapitalizePipe],
    imports: [CommonModule]
})
export class CapitalizeModule {}
