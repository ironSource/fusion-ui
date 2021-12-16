import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastComponent} from './toast.component';
import {IconModule} from '../icon/icon.module';
import {DynamicComponentsModule} from '../dynamic-components/dynamic-components.module';

@NgModule({
    declarations: [ToastComponent],
    imports: [CommonModule, IconModule, DynamicComponentsModule],
    exports: [ToastComponent, IconModule]
})
export class ToastModule {}
