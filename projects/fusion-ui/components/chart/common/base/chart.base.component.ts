import {Directive, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {ChartData, FusionChartPieData, FusionChartPieDataItem} from './entities/chart-data';
import {ChartLabel} from './entities/chart-label';
import {ChartDataset} from './entities/chart-dataset';
import {CurrencyPipe, DatePipe, DecimalPipe, PercentPipe} from '@angular/common';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {ChartDataService} from './chart.service';
import {ColorsService} from '@ironsource/fusion-ui/services/colors';
import {isDateString, isNullOrUndefined, isNumber} from '@ironsource/fusion-ui/utils';
import {BASE_DATASET_OPTIONS, CHART_CONFIGURATIONS} from './chart.config';
import {ShortNumberScaleSuffixPipe} from '@ironsource/fusion-ui/pipes/numbers';
import {ChartBaseDatasetOptions} from './entities/chart-options';
import {ChartType} from './entities/chart-type.enum';
import {ClonePipe} from '@ironsource/fusion-ui/pipes/clone';
import {HoverVerticalLine} from './hoverVerticalLine.plugin';
import {ChartLegend} from './entities/chart-legend';

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
    Tooltip,
    HoverVerticalLine
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

    private _options: any = {
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

    private legends: ChartLegend[] = [];
    private barWidth: number; // for bar chart type, if showCharsAmountXLabels is set to true

    // originalLabels and originalBarData used for store chart type Bar data without filtering;
    private originalBarData: any;
    private originalLabels: string[];

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
        this.yAxesFormat = this.getDisplayFormat(data) ?? data.displayFormat;
        this.chartData = this.dataParseService.parseChartData(data, type, this.isStacked);
        this.chartOptions = this.getChartOptions();
        this.legends = (data as ChartData).legends;

        if (!isNullOrUndefined(this.chart)) {
            this.chart.destroy();
        }
        this.chart = this.renderChart(this.ctx);

        if (
            (this.type === ChartType.Bar || this.type === ChartType.StackedBar) &&
            isNumber(this.options.showCharsAmountXLabels) &&
            !!this.chartData?.labels?.length
        ) {
            this.barWidth = (this.chart.getDatasetMeta(0)?.xScale?.width ?? this.ctx.width) / this.chartData?.labels?.length;
            if (this.barWidth) {
                this.chartOptions.scales.x.ticks.callback = this.trimAxisXLabel.bind(this);
                this.chart.update();
            }
        }

        this.afterDatasetInit.emit(this.chartData.datasets as ChartDataset[]);
    }

    // region chart datasets show / hide methods
    /** @internal */
    toggleDataset(label: ChartLabel, recalculateYMax = false): void {
        if ((this.type === ChartType.Bar || this.type === ChartType.StackedBar) && label.typeCheckbox) {
            this.filterBarData(label, recalculateYMax);
        } else {
            this.toggleLineDataset(label, recalculateYMax);
        }
    }

    private filterBarData(label: ChartLabel, recalculateYMax = false): void {
        if (isNullOrUndefined(this.originalBarData)) {
            this.originalLabels = [...this.chart.data.labels] as string[];
            this.originalBarData = structuredClone(this.chart.data.datasets);
        }
        if (!label.labelVisible.value) {
            const otherDataIndex = this.getLabelIndex(label.id);
            if (otherDataIndex !== -1) {
                Object.keys(this.chart.data.datasets).forEach(key => {
                    this.chart.data.datasets[key].data.splice(otherDataIndex, 1);
                });
                this.chart.data.labels.splice(otherDataIndex, 1);
            }
        } else {
            this.chart.data.labels = [...this.originalLabels] as string[];
            this.chart.data.datasets = structuredClone(this.originalBarData);
        }
        if (recalculateYMax) {
            this.calcYAxes(this.chart?.options?.scales?.y);
        }

        this.chart.update();
    }

    private getLabelIndex(labelId: string | number): number {
        let index = -1;
        this.chart.data.labels.find((item, idx) => {
            if (index === -1) {
                if (Array.isArray(item) && item[0] === labelId) {
                    index = idx;
                } else {
                    index = item === labelId ? idx : -1;
                }
            }
        });
        return index;
    }

    private toggleLineDataset(label: ChartLabel, recalculateYMax = false): void {
        this.chart.data.datasets
            .filter(item => {
                let thisLabel: boolean =
                    item.label === label.label && (!isNullOrUndefined((item as any).id) ? (item as any).id === label.id : true);
                return thisLabel;
            })
            .forEach(item => {
                item.hidden = !label.labelVisible.value;
            });

        if (recalculateYMax) {
            this.calcYAxes(this.chart?.options?.scales?.y);
        }
        this.chart.update('none');
    }
    // endregion

    // region chart dataset highlight methods
    /** @internal */
    highlightDataset(label: ChartLabel) {
        const datasets: any = this.chart?.data.datasets;
        if (!isNullOrUndefined(label)) {
            this.setChartUnHoveredBGColor(label, datasets);
        } else {
            this.setChartHoveredBGColor(label, datasets);
        }
        this.chart.update();
    }

    private setChartUnHoveredBGColor(label: ChartLabel, datasets: any): void {
        datasets.forEach((dataset: any, idx: number) => {
            const isOtherDataset = !isNullOrUndefined(dataset.id) ? dataset.id !== label.id : idx !== label.id;
            if (isOtherDataset || this.type === ChartType.Doughnut) {
                if (this.type === ChartType.Line) {
                    dataset.borderColor = dataset.backgroundColor;
                } else if (this.type === ChartType.Bar) {
                    dataset.backgroundColor = (dataset.backgroundColor as string).replace(',1)', ',0.1)');
                } else if (this.type === ChartType.Doughnut) {
                    (dataset.backgroundColor as string[]).forEach((color, idx) => {
                        if (idx !== label.id) {
                            dataset.backgroundColor[idx] = dataset.backgroundColor[idx].replace(',1)', ',0.1)');
                        }
                    });
                }
            } else {
                if (this.type === ChartType.Line) {
                    dataset.backgroundColor = (dataset.backgroundColor as string).replace('0.1)', '0.7)');
                }
            }
        });
    }

    private setChartHoveredBGColor(label: ChartLabel, datasets: any): void {
        datasets.forEach((dataset, idx) => {
            if (this.type === ChartType.Line) {
                dataset.borderColor = (dataset.backgroundColor as string).replace('0.1)', '1)');
                dataset.backgroundColor = (dataset.backgroundColor as string).replace('0.7)', '0.1)');
            } else if (this.type === ChartType.Bar) {
                dataset.backgroundColor = (dataset.backgroundColor as string).replace(',0.1)', ',1)');
            } else if (this.type === ChartType.Doughnut) {
                (dataset.backgroundColor as string[]).forEach((color, idx) => {
                    dataset.backgroundColor[idx] = dataset.backgroundColor[idx].replace(',0.1)', ',1)');
                });
            }
        });
    }
    // endregion

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
        // todo: need to check this case for stacked bar (it look like related to Object.keys(data) not for label).
        const customPalette =
            Array.isArray(legends) && legends.some(legend => !!legend.color)
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
        const isOneDataPoint = this.chartData.labels.length === 1;

        // set bg fill options
        lineOptions.fill = this.isStacked;
        if (this.componentVersion === 4) {
            lineOptions.pointRadius = isOneDataPoint ? 3 : 0;
            lineOptions.clip = 5;
            colorKeys.push('pointBackgroundColor');
        }
        bgOpacity = this.componentVersion === 4 ? bgOpacity : bgOpacity / 2;
        this.chartData.datasets = this.chartData.datasets.map((item, idx) => {
            const dataGroupOptions = colorKeys.reduce((resultOptions, colorOption) => {
                const color = (this._data as ChartData)?.legends[idx]?.color || palette[idx];
                switch (colorOption) {
                    case 'backgroundColor':
                        resultOptions[colorOption] = this.colorsService.toRgba(color, bgOpacity);
                        break;
                    case 'pointBackgroundColor':
                        resultOptions[colorOption] = lineOptions[colorOption] ? lineOptions[colorOption] : color;
                        break;
                    case 'pointHoverBackgroundColor':
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
            // set fill option from line to line on stacked line chart
            if (this.componentVersion === 4 && this.isStacked) {
                lineOptions.fill = idx !== 0 ? '-1' : 'start';
            }
            // set line options
            Object.assign(dataGroupOptions, lineOptions);
            return Object.assign(item, dataGroupOptions);
        });
        // format xAxis (dates)
        if (this.componentVersion !== 4) {
            this.chartData.labels = this.chartData.labels.map(lbl => {
                return isDateString(lbl as string) ? this.datePipe.transform(lbl as any, dateFormat) : lbl;
            });
        }
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
                barOptions.backgroundColor = this.colorsService.toRgba(palette[idx], 100);
                barOptions.hoverBackgroundColor = palette[idx];
                barOptions.borderWidth = 0;
                barOptions.barPercentage = 0.9;
                if (this.isStacked) {
                    barOptions.barPercentage = 0.5;
                    barOptions.borderWidth = 2;
                    barOptions.borderColor = '#FCFCFC';
                    barOptions.hoverBorderColor = '#FCFCFC';
                }
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
        const piePalette: string[] = this.colorsService.getPieColorsPalette(this.componentVersion);
        const onlyOneData = this.chartData.datasets[0].data.length === 1;
        // add colors and labels
        pieOptions.backgroundColor = [];
        pieOptions.hoverBackgroundColor = [];
        pieOptions.hoverBorderWidth = pieOptions.hoverBorderWidth;
        pieOptions.borderWidth = !onlyOneData ? pieOptions.borderWidth : 0;

        this.chartData.datasets = this.chartData.datasets.map(item => {
            for (let i = 0; i < item.data.length; i++) {
                let color;
                if (Array.isArray(this._data.data)) {
                    color = (this._data.data as FusionChartPieDataItem[]).find(part => part.displayText === this.chartData.labels[i]).color;
                }
                if (!color) {
                    color = piePalette[i] ? piePalette[i] : piePalette[piePalette.length - 1];
                }
                if (this.componentVersion === 4) {
                    pieOptions.backgroundColor.push(this.colorsService.toRgba(color, 100));
                    pieOptions.hoverBackgroundColor.push(color);
                    pieOptions.borderColor = '#FCFCFC';
                    pieOptions.hoverBorderWidth = 0;
                    pieOptions.hoverBorderColor = 'transparent';
                } else {
                    pieOptions.backgroundColor.push(color);
                }
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
        return this.deepMerge(this.getChartOptionsByStyleVersion(this.componentVersion), this.options);
    }

    private deepMerge(target, source) {
        for (const key of Object.keys(source)) {
            const currentTarget = target[key];
            const currentSource = source[key];

            if (currentTarget) {
                const objectSource = typeof currentSource === 'object';
                const objectTarget = typeof currentTarget === 'object';

                if (objectSource && objectTarget) {
                    void (Array.isArray(currentTarget) && Array.isArray(currentSource)
                        ? void (target[key] = currentTarget.concat(currentSource))
                        : void this.deepMerge(currentTarget, currentSource));
                    continue;
                }
            }
            target[key] = currentSource;
        }
        return target;
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

        const isV4InteractionIndex = this.componentVersion === 4 && options?.interaction?.mode === 'index';

        // region apply tooltip options
        options.plugins.tooltip = {
            ...options.plugins.tooltip,
            callbacks: {
                ...options.plugins.tooltip.callbacks,
                label: this.getTooltipLabel.bind(this),
                ...(isV4InteractionIndex
                    ? {
                          footer: this.calculateTotals.bind(this),
                          beforeTitle: this.getBeforeTitle.bind(this),
                          title: this.getTooltipDateTitle.bind(this)
                      }
                    : {})
            },
            ...(isLastDotted ? {filter: this.filterTooltip.bind(this)} : {})
        };

        options.plugins['hoverVerticalLine'] = false;
        if (this.type === ChartType.Line && isV4InteractionIndex) {
            options.plugins['hoverVerticalLine'] = true;
        }
        // end region

        return options;
    }

    protected setLineChartOptions(options) {
        // calculate line-point options (if more than 50 points on char)
        if (Array.isArray(this.chartData.datasets) && this.chartData.datasets.length !== 0 && this.chartData.datasets[0].data.length > 50) {
            options.elements.point.pointRadius = 0;
        }
        this.calcYAxes(options.scales.y);
        if (this.isStacked) {
            options.scales.y.stacked = true;
            this.chartData.datasets.forEach(dataset => {
                if (dataset.label === 'Sum') {
                    dataset['fill'] = false;
                }
            });
        }
        if (this.componentVersion === 4) {
            const datasetOptions = this.getDataSetOptionsByStyleVersion(this.componentVersion);
            const dateFormat = datasetOptions.dateFormat ?? 'MMM dd, yyyy';
            options.scales.x.ticks.callback = (index: any) => {
                const label = this.chartData.labels[index] as string;
                const value = isDateString(label) ? this.datePipe.transform(label, dateFormat) : label;
                return value;
            };
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
                intersect: false,
                mode: 'index',
                axis: 'x'
            };
            options.plugins.tooltip = {
                ...options.plugins.tooltip
            };
        }
    }

    private trimAxisXLabel(index: number): string | string[] {
        const label = this.chartData.labels[index] as string | string[];
        const len = Math.round(this.barWidth * (this._options?.showCharsAmountXLabels / 100));
        const isArray = Array.isArray(label);
        let labelText = isArray ? label[0] : label;
        if (labelText.length > len) {
            labelText = labelText.substring(0, len) + '...';
            return isArray ? [labelText, label[1]] : labelText;
        }
        return label;
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

    // region tooltip related methods
    private filterTooltip(context): boolean {
        return !context.dataset.borderDash;
    }

    private getTooltipLabel(context) {
        const label = context.dataset.label ?? context.label ?? '';
        const val = context.parsed.y ?? context?.formattedValue?.replace(/,/g, '');
        const format = context.dataset.displayFormat ?? this.yAxesFormat;

        return ` ${label}: ${!!format ? this.getFormatted(val, format) : val}`;
    }

    private calculateTotals(tooltipItem: any[]) {
        const format = this.yAxesFormat;
        const total = tooltipItem.reduce((acc, val) => acc + val.raw, 0);
        return `Total: ${!!format ? this.getFormatted(total, format) : total}`;
    }

    private getBeforeTitle(data): HTMLElement {
        const legend = this.legends.find(legend => {
            return Array.isArray(legend.displayName)
                ? legend.displayName.join(',') === data[0].label
                : legend.displayName === data[0].label;
        });
        if (!!legend?.imageUrl) {
            const appImage = document.createElement('img');
            appImage.style.width = '20px';
            appImage.style.height = '20px';
            appImage.style.borderRadius = '4px';
            appImage.src = legend?.imageUrl;
            return appImage;
        }
        return null;
    }

    private getTooltipDateTitle(data): string {
        const label = data[0].label;
        const value = isDateString(label) ? this.datePipe.transform(label, 'MMM d, YYYY') : label;
        return value;
    }

    // endregion

    private renderChart(ctx: HTMLCanvasElement) {
        const opts = {
            type: this.type as ChartTypeJs,
            data: this.chartData,
            options: this.chartOptions
        };

        // console.log('opts', opts);

        return new Chart(ctx, opts);
    }

    protected calcYAxes(yAxe: any): void {
        const sets = this.options.calculateMaxForAll ? this.chartData.datasets : this.chartData.datasets.filter(item => !item.hidden);
        const tickCount = this.options.yAxisLines || 5;
        // region get max & min values
        const setsStacked = [{data: []}];
        // for staked we need to calculate sum of all data values in set
        if (this.isStacked) {
            setsStacked[0].data = sets.reduce((acc, item, index) => {
                item.data.forEach((val, idx) => {
                    if (acc[idx]) {
                        acc[idx] += val;
                    } else {
                        acc[idx] = val;
                    }
                });
                return acc;
            }, []);
        }

        let [max, min] = (this.isStacked ? setsStacked : sets).reduce(
            ([_max, _min], item) => [Math.max(_max, Math.max.apply(null, item.data)), Math.min(_min, Math.min.apply(null, item.data))],
            [-Infinity, 0]
        );
        // endregion

        const yAxeMaxAddPercent = this.options.yAxeMaxAddPercent;
        if (!!yAxeMaxAddPercent) {
            max = max + max * yAxeMaxAddPercent;
        }

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
            formatCallbackObj = {
                callback: (value: number) => {
                    return value === 0 ? value : this.getFormatted(value, 'shortString');
                }
            };
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

    protected getFormatted(value: number, format?: string): string {
        let retVal: string = value.toString();
        if (!isNullOrUndefined(format)) {
            const formatter = format.split(':');
            value = isNumber(value) ? value : Number(value);
            switch (formatter[0]) {
                case 'currency':
                    retVal = this.currencyPipe.transform(value, 'USD', true);
                    break;
                case 'shortCurrency':
                    retVal =
                        '$' +
                        this.numberToStringPipe.transform(value, {
                            noSeparateBySpace: true,
                            precision: this.componentVersion === 4 ? 3 : undefined
                        });
                    break;
                case 'percent':
                    retVal = this.percentPipe.transform(value / 100, formatter[1]);
                    break;
                case 'number':
                    retVal = this.decimalPipe.transform(value, formatter[1]);
                    break;
                case 'shortString':
                    retVal = isNumber(value)
                        ? this.numberToStringPipe.transform(value, {
                              noSeparateBySpace: true,
                              precision: this.componentVersion === 4 ? 3 : undefined
                          })
                        : value;
                    break;
            }
        }
        return retVal;
    }
}
