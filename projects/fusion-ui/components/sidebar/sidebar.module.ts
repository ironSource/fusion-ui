import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar.component';
import {SidebarMenuModule} from './sidebar-menu/sidebar-menu.module';
import {IconModule} from '../icon/icon.module';
import {SidebarMenuService} from './sidebar-menu/sidebar-menu.service';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';

@NgModule({
    declarations: [SidebarComponent],
    imports: [CommonModule, IconModule, SidebarMenuModule, DynamicComponentsModule],
    exports: [SidebarComponent],
    providers: [SidebarMenuService]
})
export class SidebarModule {}
