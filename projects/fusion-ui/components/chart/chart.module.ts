import {NgModule} from '@angular/core';
import {CommonModule, CurrencyPipe, DatePipe, DecimalPipe, PercentPipe} from '@angular/common';
import {ShortNumberScaleSuffixModule} from '@ironsource/fusion-ui/pipes/numbers';
import {ChartComponent} from './chart.component';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader';
import {ChartDataService} from './chart.service';
import {ShortNumberScaleSuffixPipe} from '@ironsource/fusion-ui/pipes/numbers';
import {CloneModule} from '@ironsource/fusion-ui/pipes/clone';

@NgModule({
    imports: [CommonModule, LoaderModule, ShortNumberScaleSuffixModule, CloneModule],
    declarations: [ChartComponent],
    exports: [ChartComponent],
    providers: [DatePipe, CurrencyPipe, DecimalPipe, PercentPipe, ChartDataService, ShortNumberScaleSuffixPipe]
})
export class ChartModule {}
