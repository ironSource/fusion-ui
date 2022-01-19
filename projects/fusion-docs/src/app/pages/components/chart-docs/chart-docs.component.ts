import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ChartComponent, ChartLabel, ChartDataset, VersionService, StyleVersion, FusionChartPieData} from '@ironsource/fusion-uifusion-ui';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {FormControl} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {
    CHART_DATA_50_DAYS,
    CHART_DATA_MOCK,
    CHART_DATA_MOCK_7DAYS,
    CHART_DATA_MOCK_YESTERDAY,
    CHART_DATA_ONE_DAY,
    CHART_DATA_TODAY_MOCK,
    CHART_PIE_DATA_MOCK
} from './mocks/chart-data-mock';
import {
    EXAMPLE_DATA_50_DAYS_MOCK,
    EXAMPLE_DATA_7_DAYS_MOCK,
    EXAMPLE_DATA_MOCK,
    EXAMPLE_DATA_ONE_DAY_MOCK,
    EXAMPLE_DATA_PIE_MOCK,
    EXAMPLE_DATA_TODAY_MOCK,
    EXAMPLE_DATA_YESTERDAY_MOCK
} from './mocks/chart-example-data-mock';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {Router} from '@angular/router';

@Component({
    selector: 'fusion-chart-docs',
    templateUrl: './chart-docs.component.html',
    styleUrls: ['./chart-docs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartDocsComponent implements OnInit, OnDestroy {
    @ViewChild('myLineTypeLabels', {static: true}) myLineTypeLabels: ChartComponent;

    onDestroy$ = new Subject();

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
                    label: 'Doughnut',
                    scrollTo: '#chartTypeDoughnut',
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
                    label: 'Chart Labels with letter',
                    scrollTo: '#chartLabelsLetter',
                    scrollOffset: 30
                }
            ]
        },
        {
            title: 'Line Types',
            items: [
                {
                    label: 'Today',
                    scrollTo: '#lineTypeToday',
                    scrollOffset: 15
                },
                {
                    label: 'Last 7 Days',
                    scrollTo: '#lineTypeLast7Days',
                    scrollOffset: 15
                },
                {
                    label: 'Yesterday',
                    scrollTo: '#lineTypeYesterday',
                    scrollOffset: 15
                },
                {
                    label: 'One Day data',
                    scrollTo: '#lineTypeOneDay',
                    scrollOffset: 15
                },
                {
                    label: '50+ (No Dots)',
                    scrollTo: '#lineTypeNoDots',
                    scrollOffset: 15
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

    chartData = CHART_DATA_MOCK;
    lineChartOptions: any;

    chartOptionTest = {
        tooltips: {
            callbacks: {
                title() {
                    return '';
                },
                label(item, data) {
                    return `${data.datasets[item.datasetIndex].label}: ${item.value}`;
                },
                afterLabel: (item, data) => {
                    return `Days since install: ${item.index}`;
                }
            }
        }
    };

    chartPieData1: FusionChartPieData = CHART_PIE_DATA_MOCK;
    chartPieData2: FusionChartPieData = {
        label: 'Installs',
        data: {
            Vungle: 1902.16,
            ironSource: 2825.24,
            UnityAds: 835.68,
            Flurry: 1563.08
        }
    };
    chartPieData3: FusionChartPieData = {
        label: 'Total Users',
        data: {
            Chartboost: 1824.22,
            ironSource: 2825.24,
            UnityAds: 835.68
        }
    };

    mockLineTypeToday = CHART_DATA_TODAY_MOCK;
    mockLineTypeYesterday = CHART_DATA_MOCK_YESTERDAY;
    mockLineTypeLast7Days = CHART_DATA_MOCK_7DAYS;
    mockLineTypeOneDay = CHART_DATA_ONE_DAY;
    mockLineTypeMore50Days = CHART_DATA_50_DAYS;

    chartDataLabels$ = new BehaviorSubject<ChartLabel[]>([]);
    chartDataLabelsLetters$ = new BehaviorSubject<ChartLabel[]>([]);

    codeExampleAngular = this.angularExampleCode(EXAMPLE_DATA_MOCK);
    codeExampleAngularToday = this.angularExampleCode(EXAMPLE_DATA_TODAY_MOCK);
    codeExampleAngular7Days = this.angularExampleCode(EXAMPLE_DATA_7_DAYS_MOCK);
    codeExampleAngularYesterday = this.angularExampleCode(EXAMPLE_DATA_YESTERDAY_MOCK);
    codeExampleAngularOneDay = this.angularExampleCode(EXAMPLE_DATA_ONE_DAY_MOCK);
    codeExampleAngular50Days = this.angularExampleCode(EXAMPLE_DATA_50_DAYS_MOCK);
    codeExampleAngularPie = this.angularExampleCode(EXAMPLE_DATA_PIE_MOCK);

    codeExampleNativeBar = this.nativeExampleCode(EXAMPLE_DATA_MOCK, 'bar');
    codeExampleNative = this.nativeExampleCode(EXAMPLE_DATA_MOCK);
    codeExampleNativeStackedLine = this.nativeExampleCode(EXAMPLE_DATA_MOCK, 'stackedLine');
    codeExampleNativeToday = this.nativeExampleCode(EXAMPLE_DATA_TODAY_MOCK);
    codeExampleNative7Days = this.nativeExampleCode(EXAMPLE_DATA_7_DAYS_MOCK);
    codeExampleNativeYesterday = this.nativeExampleCode(EXAMPLE_DATA_YESTERDAY_MOCK);
    codeExampleNativeOneDay = this.nativeExampleCode(EXAMPLE_DATA_ONE_DAY_MOCK);
    codeExampleNative50Days = this.nativeExampleCode(EXAMPLE_DATA_50_DAYS_MOCK);
    codeExampleNativePie = this.nativeExampleCode(EXAMPLE_DATA_PIE_MOCK, 'doughnut');

    codeExampleVueBar = this.vueExampleCode(EXAMPLE_DATA_MOCK, 'bar');
    codeExampleVue = this.vueExampleCode(EXAMPLE_DATA_MOCK);
    codeExampleVueStackedLine = this.vueExampleCode(EXAMPLE_DATA_MOCK, 'stackedLine');
    codeExampleVueToday = this.vueExampleCode(EXAMPLE_DATA_TODAY_MOCK);
    codeExampleVue7Days = this.vueExampleCode(EXAMPLE_DATA_7_DAYS_MOCK);
    codeExampleVueYesterday = this.vueExampleCode(EXAMPLE_DATA_YESTERDAY_MOCK);
    codeExampleVueOneDay = this.vueExampleCode(EXAMPLE_DATA_ONE_DAY_MOCK);
    codeExampleVue50Days = this.vueExampleCode(EXAMPLE_DATA_50_DAYS_MOCK);
    codeExampleVuePie = this.vueExampleCode(EXAMPLE_DATA_PIE_MOCK, 'doughnut');

    codeExampleReactBar = this.reactExampleCode(EXAMPLE_DATA_MOCK, 'bar');
    codeExampleReact = this.reactExampleCode(EXAMPLE_DATA_MOCK);
    codeExampleReactStackedLine = this.reactExampleCode(EXAMPLE_DATA_MOCK, 'stackedLine');
    codeExampleReactToday = this.reactExampleCode(EXAMPLE_DATA_TODAY_MOCK);
    codeExampleReact7Days = this.reactExampleCode(EXAMPLE_DATA_7_DAYS_MOCK);
    codeExampleReactYesterday = this.reactExampleCode(EXAMPLE_DATA_YESTERDAY_MOCK);
    codeExampleReactOneDay = this.reactExampleCode(EXAMPLE_DATA_ONE_DAY_MOCK);
    codeExampleReact50Days = this.reactExampleCode(EXAMPLE_DATA_50_DAYS_MOCK);
    codeExampleReactPie = this.reactExampleCode(EXAMPLE_DATA_PIE_MOCK, 'doughnut');

    selectedVersion$: Observable<StyleVersion> = this.versionService.styleVersion$.pipe(takeUntil(this.onDestroy$));

    constructor(private versionService: VersionService, private router: Router, private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V2) {
                this.router.navigate(['/docs/components/v2/charts']);
            }
        });

        this.lineChartOptions = {
            maintainAspectRatio: false,
            responsive: true
        };
    }

    ngOnDestroy() {
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

        this.chartDataLabelsLetters$.next(
            chartDatasets.map((dataSet, idx) => {
                const baseCharCode = 65; // A
                const dataLabel: ChartLabel = {
                    id: dataSet.id,
                    label: dataSet.label,
                    color: dataSet.borderColor,
                    labelLetter: String.fromCharCode(baseCharCode + idx)
                };
                return dataLabel;
            })
        );

        this.cdr.detectChanges();
    }

    angularExampleCode(dataMock: string): string {
        return `// define in host component as public
public chartData: ChartData;

// add value to the chartData in the ngOnInit() for example:
ngOnInit() {
    this.chartData = ${dataMock}
}`;
    }

    nativeExampleCode(dataMock: string, type = 'line'): string {
        return `// define native-fusion-chart component
const fusionChart = document.createElement('native-fusion-chart');

// add chart configuration
fusionChart.config = {
    type: '${type}',
    data: ${dataMock}
};

// append native Chart component to document body (or host / holder element)
document.body.appendChild(fusionChart);`;
    }

    vueExampleCode(dataMock: string, type = 'line'): string {
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

    reactExampleCode(dataMock: string, type = 'line'): string {
        return `import {FusionChart} from '@ironsource/fusion-uifusion-ui/native/react';

export default class Foo extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            chart: {
                type: '${type}',
                data: ${dataMock}
                chartSubject: 'Revenue',
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
