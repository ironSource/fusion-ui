import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    forwardRef,
    Inject,
    Input,
    OnDestroy,
    OnInit,
    Renderer2,
    TemplateRef
} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ModalBaseComponent, ModalService} from '@ironsource/fusion-ui/components/modal/common/base';
import {DOCUMENT} from '@angular/common';
import {LogService, UniqueIdService, WindowService} from '@ironsource/fusion-ui/services';
import {isFunction} from '@ironsource/fusion-ui/utils';

@Component({
    selector: 'fusion-modal',
    templateUrl: '../common/base/modal.base.component.html',
    styleUrls: ['./modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ModalComponent),
            multi: true
        }
    ]
})
export class ModalComponent extends ModalBaseComponent implements OnDestroy {
    static activeModals: {[id: string]: ModalBaseComponent} = {};

    @Input() set onOpenModal(id: string) {
        if (id) {
            this.openModal(id);
        }
    }

    @Input() set onCloseModal(id: string) {
        if (id) {
            this.closeModal(id);
        }
    }

    ngOnInit() {
        super.ngOnInit();
        this.addModal(this);
    }

    ngOnDestroy() {
        this.removeModal(this.id);
    }

    addModal(modal: ModalBaseComponent) {
        ModalComponent.activeModals[modal.id] = modal;
    }

    removeModal(id: string) {
        delete ModalComponent.activeModals[id];
    }

    openModal(id: string) {
        if (ModalComponent.activeModals[id]) {
            Object.keys(ModalComponent.activeModals).forEach(modalId => {
                if (modalId === id) {
                    ModalComponent.activeModals[modalId].open();
                } else {
                    this.closeModal(modalId, false);
                }
            });
        }
    }

    closeModal(id: string, emitEvent: boolean = true) {
        if (ModalComponent.activeModals[id]) {
            ModalComponent.activeModals[id].close(emitEvent);
        }
    }
}
