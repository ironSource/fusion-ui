import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastExampleContentComponent} from './toast-example-content.component';
import {IconModule} from '@ironsource/fusion-uifusion-ui';

@NgModule({
    declarations: [ToastExampleContentComponent],
    imports: [CommonModule, IconModule]
})
export class ToastExampleContentModule {}
