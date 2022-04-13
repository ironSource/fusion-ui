import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Injector,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';
import {ChartData, FusionChartPieDataItem, FusionChartPieData} from './entities/chart-data';
import {ChartLabel} from './entities/chart-label';
import {ChartDataset} from './entities/chart-dataset';
import {CurrencyPipe, DatePipe, DecimalPipe, PercentPipe} from '@angular/common';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {ChartDataService} from './chart.service';
import {ColorsService} from '@ironsource/fusion-ui/services/colors';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {isDateString} from '@ironsource/fusion-ui/utils';
import {BASE_DATASET_OPTIONS, CHART_CONFIGURATIONS} from './chart.config';
import {ShortNumberScaleSuffixPipe} from '@ironsource/fusion-ui/pipes/numbers';
import {FusionBase, StyleVersion} from '@ironsource/fusion-ui/components/fusion-base';
import {takeUntil} from 'rxjs/operators';
import {ChartBaseDatasetOptions} from './entities/chart-options';
import {ChartType} from './entities/chart-type.enum';
import {ClonePipe} from '@ironsource/fusion-ui/pipes/clone';

// Chart.js 3 is tree-shakeable, so it is necessary to import and register the controllers, elements, scales and plugins you are going to use.
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
    Tooltip,
    ChartType as ChartTypeJs,
    ChartData as ChartJsData,
    ChartOptions as ChartJsOptions
} from 'chart.js';

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
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component-common.scss', './chart.component-v1.scss', './chart.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent extends FusionBase implements OnInit, OnDestroy, OnChanges {
    @Input() id: string;
    @Input() type: ChartType;

    @Input() set data(value: ChartData | FusionChartPieData) {
        this._data = {...value};
    }

    @Input() options: any = {
        yAxisLines: 4
    };
    @Input() chartSubject: string; // user in tooltip for BAR chart type
    @Input() loading: boolean;
    @Input() noData: boolean;
    @Output() afterDatasetInit: EventEmitter<ChartDataset[]> = new EventEmitter();

    pieDataSum: number;
    pieSumLabel: string;

    private _data: ChartData | FusionChartPieData;
    private ctx: HTMLCanvasElement;
    private canvasContent: CanvasRenderingContext2D;
    private chart: Chart;
    private chartData: ChartJsData;
    private chartOptions: ChartJsOptions;
    private maxVal: number;
    private isStacked = false;
    private yAxesFormat: string;

    constructor(
        injector: Injector,
        private datePipe: DatePipe,
        private currencyPipe: CurrencyPipe,
        private decimalPipe: DecimalPipe,
        private percentPipe: PercentPipe,
        private numberToStringPipe: ShortNumberScaleSuffixPipe,
        private uniqueIdService: UniqueIdService,
        private dataParseService: ChartDataService,
        private colorsService: ColorsService,
        private elemRef: ElementRef,
        protected clonePipe: ClonePipe
    ) {
        super(injector);
    }

    ngOnInit() {
        this.id = this.id || `fs-chart-${this.uniqueIdService.getUniqueId()}`;
        this.type = this.type || ChartType.Line;

        if (this.type === ChartType.StackedLine) {
            this.type = ChartType.Line;
            this.isStacked = true;
        }

        if (this.type === ChartType.Doughnut) {
            this.pieSumLabel = (this._data as FusionChartPieData)?.label;
        }

        this.elemRef.nativeElement.querySelector('div').id = this.id;
        this.ctx = this.elemRef.nativeElement.querySelector('canvas');
        this.canvasContent = this.ctx.getContext('2d');
        this.selectedVersion$.pipe(takeUntil(this.onDestroy$)).subscribe((styleVersion: StyleVersion) => {
            if (!isNullOrUndefined(this.ctx) && this._data && Object.keys(this._data).length) {
                this.setChart(this._data, this.type);
            }
        });
    }

    ngOnDestroy() {
        super.ngOnDestroy();
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!isNullOrUndefined(this.ctx) && changes.data && !changes.data.firstChange) {
            this.setChart(changes.data.currentValue, this.type);
        }
    }

    private setChart(data, type): void {
        this.yAxesFormat = this.getDisplayFormat(data);
        this.chartData = this.dataParseService.parseChartData(data, type);
        this.chartOptions = this.getChartOptions();
        if (!isNullOrUndefined(this.chart)) {
            this.chart.destroy();
        }
        this.chart = this.renderChart(this.ctx);

        this.afterDatasetInit.emit(this.chartData.datasets as ChartDataset[]);
    }

    toggleDataset(label: ChartLabel, recalculateYMax = false): void {
        this.chart.data.datasets
            .filter(item => item.label === label.label && (item as any).id === label.id)
            .forEach(item => {
                item.hidden = !label.labelVisible.value;
            });

        if (recalculateYMax) {
            this.calcYAxes(this.chart?.options?.scales?.y);
        }

        this.chart.update();
    }

    addDatasetStyleOptions(isLastDotted = true) {
        const palette: string[] = this.getColors();
        const datasetOptions = this.getDataSetOptionsByStyleVersion();
        const bgOpacity = datasetOptions.fillOpacity;

        if (this.type === ChartType.Line) {
            this.addDatasetLineStyleOptions(datasetOptions, isLastDotted, palette, bgOpacity);
        } else if (this.type === ChartType.Bar) {
            this.addDatasetBarStyleOptions(datasetOptions, palette, bgOpacity);
        } else if (this.type === ChartType.Pie || this.type === ChartType.Doughnut) {
            this.addDatasetPieStyleOptions(datasetOptions);
        }
    }

    private getColors(): string[] {
        const palette = this.colorsService.getColorPalette(this.selectedVersion$.getValue());
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

    private addDatasetLineStyleOptions(datasetOptions, isLastDotted, palette, bgOpacity) {
        const colorKeys = datasetOptions.colorSettings;
        const seriesToShow = datasetOptions.seriesToShow;
        const lineOptions = datasetOptions.lineOptions;

        // set bg fill options
        lineOptions.fill = this.isStacked;

        this.chartData.datasets = this.chartData.datasets.map((item, idx) => {
            // set color options
            const dataGroupOptions = colorKeys.reduce((resultOptions, colorOption) => {
                const color = (this._data as ChartData)?.legends[idx]?.color || palette[idx];
                switch (colorOption) {
                    case 'backgroundColor':
                        resultOptions[colorOption] = this.colorsService.toRgba(color, bgOpacity / 2);
                        break;
                    case 'pointBackgroundColor':
                        resultOptions[colorOption] = lineOptions[colorOption] ? lineOptions[colorOption] : color;
                        break;
                    case 'pointBorderColor':
                        resultOptions[colorOption] = lineOptions[colorOption] ? lineOptions[colorOption] : color;
                        break;
                    default:
                        resultOptions[colorOption] = color;
                }
                return resultOptions;
            }, {});

            // hide series over limit if not set
            if (!isNullOrUndefined(item.hidden)) {
                lineOptions.hidden = item.hidden;
            } else {
                lineOptions.hidden = idx > seriesToShow - 1;
            }

            // set line options
            Object.assign(dataGroupOptions, lineOptions);
            return Object.assign(item, dataGroupOptions);
        });
        // format xAxis (dates)
        this.chartData.labels = this.chartData.labels.map(lbl => {
            return isDateString(lbl as string) ? this.datePipe.transform(lbl as any, 'MMM dd, yyyy') : lbl;
        });
        // support for last point (if last point - today) - dotted line type
        if (isLastDotted) {
            this.chartData.datasets = this.dataParseService.setLastDotted(this.chartData.datasets);
        }
        // check for one data point (do center align)
        if (this.chartData.labels.length === 1) {
            this.chartData.labels = ['', this.chartData.labels[0], ''];
            this.chartData.datasets.forEach(dataset => {
                (dataset as any).data = [null, dataset.data[0], null];
                // set point style for today and / yesterday
                if (isLastDotted) {
                    dataset['pointBackgroundColor'] = '#ffffff';
                    dataset['pointBorderColor'] = dataset.borderColor;
                } else {
                    dataset['pointBorderColor'] = dataset.borderColor;
                }
            });
        }
    }

    private addDatasetBarStyleOptions(datasetOptions, palette, bgOpacity) {
        const barOptions = datasetOptions.barOptions;
        // add colors
        this.chartData.datasets = this.chartData.datasets.map(item => {
            for (let i = 0; i < item.data.length; i++) {
                barOptions.borderColor.push(palette[i]);
                barOptions.backgroundColor.push(this.colorsService.toRgba(palette[i], bgOpacity));
            }
            return Object.assign(item, barOptions);
        });
    }

    private addDatasetPieStyleOptions(datasetOptions) {
        const pieOptions = datasetOptions.pieOptions;
        const piePalette: string[] = this.colorsService.getPieColorsPalette();
        // add colors and labels
        pieOptions.backgroundColor = [];
        this.chartData.datasets = this.chartData.datasets.map(item => {
            for (let i = 0; i < item.data.length; i++) {
                let color;
                if (Array.isArray(this._data.data)) {
                    color = (this._data.data as FusionChartPieDataItem[]).find(part => part.displayText === this.chartData.labels[i]).color;
                }
                if (!color) {
                    color = piePalette[i] ? piePalette[i] : piePalette[piePalette.length - 1];
                }

                pieOptions.backgroundColor.push(color);
            }
            return {...item, ...pieOptions};
        });
    }

    private getDisplayFormat(data: ChartData): string {
        if (data && Array.isArray(data.legends) && data.legends.length !== 0) {
            return data.legends[0].displayFormat || null;
        }
        return null;
    }

    private getDataSetOptionsByStyleVersion(): ChartBaseDatasetOptions {
        const versionKey = `style_v${this.selectedVersion$.getValue()}`;
        return {
            ...(!isNullOrUndefined(BASE_DATASET_OPTIONS[versionKey]) ? BASE_DATASET_OPTIONS[versionKey] : BASE_DATASET_OPTIONS.style_v1)
        };
    }

    private getChartOptionsByStyleVersion(): any {
        const versionKey = `style_v${this.selectedVersion$.getValue()}`;
        return this.clonePipe.transform(
            !isNullOrUndefined(CHART_CONFIGURATIONS[versionKey]) ? CHART_CONFIGURATIONS[versionKey] : CHART_CONFIGURATIONS.style_v1
        );
    }

    private applyOptions() {
        const baseOptions = this.getChartOptionsByStyleVersion();
        Object.keys(baseOptions).forEach(key => {
            if (!!this.options && this.options[key]) {
                Object.assign(baseOptions[key], this.options[key]);
            }
        });
        return baseOptions;
    }

    private getChartOptions(): ChartJsOptions {
        const options: any = {...this.applyOptions()};
        // hide legends for bar chart type by default
        if (this.type === ChartType.Bar || this.type === ChartType.Pie || this.type === ChartType.Doughnut) {
            options.plugins.legend.display = false;
        }
        const isLastDotted = this.isLastDotted(options);

        // set style options for the chart
        this.addDatasetStyleOptions(isLastDotted);

        // set min/ max for yAxes if line
        if (this.type === ChartType.Line) {
            this.setLineChartOptions(options);
        } else if (this.type === ChartType.Bar) {
            this.setBarChartOptions(options);
        } else if (this.type === ChartType.Doughnut || this.type === ChartType.Pie) {
            this.setPieChartOptions(options);
        }

        // set formatted tooltip
        options.plugins.tooltip = {
            callbacks: {
                label: this.getTooltipLabel.bind(this)
            },
            ...options.plugins.tooltip,
            ...(isLastDotted ? {filter: this.filterTooltip.bind(this)} : {})
        };

        return options;
    }

    private setLineChartOptions(options) {
        // calculate line-point options (if more than 50 points on char)
        if (Array.isArray(this.chartData.datasets) && this.chartData.datasets.length !== 0 && this.chartData.datasets[0].data.length > 50) {
            options.elements.point.pointRadius = 0;
        } else {
            options.elements.point.pointRadius = this.selectedVersion === 2 ? 3 : 2;
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

    private setBarChartOptions(options) {
        this.calcYAxes(options.scales.y);
        // apply label
        this.chartData.datasets.forEach(dataset => {
            Object.assign(dataset, {
                label: this.chartSubject
            });
        });
    }

    private setPieChartOptions(options) {
        delete options.scales;
        delete options.elements;
        if (options.calculatePieSummary) {
            this.pieDataSum = (this.chartData.datasets[0].data as any[]).reduce((sum, item) => (sum += item), 0);
        }
    }

    private isLastDotted(options): boolean {
        // eslint-disable-next-line one-var
        const todayString = (() => {
                // eslint-disable-next-line one-var
                const d = new Date(),
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();
                return [year, month.length < 2 ? '0' + month : month, day.length < 2 ? '0' + day : day].join('-');
            })(),
            dataKeys = Object.keys(this._data?.data);

        return options.dottedLineForToday && dataKeys[dataKeys.length - 1] === todayString;
    }

    private filterTooltip(context): boolean {
        return !context.dataset.borderDash;
    }

    private getTooltipLabel(context) {
        const label = context.dataset.label ?? context.label ?? '';
        const val = context.parsed.y ?? context.formattedValue;
        const format = context.dataset.displayFormat;

        return ` ${label}: ${!!format ? this.getFormatted(val, format) : val}`;
    }

    private renderChart(ctx: HTMLCanvasElement) {
        const opts = {
            type: this.type as ChartTypeJs,
            data: this.chartData,
            options: this.chartOptions
        };
        return new Chart(ctx, opts);
    }

    private calcYAxes(yAxe: any): void {
        const sets = this.options.calculateMaxForAll ? this.chartData.datasets : this.chartData.datasets.filter(item => !item.hidden);
        const tickCount = this.options.yAxisLines || 5;
        // get max & min values
        // eslint-disable-next-line prefer-const
        let [max, min] = sets.reduce(
            ([_max, _min], item) => [Math.max(_max, Math.max.apply(null, item.data)), Math.min(_min, Math.min.apply(null, item.data))],
            [-Infinity, 0]
        );

        let stepSize;
        let formatCallbackObj;
        if (max <= 1 && min >= -1) {
            stepSize = 0.2;
            max = 1;
            formatCallbackObj = {};
        } else {
            const roundTo = Math.pow(10, parseInt(max.toString(), 10).toString().length - 1);
            const maxVal = Math.ceil((max / roundTo) * 10) * (roundTo / 10);
            stepSize = parseFloat(((maxVal - min) / tickCount).toFixed(2));
            max = stepSize * tickCount;
            formatCallbackObj = {callback: value => this.getFormatted(value, 'shortString')};
        }

        yAxe.ticks = {
            ...yAxe.ticks,
            ...{
                min,
                max,
                stepSize
            },
            ...formatCallbackObj
        };
    }

    private getFormatted(value, format?: string): string {
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
                case 'shortString':
                    retVal = !!value
                        ? this.numberToStringPipe.transform(value, {
                              noSeparateBySpace: this.selectedVersion === StyleVersion.V2
                          })
                        : value;
                    break;
            }
        }
        return retVal;
    }
}
