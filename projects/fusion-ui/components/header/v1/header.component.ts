import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderBaseComponent} from '@ironsource/fusion-ui/components/header/common/base';

@Component({
    selector: 'fusion-header',
    templateUrl: '../common/base/header.base.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class HeaderComponent extends HeaderBaseComponent {}
