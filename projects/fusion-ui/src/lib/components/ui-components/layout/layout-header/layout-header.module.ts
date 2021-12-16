import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutHeaderComponent} from './layout-header.component';
import {IconModule} from '../../icon/icon.module';
import {DynamicComponentsModule} from '../../dynamic-components/dynamic-components.module';
import {ClickOutsideModule} from '../../../../directives/click-outside/click-outside.module';
import {LayoutHeaderMenuModule} from './layout-header-menu/layout-header-menu.module';

@NgModule({
    declarations: [LayoutHeaderComponent],
    imports: [CommonModule, IconModule, DynamicComponentsModule, ClickOutsideModule, LayoutHeaderMenuModule],
    exports: [LayoutHeaderComponent]
})
export class LayoutHeaderModule {}
