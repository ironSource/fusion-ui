import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ButtonBaseComponent} from '@ironsource/fusion-ui/components/button/common/base';

@Component({
    selector: 'fusion-button,[fusion-button]',
    templateUrl: '../common/base/button.base.component.html',
    styleUrls: ['./button.component.scss'],
    host: {'ui-version': '1'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent extends ButtonBaseComponent implements OnInit {}
