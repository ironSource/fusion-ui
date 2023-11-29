import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FlagBaseComponent} from '@ironsource/fusion-ui/components/flag/common/base';

@Component({
    selector: 'fusion-flag',
    templateUrl: '../common/base/flag.base.component.html',
    styleUrls: ['./flag.component.scss'],
    host: {'ui-version': '1'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlagComponent extends FlagBaseComponent {}
