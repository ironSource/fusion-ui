import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopupComponent} from './popup.component';
import {ClickOutsideModule} from '../../../directives/click-outside/click-outside.module';
import {DynamicComponentsModule} from '../dynamic-components/dynamic-components.module';
import {PopupDirective} from './popup.directive';

@NgModule({
    imports: [CommonModule, ClickOutsideModule, DynamicComponentsModule],
    declarations: [PopupComponent, PopupDirective],
    exports: [PopupComponent, PopupDirective],
    entryComponents: [PopupComponent]
})
export class PopupModule {}
