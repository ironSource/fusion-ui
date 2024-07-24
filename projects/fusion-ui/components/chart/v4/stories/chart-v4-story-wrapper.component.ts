import {ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {ChartComponent} from '@ironsource/fusion-ui/components/chart/v4';
import {ChartLabelsComponent} from '@ironsource/fusion-ui/components/chart-labels/v4';
import {ChartData, ChartDataset, ChartLabel, ChartType} from '@ironsource/fusion-ui/components/chart/common/base';
import {getTestId, ChartLabelTestIdModifiers} from '@ironsource/fusion-ui/entities';

@Component({
    selector: 'fusion-chart-wrapper',
    standalone: true,
    imports: [CommonModule, ChartComponent, ChartLabelsComponent],
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
                (labelClick)="labelClicked($event)"
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
    @Input() set data(value: ChartData) {
        this._data = value;
    }
    get data(): ChartData {
        return this._data;
    }
    private _data: ChartData;
    @Input() type: ChartType;
    @Input() options: any;
    @Input() testId: string;
    @Input() labelsClickable = false;
    @Input() labelOther = false;

    @ViewChild('fusionChart') fusionChart: ChartComponent;

    chartDataLabels$ = new BehaviorSubject<ChartLabel[]>([]);

    onChartInit(chartDatasets: ChartDataset[]): void {
        let chartDataLabels: ChartLabel[] = [];
        if (this.type === 'doughnut') {
            const legends = chartDatasets[0]?.legends;
            const values = chartDatasets[0]?.data;
            const colors = chartDatasets[0]?.backgroundColor;
            chartDataLabels = legends.map((legend: string, idx: number) => {
                const dataLabel: ChartLabel = {
                    id: idx,
                    label: legend,
                    color: colors[idx]
                };
                return dataLabel;
            });
        } else {
            chartDataLabels = chartDatasets.map((dataSet, idx) => {
                const dataLabel: ChartLabel = {
                    id: dataSet.id ?? idx,
                    label: dataSet.label,
                    color: dataSet.borderColor === '#FCFCFC' ? dataSet.backgroundColor : dataSet.borderColor,
                    icon: dataSet.icon
                };
                if (this.labelsClickable) {
                    dataLabel.labelVisible = new FormControl(true);
                }
                return dataLabel;
            }); /*
                .reverse();*/
        }
        if (this.labelOther) {
            chartDataLabels.push({
                id: 'Others',
                label: 'Show All',
                labelVisible: new FormControl(true),
                alignToRight: true,
                typeCheckbox: true,
                backgroundColor: '#646464'
            });
        }
        this.chartDataLabels$.next(chartDataLabels);
    }

    labelHovered(label: ChartLabel): void {
        this.fusionChart?.highlightDataset(label);
    }
    labelClicked(label: ChartLabel): void {
        this.fusionChart?.toggleDataset(label, true);
    }

    protected readonly getTestId = getTestId;
    protected readonly ChartLabelTestIdModifiers = ChartLabelTestIdModifiers;
}
