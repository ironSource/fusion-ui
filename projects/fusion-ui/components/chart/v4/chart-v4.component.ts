import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule, CurrencyPipe, DatePipe, DecimalPipe, PercentPipe} from '@angular/common';
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    LineController,
    BarController,
    PieController,
    ScatterController,
    CategoryScale,
    LinearScale,
    Filler,
    Tooltip
} from 'chart.js';

import {ChartBaseComponent, ChartDataService} from '@ironsource/fusion-ui/components/chart/common/base';
import {ShortNumberScaleSuffixPipe} from '@ironsource/fusion-ui/pipes/numbers';

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    LineController,
    BarController,
    PieController,
    ScatterController,
    CategoryScale,
    LinearScale,
    Filler,
    Tooltip
);

@Component({
    selector: 'fusion-chart',
    standalone: true,
    imports: [CommonModule, ShortNumberScaleSuffixPipe],
    providers: [DatePipe, CurrencyPipe, DecimalPipe, PercentPipe, ChartDataService, ShortNumberScaleSuffixPipe],
    host: {class: 'fusion-v4'},
    templateUrl: './chart-v4.component.html',
    styleUrls: ['./chart-v4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartV4Component extends ChartBaseComponent {
    /** @internal */
    componentVersion = 4;
    @Input() testId!: string;
}
