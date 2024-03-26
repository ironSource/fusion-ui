import {ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehaviorSubject} from 'rxjs';
import {ChartData, ChartDataset, ChartLabel, ChartType} from '@ironsource/fusion-ui/components/chart/common/base';
import {ChartLabelsV4Component} from '@ironsource/fusion-ui/components/chart-labels/v4/chart-labels-v4.component';
import {ChartV4Component} from '../chart-v4.component';

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
                (afterDatasetInit)="onChartInit($event)"
            ></fusion-chart>
        </div>
        <div class="fusion-chart-labels-wrapper" *ngIf="data && type !== 'doughnut'">
            <fusion-chart-labels
                [labels]="chartDataLabels$ | async"
                [bgOpacity]="type === 'stackedLine' ? 10 : 100"
                (labelHover)="labelHovered($event)"
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

    @ViewChild('fusionChart') fusionChart: ChartV4Component;

    chartDataLabels$ = new BehaviorSubject<ChartLabel[]>([]);

    onChartInit(chartDatasets: ChartDataset[]): void {
        const chartDataLabels = chartDatasets.map((dataSet, idx) => {
            const dataLabel: ChartLabel = {
                id: idx,
                label: dataSet.label,
                color: dataSet.borderColor === '#FCFCFC' ? dataSet.backgroundColor : dataSet.borderColor,
                icon: dataSet.icon
            };
            return dataLabel;
        });
        /*.filter((item, idx) => idx < 5);*/

        this.chartDataLabels$.next(chartDataLabels);
    }

    labelHovered(label: ChartLabel): void {
        this.fusionChart?.highlightDataset(label);
    }
}
