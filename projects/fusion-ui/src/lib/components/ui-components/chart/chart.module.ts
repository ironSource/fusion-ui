import {NgModule} from '@angular/core';
import {CommonModule, CurrencyPipe, DatePipe, DecimalPipe, PercentPipe} from '@angular/common';
import {ShortNumberScaleSuffixModule} from '../../../pipes/numbers/short-number-scale-suffix/short-number-scale-suffix.module';
import {ChartComponent} from './chart.component';
import {LoaderModule} from '../loader/loader.module';
import {ChartDataService} from './chart.service';
import {ShortNumberScaleSuffixPipe} from '../../../pipes/numbers/short-number-scale-suffix/short-number-scale-suffix.pipe';
import {CloneModule} from '../../../pipes/clone/clone.module';

@NgModule({
    imports: [CommonModule, LoaderModule, ShortNumberScaleSuffixModule, CloneModule],
    declarations: [ChartComponent],
    exports: [ChartComponent],
    providers: [DatePipe, CurrencyPipe, DecimalPipe, PercentPipe, ChartDataService, ShortNumberScaleSuffixPipe],
    entryComponents: [ChartComponent]
})
export class ChartModule {}
