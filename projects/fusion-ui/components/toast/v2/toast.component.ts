import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ToastBaseComponent} from '@ironsource/fusion-ui/components/toast/common/base';

@Component({
    selector: 'fusion-toast',
    templateUrl: '../common/base/toast.base.component.html',
    styleUrls: ['./toast.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ToastComponent extends ToastBaseComponent {}
