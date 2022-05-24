import {NgModule} from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {LoaderInlineComponent} from './loader-inline.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {LoadingIconComponent} from './components/loading-icon.component';

@NgModule({
    declarations: [LoaderInlineComponent, LoadingIconComponent],
    exports: [LoaderInlineComponent],
    providers: [CurrencyPipe],
    imports: [CommonModule, IconModule]
})
export class LoaderInlineModule {}
