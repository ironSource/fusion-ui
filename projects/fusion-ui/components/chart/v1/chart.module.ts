import {NgModule} from '@angular/core';
import {CommonModule, CurrencyPipe, DatePipe, DecimalPipe, PercentPipe} from '@angular/common';
import {ShortNumberScaleSuffixPipe} from '@ironsource/fusion-ui/pipes/numbers';
import {ChartComponent} from './chart.component';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader/v1';
import {CloneModule} from '@ironsource/fusion-ui/pipes/clone';
import {ChartDataService} from '@ironsource/fusion-ui/components/chart/common/base';

@NgModule({
    imports: [CommonModule, LoaderModule, ShortNumberScaleSuffixPipe, CloneModule],
    declarations: [ChartComponent],
    exports: [ChartComponent],
    providers: [DatePipe, CurrencyPipe, DecimalPipe, PercentPipe, ChartDataService, ShortNumberScaleSuffixPipe]
})
export class ChartModule {}
