import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastComponent} from './toast.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';

@NgModule({
    declarations: [ToastComponent],
    imports: [CommonModule, IconModule, DynamicComponentsModule],
    exports: [ToastComponent, IconModule]
})
export class ToastModule {}
