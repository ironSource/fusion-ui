import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutHeaderComponent} from './layout-header.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {LayoutHeaderMenuModule} from './layout-header-menu/layout-header-menu.module';

@NgModule({
    declarations: [LayoutHeaderComponent],
    imports: [CommonModule, IconModule, DynamicComponentsModule, ClickOutsideModule, LayoutHeaderMenuModule],
    exports: [LayoutHeaderComponent]
})
export class LayoutHeaderModule {}
