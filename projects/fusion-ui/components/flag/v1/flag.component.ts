import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FlagBaseComponent} from '@ironsource/fusion-ui/components/flag/common/base';

@Component({
    selector: 'fusion-flag',
    templateUrl: '../common/base/flag.base.component.html',
    styleUrls: ['./flag.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class FlagComponent extends FlagBaseComponent {}
