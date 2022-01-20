import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderOverlayComponent} from './header-overlay.component';
import {ClickOutsideModule} from '../../../directives/click-outside/click-outside.module';
import {DynamicComponentsModule} from '../dynamic-components/dynamic-components.module';
import {ModalModule} from '../modal/modal.module';

@NgModule({
    declarations: [HeaderOverlayComponent],
    exports: [HeaderOverlayComponent],
    imports: [CommonModule, ModalModule, DynamicComponentsModule, ClickOutsideModule]
})
export class HeaderOverlayModule {}
