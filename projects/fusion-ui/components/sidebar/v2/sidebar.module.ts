import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar.component';
import {SidebarMenuModule} from './components/sidebar-menu/sidebar-menu.module';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {SidebarMenuService} from '@ironsource/fusion-ui/components/sidebar/common/services';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';

@NgModule({
    declarations: [SidebarComponent],
    imports: [CommonModule, IconModule, SidebarMenuModule, DynamicComponentsModule],
    exports: [SidebarComponent],
    providers: [SidebarMenuService]
})
export class SidebarModule {}
