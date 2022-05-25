import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SidebarBaseComponent} from '@ironsource/fusion-ui/components/sidebar/common/base';

@Component({
    selector: 'fusion-sidebar',
    templateUrl: '../common/base/sidebar.base.component.html',
    styleUrls: ['./sidebar.component.scss', './sidebar-mobile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent extends SidebarBaseComponent {}
