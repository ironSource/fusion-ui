import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ButtonBaseComponent} from '@ironsource/fusion-ui/components/button/common/base';

@Component({
    selector: 'fusion-button',
    templateUrl: '../common/base/button.base.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ButtonComponent extends ButtonBaseComponent implements OnInit {
    protected setLoadingState(loading: boolean) {
        this.setHostClass(loading, 'fu-with-loading');
    }
}
