import {Directive, ElementRef, EventEmitter, Injector, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
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

@Directive()
export abstract class ChartBaseComponent implements OnInit, OnDestroy, OnChanges {
    /** @internal */
    @Input() id: string;
    /** @internal */
    @Input() type: ChartType;

    @Input() set data(value: ChartData | FusionChartPieData) {
        this._data = {...value};
    }

    /** @internal */
    @Input() set options(value: {}) {
        if (!!value) {
            this._options = {...this._options, ...value};
        }
    }
    /** @internal */
    get options(): any {
        return this._options;
    }

    @Input() chartSubject: string; // user in tooltip for BAR chart type
    @Input() loading: boolean;
    @Input() noData: boolean;
    @Output() afterDatasetInit: EventEmitter<ChartDataset[]> = new EventEmitter();

    /** @internal */
    pieDataSum: number;
    /** @internal */
    pieSumLabel: string;
    /** @internal */
    componentVersion = 2;

    private _options: {} = {
        yAxisLines: 4
    };

    protected _data: ChartData | FusionChartPieData;
    protected ctx: HTMLCanvasElement;
    protected canvasContent: CanvasRenderingContext2D;
    protected chart: Chart;
    protected chartData: ChartJsData;
    protected chartOptions: ChartJsOptions;
    protected maxVal: number;
    protected isStacked = false;
    protected yAxesFormat: string;

    constructor(
        protected datePipe: DatePipe,
        protected currencyPipe: CurrencyPipe,
        protected decimalPipe: DecimalPipe,
        protected percentPipe: PercentPipe,
        protected numberToStringPipe: ShortNumberScaleSuffixPipe,
        protected uniqueIdService: UniqueIdService,
        protected dataParseService: ChartDataService,
        protected colorsService: ColorsService,
        protected elemRef: ElementRef,
        protected clonePipe: ClonePipe
    ) {}

    ngOnInit() {
        this.id = this.id || `fs-chart-${this.uniqueIdService.getUniqueId()}`;
        this.type = this.type || ChartType.Line;

        if (this.type === ChartType.StackedLine) {
            this.type = ChartType.Line;
            this.isStacked = true;
        } else if (this.type === ChartType.StackedBar) {
            this.type = ChartType.Bar;
            this.isStacked = true;
        }

        if (this.type === ChartType.Doughnut) {
            this.pieSumLabel = (this._data as FusionChartPieData)?.label;
        }

        this.elemRef.nativeElement.querySelector('div').id = this.id;
        this.ctx = this.elemRef.nativeElement.querySelector('canvas');
        this.canvasContent = this.ctx.getContext('2d');
        if (!isNullOrUndefined(this.ctx) && this._data && Object.keys(this._data).length) {
            this.setChart(this._data, this.type);
        }
    }

    ngOnDestroy() {
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
        this.chartData = this.dataParseService.parseChartData(data, type, this.isStacked);
        this.chartOptions = this.getChartOptions();

        if (!isNullOrUndefined(this.chart)) {
            this.chart.destroy();
        }
        this.chart = this.renderChart(this.ctx);

        this.afterDatasetInit.emit(this.chartData.datasets as ChartDataset[]);
    }

    /** @internal */
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

    highlightDataset(label: ChartLabel) {
        if (this.chart?.getActiveElements()?.length) {
            this.chart?.setActiveElements([]);
        } else {
            if (!isNullOrUndefined(label)) {
                const activeElements = this.chart?.getDatasetMeta(0)?.data?.map((item, idx) => ({
                    datasetIndex: label.id as number,
                    index: idx
                }));
                this.chart?.setActiveElements(activeElements);
            }
        }
        this.chart.update();
    }

    /** @internal */
    addDatasetStyleOptions(isLastDotted = true) {
        const palette: string[] = this.getColors();
        const datasetOptions = this.getDataSetOptionsByStyleVersion(this.componentVersion);
        const bgOpacity = datasetOptions.fillOpacity;

        if (this.type === ChartType.Line) {
            this.addDatasetLineStyleOptions(datasetOptions, isLastDotted, palette, bgOpacity);
        } else if (this.type === ChartType.Bar) {
            this.addDatasetBarStyleOptions(datasetOptions, palette, bgOpacity);
        } else if (this.type === ChartType.Pie || this.type === ChartType.Doughnut) {
            this.addDatasetPieStyleOptions(datasetOptions);
        }
    }

    protected getColors(): string[] {
        const palette = this.colorsService.getColorPalette(this.componentVersion);
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
        const dateFormat = datasetOptions.dateFormat ?? 'MMM dd, yyyy';

        // set bg fill options
        lineOptions.fill = this.isStacked;
        if (this.componentVersion === 4 && this.isStacked) {
            lineOptions.borderWidth = 0;
            lineOptions.pointRadius = 0;
        }
        // lineOptions.borderWidth = this.isStacked ? 10 : lineOptions.borderWidth;
        bgOpacity = this.componentVersion === 4 ? bgOpacity : bgOpacity / 2;

        this.chartData.datasets = this.chartData.datasets.map((item, idx) => {
            // set color options
            const dataGroupOptions = colorKeys.reduce((resultOptions, colorOption) => {
                const color = (this._data as ChartData)?.legends[idx]?.color || palette[idx];
                switch (colorOption) {
                    case 'backgroundColor':
                        resultOptions[colorOption] = this.colorsService.toRgba(color, bgOpacity);
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
            return isDateString(lbl as string) ? this.datePipe.transform(lbl as any, dateFormat) : lbl;
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
        this.chartData.datasets = this.chartData.datasets.map((item, idx) => {
            if (this.componentVersion === 4) {
                barOptions.borderColor = palette[idx];
                barOptions.backgroundColor = this.colorsService.toRgba(palette[idx], bgOpacity);
                barOptions.hoverBackgroundColor = this.colorsService.toRgba(palette[idx], 100);
            } else {
                for (let i = 0; i < item.data.length; i++) {
                    barOptions.borderColor.push(palette[i]);
                    barOptions.backgroundColor.push(this.colorsService.toRgba(palette[i], bgOpacity));
                }
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

    protected getDataSetOptionsByStyleVersion(versionNumber = 2): ChartBaseDatasetOptions {
        const options = BASE_DATASET_OPTIONS[`style_v${versionNumber}`]
            ? BASE_DATASET_OPTIONS[`style_v${versionNumber}`]
            : BASE_DATASET_OPTIONS.style_v2;
        return {...options};
    }

    protected getChartOptionsByStyleVersion(versionNumber = 2): any {
        const options = CHART_CONFIGURATIONS[`style_v${versionNumber}`]
            ? CHART_CONFIGURATIONS[`style_v${versionNumber}`]
            : CHART_CONFIGURATIONS.style_v2;

        return this.clonePipe.transform(options);
    }

    private applyOptions() {
        const baseOptions = {...this.getChartOptionsByStyleVersion(this.componentVersion), ...this.options};
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

        // todo: check it set formatted tooltip
        options.plugins.tooltip = {
            callbacks: {
                label: this.getTooltipLabel.bind(this)
            },
            ...options.plugins.tooltip,
            ...(isLastDotted ? {filter: this.filterTooltip.bind(this)} : {})
        };

        return options;
    }

    protected setLineChartOptions(options) {
        // calculate line-point options (if more than 50 points on char)
        if (Array.isArray(this.chartData.datasets) && this.chartData.datasets.length !== 0 && this.chartData.datasets[0].data.length > 50) {
            options.elements.point.pointRadius = 0;
        } /* else {
            options.elements.point.pointRadius = options.elements.point.pointRadius ?? 3;
        }*/
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
        if (!this.isStacked) {
            if (this.chartSubject) {
                this.chartData.datasets.forEach(dataset => {
                    Object.assign(dataset, {
                        label: this.chartSubject
                    });
                });
            }
        } else {
            options.scales.x.stacked = true;
            options.scales.y.stacked = true;
            options.interaction = {
                intersect: true,
                mode: 'index',
                axis: 'xy'
            };
            options.plugins.tooltip = {
                ...options.plugins.tooltip,
                position: 'average'
            };
        }
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

    protected calcYAxes(yAxe: any): void {
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
                case 'shortString':
                    retVal = !!value
                        ? this.numberToStringPipe.transform(value, {
                              noSeparateBySpace: true
                          })
                        : value;
                    break;
            }
        }
        return retVal;
    }
}
