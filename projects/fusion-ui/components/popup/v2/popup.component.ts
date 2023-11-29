import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PopupBaseComponent} from '@ironsource/fusion-ui/components/popup/common/base';

@Component({
    selector: 'fusion-popup',
    templateUrl: '../common/base/popup.base.component.html',
    styleUrls: ['../common/base/popup.base.component.scss'],
    host: {'ui-version': '2'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupComponent extends PopupBaseComponent {}
