import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderOverlayComponent} from './header-overlay.component';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';
import {ModalModule} from '@ironsource/fusion-ui/components/modal/v1';

@NgModule({
    declarations: [HeaderOverlayComponent],
    exports: [HeaderOverlayComponent],
    imports: [CommonModule, ModalModule, DynamicComponentsModule, ClickOutsideModule]
})
export class HeaderOverlayModule {}
