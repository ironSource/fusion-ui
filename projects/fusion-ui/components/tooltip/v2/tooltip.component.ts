import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TooltipBaseComponent} from '@ironsource/fusion-ui/components/tooltip/common/base';

@Component({
    selector: 'fusion-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss'],
    host: {'ui-version': '2'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent extends TooltipBaseComponent {}
