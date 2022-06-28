import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationComponent} from './notification.component';
import {ModalModule} from '@ironsource/fusion-ui/components/modal/v1';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@NgModule({
    declarations: [NotificationComponent],
    exports: [NotificationComponent],
    imports: [CommonModule, ModalModule, IconModule]
})
export class NotificationModule {}
