import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopupComponent} from './popup.component';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';
import {PopupDirective} from './popup.directive';

@NgModule({
    imports: [CommonModule, ClickOutsideModule, DynamicComponentsModule],
    declarations: [PopupComponent, PopupDirective],
    exports: [PopupComponent, PopupDirective]
})
export class PopupModule {}
