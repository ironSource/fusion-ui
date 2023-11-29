import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ChartLabelsBaseComponent} from '@ironsource/fusion-ui/components/chart-labels/common/base';

@Component({
    selector: 'fusion-chart-labels',
    templateUrl: '../common/base/chart-labels.base.component.html',
    styleUrls: ['./chart-labels.component.scss'],
    host: {'ui-version': '1'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartLabelsComponent extends ChartLabelsBaseComponent {}
