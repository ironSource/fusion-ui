import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ButtonBaseComponent} from '@ironsource/fusion-ui/components/button/common/base';

@Component({
    selector: 'fusion-button',
    templateUrl: '../common/base/button.base.component.html',
    styleUrls: ['./button.component-v3.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent extends ButtonBaseComponent implements OnInit {}
