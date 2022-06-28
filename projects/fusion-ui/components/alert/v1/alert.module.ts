import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertComponent} from './alert.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@NgModule({
    declarations: [AlertComponent],
    exports: [AlertComponent],
    imports: [CommonModule, IconModule]
})
export class AlertModule {}
