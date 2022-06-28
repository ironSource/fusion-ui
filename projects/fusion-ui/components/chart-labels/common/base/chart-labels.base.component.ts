import {Directive, Input} from '@angular/core';
import {ChartLabel} from '@ironsource/fusion-ui/components/chart/common/base';

@Directive()
export abstract class ChartLabelsBaseComponent {
    @Input() set dataSetsLabels(value: ChartLabel[]) {
        this.labels = value;
        this.hasCheckboxes = Array.isArray(this.labels) && this.labels.length > 0 && !!this.labels[0].labelVisible;
    }
    hasCheckboxes = true;
    labels: ChartLabel[] = [];

    onLabelClicked($event): void {
        const labelEl = $event.target.querySelector('label');
        if (labelEl) {
            labelEl.click();
        }
    }
}
