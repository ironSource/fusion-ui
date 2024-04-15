import {ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ChartLabel} from '@ironsource/fusion-ui/components/chart/common/base';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipDirective} from '@ironsource/fusion-ui/components/tooltip/v4';
import {ColorsService} from '@ironsource/fusion-ui/services/colors';
import {CheckboxComponent} from '@ironsource/fusion-ui/components/checkbox/v4';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';

@Component({
    selector: 'fusion-chart-labels',
    standalone: true,
    imports: [CommonModule, IconModule, TooltipDirective, CheckboxComponent, ReactiveFormsModule],
    host: {class: 'fusion-v4'},
    templateUrl: './chart-labels-v4.component.html',
    styleUrls: ['./chart-labels-v4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartLabelsV4Component {
    @Input() set labels(value: ChartLabel[]) {
        this._labels = value;
    }

    private _labels: ChartLabel[] = [];
    get labels(): ChartLabel[] {
        return this._labels;
    }

    @Input() bgOpacity = 100;
    @Input() testId: string;

    @Output() labelClick = new EventEmitter<ChartLabel>();
    @Output() labelHover = new EventEmitter<ChartLabel>();

    colorsService = inject(ColorsService);

    getLabelBGColor(hexColor: string): string {
        return hexColor.startsWith('#') ? this.colorsService.toRgba(hexColor, this.bgOpacity) : hexColor;
    }

    onLabelHover(chartLabel: ChartLabel): void {
        if (
            isNullOrUndefined(chartLabel) ||
            isNullOrUndefined(chartLabel.labelVisible) ||
            (!isNullOrUndefined(chartLabel.labelVisible) && chartLabel.labelVisible.value)
        ) {
            this.labelHover.emit(chartLabel);
        }
    }

    chartLabelClicked(chartLabel: ChartLabel): void {
        if (!isNullOrUndefined(chartLabel.labelVisible)) {
            chartLabel.labelVisible.setValue(!chartLabel.labelVisible.value, {emitEvent: true});
            this.labelClick.emit(chartLabel);
            if (!chartLabel.typeCheckbox) {
                if (chartLabel.labelVisible.value) {
                    this.labelHover.emit(chartLabel);
                } else {
                    this.labelHover.emit(null);
                }
            }
        }
    }
}
