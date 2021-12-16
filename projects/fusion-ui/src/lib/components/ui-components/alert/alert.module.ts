import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertComponent} from './alert.component';
import {IconModule} from '../icon/icon.module';

@NgModule({
    declarations: [AlertComponent],
    exports: [AlertComponent],
    imports: [CommonModule, IconModule],
    entryComponents: [AlertComponent]
})
export class AlertModule {}
