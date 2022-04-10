import {ChangeDetectionStrategy, Component, Injector, Input} from '@angular/core';
import {ChartLabel} from '@ironsource/fusion-ui/components/chart';
import {FusionBaseComponent} from '@ironsource/fusion-ui/components/style';

@Component({
    selector: 'fusion-chart-labels',
    templateUrl: './chart-labels.component.html',
    styleUrls: ['./chart-labels.component.scss', './chart-labels.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartLabelsComponent extends FusionBaseComponent {
    @Input() set dataSetsLabels(value: ChartLabel[]) {
        this.labels = value;
        this.hasCheckboxes = Array.isArray(this.labels) && this.labels.length > 0 && !!this.labels[0].labelVisible;
    }
    hasCheckboxes = true;
    labels: ChartLabel[] = [];

    constructor(injector: Injector) {
        super(injector);
    }

    onLabelClicked($event): void {
        const labelEl = $event.target.querySelector('label');
        if (labelEl) {
            labelEl.click();
        }
    }
}
