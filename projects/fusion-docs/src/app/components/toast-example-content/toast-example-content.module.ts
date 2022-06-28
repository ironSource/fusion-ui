import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastExampleContentComponent} from './toast-example-content.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@NgModule({
    declarations: [ToastExampleContentComponent],
    imports: [CommonModule, IconModule]
})
export class ToastExampleContentModule {}
