import {ChangeDetectionStrategy, Component} from '@angular/core';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
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
import {ChartBaseComponent, ChartData} from '@ironsource/fusion-ui/components/chart/common/base';
import {ChartBaseDatasetOptions, CHART_CONFIGURATIONS, BASE_DATASET_OPTIONS} from '@ironsource/fusion-ui/components/chart/common/base';

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
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent extends ChartBaseComponent {
    protected getColors(): string[] {
        const palette = this.colorsService.getColorPalette(1);
        const legends = (this._data as ChartData).legends;
        const customPalette = legends
            ? legends.map((legend, idx) => {
                  return !isNullOrUndefined(legend.color)
                      ? legend.color
                      : !isNullOrUndefined(palette[idx])
                      ? palette[idx]
                      : '#' + Math.floor(Math.random() * 16777215).toString(16); // no color - gen random
              })
            : palette;
        return customPalette;
    }

    protected setLineChartOptions(options) {
        // calculate line-point options (if more than 50 points on char)
        if (Array.isArray(this.chartData.datasets) && this.chartData.datasets.length !== 0 && this.chartData.datasets[0].data.length > 50) {
            options.elements.point.pointRadius = 0;
        } else {
            options.elements.point.pointRadius = 2;
        }
        this.calcYAxes(options.scales.y);
        if (this.isStacked) {
            this.chartData.datasets.forEach(dataset => {
                if (dataset.label === 'Sum') {
                    dataset['fill'] = false;
                }
            });
        }
    }

    protected getChartOptionsByStyleVersion(): any {
        return this.clonePipe.transform(CHART_CONFIGURATIONS.style_v1);
    }

    protected getDataSetOptionsByStyleVersion(): ChartBaseDatasetOptions {
        return {
            ...BASE_DATASET_OPTIONS.style_v1
        };
    }

    protected getFormatted(value, format?: string): string {
        let retVal = value;
        if (!isNullOrUndefined(format)) {
            const formatter = format.split(':');
            switch (formatter[0]) {
                case 'currency':
                    retVal = this.currencyPipe.transform(value, 'USD', true);
                    break;
                case 'percent':
                    retVal = this.percentPipe.transform(value / 100, formatter[1]);
                    break;
                case 'number':
                    retVal = this.decimalPipe.transform(value, formatter[1]);
                    break;
            }
        }
        return retVal;
    }
}
