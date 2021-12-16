import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopupV2InnerComponentExampleComponent} from './popup-v2-inner-component-example.component';
import {ButtonModule, IconModule} from '@ironsrc/fusion-ui';

@NgModule({
    declarations: [PopupV2InnerComponentExampleComponent],
    imports: [CommonModule, IconModule, ButtonModule],
    exports: [PopupV2InnerComponentExampleComponent]
})
export class PopupV2InnerComponentExampleModule {}
