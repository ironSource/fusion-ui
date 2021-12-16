import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastExampleContentComponent} from './toast-example-content.component';
import {IconModule} from '@ironsrc/fusion-ui';

@NgModule({
    declarations: [ToastExampleContentComponent],
    imports: [CommonModule, IconModule],
    entryComponents: [ToastExampleContentComponent]
})
export class ToastExampleContentModule {}
