import {NgModule} from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {LoaderInlineComponent} from './loader-inline.component';
import {IconModule} from '../icon/icon.module';

@NgModule({
    declarations: [LoaderInlineComponent],
    exports: [LoaderInlineComponent],
    providers: [CurrencyPipe],
    imports: [CommonModule, IconModule]
})
export class LoaderInlineModule {}
