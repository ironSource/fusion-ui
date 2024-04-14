import {ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartLabel} from '@ironsource/fusion-ui/components/chart/common/base';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox/v1';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipDirective} from '@ironsource/fusion-ui/components/tooltip/v4';
import {ColorsService} from '@ironsource/fusion-ui/services/colors';

@Component({
    selector: 'fusion-chart-labels',
    standalone: true,
    imports: [CommonModule, CheckboxModule, IconModule, TooltipDirective],
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
    @Input() clickable = false;
    @Input() testId: string;

    @Output() labelClick = new EventEmitter<ChartLabel>();
    @Output() labelHover = new EventEmitter<ChartLabel>();

    colorsService = inject(ColorsService);

    getLabelBGColor(hexColor: string): string {
        return hexColor.startsWith('#') ? this.colorsService.toRgba(hexColor, this.bgOpacity) : hexColor;
    }
}
