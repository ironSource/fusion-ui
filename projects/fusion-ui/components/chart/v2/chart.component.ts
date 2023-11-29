import {ChangeDetectionStrategy, Component} from '@angular/core';
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
import {ChartBaseComponent} from '@ironsource/fusion-ui/components/chart/common/base';

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
    templateUrl: '../common/base/chart.base.component.html',
    styleUrls: ['./chart.component-common.scss', './chart.component.scss'],
    host: {'ui-version': '2'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent extends ChartBaseComponent {}
