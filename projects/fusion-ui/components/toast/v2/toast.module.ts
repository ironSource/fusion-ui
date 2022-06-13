import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastComponent} from './toast.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';

@NgModule({
    declarations: [ToastComponent],
    imports: [CommonModule, IconModule, DynamicComponentsModule],
    exports: [ToastComponent, IconModule]
})
export class ToastModule {}
