import {ChangeDetectionStrategy, Component, ElementRef, forwardRef, Inject, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ModalBaseComponent, ModalService} from '@ironsource/fusion-ui/components/modal/common/base';
import {DOCUMENT} from '@angular/common';
import {LogService, UniqueIdService, WindowService} from '@ironsource/fusion-ui/services';

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

    ngOnInit() {
        super.ngOnInit();
        this.addModal(this);
    }

    ngOnDestroy() {
        this.removeModal(this.id);
    }

    private addModal(modal: ModalBaseComponent) {
        ModalComponent.activeModals[modal.id] = modal;
    }

    private removeModal(id: string) {
        delete ModalComponent.activeModals[id];
    }
}
