import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarMenuComponent} from './sidebar-menu.component';
import {IconModule} from '../../icon/icon.module';
import {DynamicComponentsModule} from '../../dynamic-components/dynamic-components.module';
import {SidebarMenuService} from './sidebar-menu.service';
import {RouterModule} from '@angular/router';
import {LogService} from '../../../../services/log/log.service';

@NgModule({
    declarations: [SidebarMenuComponent],
    imports: [CommonModule, IconModule, DynamicComponentsModule, RouterModule],
    exports: [SidebarMenuComponent],
    providers: [SidebarMenuService, LogService]
})
export class SidebarMenuModule {}
