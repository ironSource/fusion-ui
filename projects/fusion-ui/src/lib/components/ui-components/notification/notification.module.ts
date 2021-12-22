import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationComponent} from './notification.component';
import {ModalModule} from '../modal/modal.module';
import {IconModule} from '../icon/icon.module';

@NgModule({
    declarations: [NotificationComponent],
    exports: [NotificationComponent],
    imports: [CommonModule, ModalModule, IconModule]
})
export class NotificationModule {}
