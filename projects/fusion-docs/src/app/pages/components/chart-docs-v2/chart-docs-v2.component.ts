import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {
    CHART_DATA_MOCK,
    CHART_DATA_MOCK_7DAYS,
    CHART_DATA_STACKEDLINE_MOCK,
    CHART_PIE_DATA_MOCK
} from '../chart-docs/mocks/chart-data-mock';
import {
    ChartComponent,
    ChartData,
    ChartDataset,
    ChartLabel,
    FusionChartPieData,
    ColorsService,
    StyleVersion,
    VersionService
} from '@ironsource/fusion-uifusion-ui';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {EXAMPLE_DATA_7_DAYS_MOCK, EXAMPLE_DATA_MOCK, EXAMPLE_DATA_PIE_MOCK} from '../chart-docs/mocks/chart-example-data-mock';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {ChartType} from '../../../../../../fusion-ui/src/lib/components/ui-components/chart/entities/chart-type.enum';
import {DocsLayoutService} from '../../docs/docs-layout.service';

@Component({
    selector: 'fusion-chart-docs-v2',
    templateUrl: './chart-docs-v2.component.html',
    styleUrls: ['./chart-docs-v2.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartDocsV2Component implements OnInit, OnDestroy {
    @ViewChild('myLineTypeLabels', {static: true}) myLineTypeLabels: ChartComponent;
    @ViewChild('myDoughnutTypeLabels', {static: true}) myDoughnutTypeLabels: ChartComponent;
    private onDestroy$ = new Subject<void>();

    rightMenu: DocsMenuItem[] = [
        {
            title: 'Chart Types',
            items: [
                {
                    label: 'Bar',
                    scrollTo: '#chartTypeBar',
                    scrollOffset: 120
                },
                {
                    label: 'Line',
                    scrollTo: '#chartTypeLine',
                    scrollOffset: 15
                },
                {
                    label: 'Stacked Line',
                    scrollTo: '#chartTypeStackedLine',
                    scrollOffset: 15
                },
                {
                    label: 'Today dash line',
                    scrollTo: '#lineTypeLast7Days',
                    scrollOffset: 15
                },
                {
                    label: 'Doughnut',
                    scrollTo: '#chartTypeDoughnut',
                    scrollOffset: 15
                },
                {
                    label: 'Pie',
                    scrollTo: '#chartTypePie',
                    scrollOffset: 15
                }
            ]
        },

        {
            title: 'Chart with Labels',
            items: [
                {
                    label: 'Chart Labels',
                    scrollTo: '#chartLabels',
                    scrollOffset: 30
                },
                {
                    label: 'Doughnut with custom colors and labels',
                    scrollTo: '#chartTypeDoughnutLabels',
                    scrollOffset: 15
                }
            ]
        },
        {
            title: 'Chart States ',
            items: [
                {
                    label: 'No Data',
                    scrollTo: '#chartStateNoData',
                    scrollOffset: 15
                },
                {
                    label: 'Loading',
                    scrollTo: '#chartStateLoading',
                    scrollOffset: 15
                }
            ]
        },

        {
            title: 'Chart colors ',
            items: [
                {
                    label: 'Colors Palette',
                    scrollTo: '#chartColors',
                    scrollOffset: 120
                }
            ]
        },
        {
            title: 'Configuration',
            items: [
                {
                    label: 'Parameters',
                    scrollTo: '#params',
                    scrollOffset: 30
                },
                {
                    label: 'Entities',
                    scrollTo: '#entities',
                    scrollOffset: 30
                },
                {
                    label: 'Base Options',
                    scrollTo: '#options',
                    scrollOffset: 30
                }
            ]
        }
    ];

    chartType = ChartType;
    chartData: ChartData = {...CHART_DATA_MOCK};
    chartDataLinesWithLabels: ChartData = {...CHART_DATA_MOCK};
    chartDataStackedLine: ChartData = CHART_DATA_STACKEDLINE_MOCK;

    chartDataStackedLineOptions = {
        elements: {
            line: {
                borderWidth: 1,
                tension: 0
            }
        }
    };

    // used for some chart customizations tests
    chartOptions = {
        scales: {
            xAxes: [
                {
                    display: true,
                    type: 'time',
                    time: {
                        unit: 'day',
                        unitStepSize: 2,
                        displayFormats: {
                            day: 'MM/DD/YYYY'
                        }
                    }
                }
            ]
        },
        tooltips: {
            callbacks: {
                title: (tooltipItem, data) => {
                    return tooltipItem[0].label;
                },
                label: (tooltipItem, data) => {
                    return `${data.datasets[tooltipItem.datasetIndex].label}: ${tooltipItem.value}`;
                }
            },
            backgroundColor: '#c9dfff',
            titleFontSize: 16,
            titleFontColor: '#0066ff',
            bodyFontColor: '#000',
            bodyFontSize: 14,
            displayColors: false
        }
    };

    mockLineTypeLast7Days = CHART_DATA_MOCK_7DAYS;
    chartPieData1: FusionChartPieData = CHART_PIE_DATA_MOCK;
    chartPieData2: FusionChartPieData = {
        data: {
            Vungle: 1902.16,
            ironSource: 2825.24,
            UnityAds: 835.68,
            Flurry: 1563.08
        }
    };
    chartPieData3: FusionChartPieData = {
        data: {
            Chartboost: 1824.22,
            ironSource: 2825.24,
            UnityAds: 835.68
        }
    };
    // with custom colors
    chartPieData4: FusionChartPieData = {
        data: [
            {
                displayText: 'Vungle',
                value: 1902.16,
                color: '#13c7c8'
            },
            {
                displayText: 'ironSource',
                value: 2825.24,
                color: '#3083ff'
            },
            {
                displayText: 'UnityAds',
                value: 835.68,
                color: '#a617a8'
            },
            {
                displayText: 'Flurry',
                value: 1563.08,
                color: '#4ac367'
            }
        ]
    };

    chartDataLoading: ChartData = {data: {}, legends: []};

    chartDataLabels$ = new BehaviorSubject<ChartLabel[]>([]);
    chartDataDoughnutLabels$ = new BehaviorSubject<ChartLabel[]>([]);
    chartDataDoughnutLetterLabels$ = new BehaviorSubject<ChartLabel[]>([]);

    colorPalette$ = new BehaviorSubject<string[]>([]);
    selectedVersion$: Observable<StyleVersion> = this.versionService.styleVersion$.pipe(takeUntil(this.onDestroy$));

    codeExampleAngular = this.angularExampleCode(EXAMPLE_DATA_MOCK);
    codeExampleAngularPie = this.angularExampleCode(EXAMPLE_DATA_PIE_MOCK);
    codeExampleAngularLoading = this.angularExampleCode('getData(), // in request');
    codeExampleAngular7Days = this.angularExampleCode(EXAMPLE_DATA_7_DAYS_MOCK);

    codeExampleReactBar = this.reactExampleCode(EXAMPLE_DATA_MOCK, 'bar');
    codeExampleReact = this.reactExampleCode(EXAMPLE_DATA_MOCK);
    codeExampleReactLoading = this.reactExampleCode('getData(), // in request', 'line', true);
    codeExampleReactNoData = this.reactExampleCode('{data:{}, legends:[]}  // no data', 'line', undefined, true);
    codeExampleReactStackedLine = this.reactExampleCode(EXAMPLE_DATA_MOCK, 'stackedLine');
    codeExampleReactDoughnut = this.reactExampleCode(EXAMPLE_DATA_PIE_MOCK, 'doughnut');
    codeExampleReactPie = this.reactExampleCode(EXAMPLE_DATA_PIE_MOCK, 'pie');
    codeExampleReact7Days = this.reactExampleCode(EXAMPLE_DATA_7_DAYS_MOCK);

    codeExampleVueBar = this.vueExampleCode(EXAMPLE_DATA_MOCK, 'bar');
    codeExampleVue = this.vueExampleCode(EXAMPLE_DATA_MOCK);
    codeExampleVueLoading = this.vueExampleCode('getData(), // in request', 'line', true);
    codeExampleVueNoData = this.vueExampleCode('{data:{}, legends:[]} // no data', 'line', undefined, true);
    codeExampleVueStackedLine = this.vueExampleCode(EXAMPLE_DATA_MOCK, 'stackedLine');
    codeExampleVueDoughnut = this.vueExampleCode(EXAMPLE_DATA_PIE_MOCK, 'doughnut');
    codeExampleVuePie = this.vueExampleCode(EXAMPLE_DATA_PIE_MOCK, 'pie');
    codeExampleVue7Days = this.vueExampleCode(EXAMPLE_DATA_7_DAYS_MOCK);

    codeExampleNativeBar = this.nativeExampleCode(EXAMPLE_DATA_MOCK, 'bar');
    codeExampleNative = this.nativeExampleCode(EXAMPLE_DATA_MOCK);
    codeExampleNativeLoading = this.nativeExampleCode('getData(), // in request', 'line', true);
    codeExampleNativeBarNoData = this.nativeExampleCode('{data:{}, legends:[]}  // no data', 'line', undefined, true);
    codeExampleNativeStackedLine = this.nativeExampleCode(EXAMPLE_DATA_MOCK, 'stackedLine');
    codeExampleNativeDoughnut = this.nativeExampleCode(EXAMPLE_DATA_PIE_MOCK, 'doughnut');
    codeExampleNativePie = this.nativeExampleCode(EXAMPLE_DATA_PIE_MOCK, 'pie');
    codeExampleNative7Days = this.nativeExampleCode(EXAMPLE_DATA_7_DAYS_MOCK);

    constructor(
        private colorsService: ColorsService,
        private versionService: VersionService,
        private router: Router,
        private docLayoutService: DocsLayoutService
    ) {}

    ngOnInit() {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Chart',
            type: 'page'
        });

        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V1) {
                this.router.navigate(['docs/components/charts']);
            }
            this.colorPalette$.next(this.colorsService.getColorPalette());
        });
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    onDatasetInit(chartDatasets: ChartDataset[]): void {
        const chartDataLabels = chartDatasets.map(dataSet => {
            const dataLabel: ChartLabel = {
                id: dataSet.id,
                label: dataSet.label,
                color: dataSet.borderColor,
                labelVisible: new FormControl(!dataSet.hidden)
            };
            dataLabel.labelVisible.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(item => {
                this.myLineTypeLabels.toggleDataset(dataLabel, true);
            });
            return dataLabel;
        });

        this.chartDataLabels$.next(chartDataLabels);
    }

    onDatasetDoughnutInit(chartDatasets: ChartDataset[]): void {
        const chartDataLabels = [];
        const legends = chartDatasets[0].legends;
        const data = chartDatasets[0].data;
        const colors = chartDatasets[0].backgroundColor;
        const summary = data.reduce((sum, item) => (sum += item), 0);

        legends.forEach((legend, idx) => {
            const dataLabel: ChartLabel = {
                id: idx,
                label: legend,
                labelSuffix: ((data[idx] / summary) * 100).toFixed(2) + '%',
                color: colors[idx]
            };
            chartDataLabels.push(dataLabel);
        });

        this.chartDataDoughnutLabels$.next(chartDataLabels);

        this.chartDataDoughnutLetterLabels$.next(
            chartDataLabels.map((label, idx) => {
                const baseCharCode = 65; // A
                return {...label, labelLetter: String.fromCharCode(baseCharCode + idx)};
            })
        );
    }

    angularExampleCode(dataMock: string): string {
        return `// define in host component as public
public chartData: ChartData;

// add value to the chartData in the ngOnInit() for example:
ngOnInit() {
    this.chartData = ${dataMock}
}`;
    }

    nativeExampleCode(dataMock: string, type = 'line', loading = false, noData = false): string {
        return `// define native-fusion-chart component
const fusionChart = document.createElement('native-fusion-chart');

// add chart configuration
fusionChart.config = {
    type: '${type}',
    data: ${dataMock}
    loading: ${loading},
    noData: ${noData},
};

// append native Chart component to document body (or host / holder element)
document.body.appendChild(fusionChart);`;
    }

    vueExampleCode(dataMock: string, type = 'line', loading = false, noData = false): string {
        return `<script>
import {FusionChart } from '@ironsource/fusion-uifusion-ui/native/vue';

export const FooComponent = {
  name: 'FooComponent',
  data() {
    return {
      chart: {
        type: '${type}',
        data: ${dataMock}
        chartSubject: 'Revenue',
        loading: ${loading},
        noData: ${noData},
      }
    }
  },
  components: {
    FusionChart
  },
  methods: {
  },
  mounted() {
    this.$emit('updateLayoutTitle', 'Foo')
  }
};

export default FooComponent;
</script>`;
    }

    reactExampleCode(dataMock: string, type = 'line', loading = false, noData = false): string {
        return `import {FusionChart} from '@ironsource/fusion-uifusion-ui/native/react';

export default class Foo extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            chart: {
                type: '${type}',
                data: ${dataMock}
                chartSubject: 'Revenue',
                loading: ${loading},
                noData: ${noData},
            }
        }
    }

    render() {
        return (
            <div className='chart-holder'>
               <FusionChart config={this.state.chart}></FusionChart>
            </div>);
    }
}`;
    }
}
