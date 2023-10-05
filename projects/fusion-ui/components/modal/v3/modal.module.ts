import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './modal.component';
import {ModalFooterComponent} from './components/modal-footer/modal-footer.component';
import {ModalContentComponent} from './components/modal-content/modal-content.component';
import {ModalHeaderComponent} from './components/modal-header/modal-header.component';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader/v2';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v3';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v3';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';

@NgModule({
    declarations: [ModalComponent, ModalFooterComponent, ModalContentComponent, ModalHeaderComponent],
    exports: [ModalComponent, ModalFooterComponent, ModalContentComponent, ModalHeaderComponent],
    imports: [CommonModule, LoaderModule, ButtonModule, IconModule, TooltipModule, GenericPipe]
})
export class ModalModule {}
