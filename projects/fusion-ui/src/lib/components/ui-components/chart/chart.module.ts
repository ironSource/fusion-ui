import {NgModule} from '@angular/core';
import {CommonModule, CurrencyPipe, DatePipe, DecimalPipe, PercentPipe} from '@angular/common';
import {ShortNumberScaleSuffixModule} from '@ironsource/fusion-ui/pipes';
import {ChartComponent} from './chart.component';
import {LoaderModule} from '../loader/loader.module';
import {ChartDataService} from './chart.service';
import {ShortNumberScaleSuffixPipe} from '@ironsource/fusion-ui/pipes';
import {CloneModule} from '@ironsource/fusion-ui/pipes';

@NgModule({
    imports: [CommonModule, LoaderModule, ShortNumberScaleSuffixModule, CloneModule],
    declarations: [ChartComponent],
    exports: [ChartComponent],
    providers: [DatePipe, CurrencyPipe, DecimalPipe, PercentPipe, ChartDataService, ShortNumberScaleSuffixPipe]
})
export class ChartModule {}
