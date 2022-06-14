import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopupV2InnerComponentExampleComponent} from './popup-v2-inner-component-example.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';

@NgModule({
    declarations: [PopupV2InnerComponentExampleComponent],
    imports: [CommonModule, IconModule, ButtonModule],
    exports: [PopupV2InnerComponentExampleComponent]
})
export class PopupV2InnerComponentExampleModule {}
