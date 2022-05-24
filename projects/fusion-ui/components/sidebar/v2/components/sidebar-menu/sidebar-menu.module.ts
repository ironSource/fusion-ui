import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarMenuComponent} from './sidebar-menu.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';
import {SidebarMenuService} from '@ironsource/fusion-ui/components/sidebar/common/services';
import {RouterModule} from '@angular/router';
import {LogService} from '@ironsource/fusion-ui/services/log';

@NgModule({
    declarations: [SidebarMenuComponent],
    imports: [CommonModule, IconModule, DynamicComponentsModule, RouterModule],
    exports: [SidebarMenuComponent],
    providers: [SidebarMenuService, LogService]
})
export class SidebarMenuModule {}
