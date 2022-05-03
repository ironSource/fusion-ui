import {ChangeDetectionStrategy, Component, ElementRef, forwardRef, Inject, OnDestroy, Renderer2} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ModalBaseComponent, ModalService} from '@ironsource/fusion-ui/components/modal/common/base';
import {DOCUMENT} from '@angular/common';
import {WindowService} from '@ironsource/fusion-ui/services/window';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {LogService} from '@ironsource/fusion-ui/services/log';

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
    constructor(
        @Inject(DOCUMENT) protected document: Document,
        protected uidService: UniqueIdService,
        protected elRef: ElementRef,
        protected windowRef: WindowService,
        protected logService: LogService,
        protected renderer: Renderer2,
        private modalService: ModalService
    ) {
        super(document, uidService, elRef, windowRef, logService, renderer);
    }

    ngOnInit() {
        super.ngOnInit();
        this.modalService.add(this);
    }

    ngOnDestroy() {
        this.modalService.remove(this.id);
    }
}
