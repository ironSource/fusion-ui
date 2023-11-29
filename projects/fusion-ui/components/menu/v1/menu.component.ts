import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MenuBaseComponent} from '@ironsource/fusion-ui/components/menu/common/base';

@Component({
    selector: 'fusion-menu',
    templateUrl: '../common/base/menu.base.component.html',
    styleUrls: ['./menu.component.scss'],
    host: {'ui-version': '1'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent extends MenuBaseComponent {}
