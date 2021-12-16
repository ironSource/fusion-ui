import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './modal/modal.component';
import {ModalFooterComponent} from './modal-footer/modal-footer.component';
import {ModalContentComponent} from './modal-content/modal-content.component';
import {ModalHeaderComponent} from './modal-header/modal-header.component';
import {LoaderModule} from '../loader/loader.module';
import {ButtonModule} from '../button/button.module';
import {IconModule} from '../icon/icon.module';

@NgModule({
    declarations: [ModalComponent, ModalFooterComponent, ModalContentComponent, ModalHeaderComponent],
    exports: [ModalComponent, ModalFooterComponent, ModalContentComponent, ModalHeaderComponent],
    imports: [CommonModule, LoaderModule, ButtonModule, IconModule],
    entryComponents: [ModalComponent]
})
export class ModalModule {}
