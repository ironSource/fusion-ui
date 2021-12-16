import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutHeaderMenuComponent} from './layout-header-menu.component';
import {IconModule} from '../../../icon/icon.module';
import {DynamicComponentsModule} from '../../../dynamic-components/dynamic-components.module';

@NgModule({
    declarations: [LayoutHeaderMenuComponent],
    imports: [CommonModule, IconModule, DynamicComponentsModule],
    exports: [LayoutHeaderMenuComponent]
})
export class LayoutHeaderMenuModule {}
