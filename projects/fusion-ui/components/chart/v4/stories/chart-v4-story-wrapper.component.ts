import {ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehaviorSubject} from 'rxjs';
import {ChartData, ChartDataset, ChartLabel, ChartType} from '@ironsource/fusion-ui/components/chart/common/base';
import {ChartLabelsV4Component} from '@ironsource/fusion-ui/components/chart-labels/v4/chart-labels-v4.component';
import {ChartV4Component} from '../chart-v4.component';
import {getTestId, ChartLabelTestIdModifiers} from '@ironsource/fusion-ui/entities';

@Component({
    selector: 'fusion-chart-wrapper',
    standalone: true,
    imports: [CommonModule, ChartV4Component, ChartLabelsV4Component],
    host: {class: 'fusion-v4'},
    template: `
        <div class="fusion-chart-wrapper" *ngIf="data">
            <fusion-chart
                #fusionChart
                [data]="data"
                [type]="type"
                [options]="options"
                [testId]="testId"
                (afterDatasetInit)="onChartInit($event)"
            ></fusion-chart>
        </div>
        <div class="fusion-chart-labels-wrapper" *ngIf="data">
            <fusion-chart-labels
                [labels]="chartDataLabels$ | async"
                (labelHover)="labelHovered($event)"
                [testId]="getTestId(testId, ChartLabelTestIdModifiers.LABEL)"
            ></fusion-chart-labels>
        </div>
        <div *ngIf="!data" class="fu-empty-state">
            <div class="fu-empty-state-icon"></div>
            <div class="fu-empty-state-title">No data to display</div>
        </div>
    `,
    styleUrls: ['./chart-v4-wrapper.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartV4WrapperComponent {
    @Input() data: ChartData;
    @Input() type: ChartType;
    @Input() options: any;
    @Input() testId: string;

    @ViewChild('fusionChart') fusionChart: ChartV4Component;

    chartDataLabels$ = new BehaviorSubject<ChartLabel[]>([]);

    onChartInit(chartDatasets: ChartDataset[]): void {
        let chartDataLabels: ChartLabel[] = [];
        if (this.type === 'doughnut') {
            const legends = chartDatasets[0]?.legends;
            const values = chartDatasets[0]?.data;
            const colors = chartDatasets[0]?.backgroundColor;
            chartDataLabels = legends
                .map((legend: string, idx: number) => {
                    const dataLabel: ChartLabel = {
                        id: idx,
                        label: legend,
                        color: colors[idx]
                    };
                    return dataLabel;
                })
                .reverse();
        } else {
            chartDataLabels = chartDatasets
                .map((dataSet, idx) => {
                    const dataLabel: ChartLabel = {
                        id: idx,
                        label: dataSet.label,
                        color: dataSet.borderColor === '#FCFCFC' ? dataSet.backgroundColor : dataSet.borderColor,
                        icon: dataSet.icon
                    };
                    return dataLabel;
                })
                .reverse();
        }
        this.chartDataLabels$.next(chartDataLabels);
    }

    labelHovered(label: ChartLabel): void {
        this.fusionChart?.highlightDataset(label);
    }

    protected readonly getTestId = getTestId;
    protected readonly ChartLabelTestIdModifiers = ChartLabelTestIdModifiers;
}
