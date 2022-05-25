import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutHeaderMenuComponent} from './layout-header-menu.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';

@NgModule({
    declarations: [LayoutHeaderMenuComponent],
    imports: [CommonModule, IconModule, DynamicComponentsModule],
    exports: [LayoutHeaderMenuComponent]
})
export class LayoutHeaderMenuModule {}
