import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    Inject,
    Input,
    OnDestroy,
    OnInit,
    Output,
    Renderer2,
    ViewChild
} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {DOCUMENT} from '@angular/common';
import {BehaviorSubject} from 'rxjs';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {WindowService} from '@ironsource/fusion-ui/services/window';
import {ModalConfiguration} from './modal.entities';
import {getDefaultCssUnit} from './modal-utils';

@Component({
    selector: 'fusion-modal',
    templateUrl: './modal.component.html',
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
export class ModalComponent implements OnDestroy, OnInit {
    static activeModals: {[id: string]: ModalComponent} = {};

    @Input() set isModalOpen(value: boolean) {
        if (value) {
            this.isClosed$.next(!value);
            this.onOpenModal(this.configuration.id);
        }
    }

    @Input() set configuration(config: ModalConfiguration) {
        this.setModalConfiguration(config);
    }

    get configuration(): ModalConfiguration {
        return this._configuration;
    }

    @Output() onOpen = new EventEmitter();
    @Output() onClose = new EventEmitter();

    @ViewChild('modalBody', {static: true}) modalBody: ElementRef;
    @ViewChild('modalHolder', {static: true}) modalHolder: ElementRef;

    private uid: string;
    private _configuration: ModalConfiguration;
    private isClosed$ = new BehaviorSubject<boolean>(false);

    constructor(
        @Inject(DOCUMENT) protected document: Document,
        private uidService: UniqueIdService,
        private elRef: ElementRef,
        private windowRef: WindowService,
        private logService: LogService,
        private renderer: Renderer2
    ) {
        this.uid = this.uidService.getUniqueId().toString();
    }

    ngOnInit() {
        if (!this.configuration.id) {
            this.logService.error(new Error('Modal component must have an id'));
            return;
        }
        if (this.configuration.defaultModalState === 'close') {
            this.close(false);
        }
        this.addModal(this);
    }

    ngOnDestroy() {
        this.removeModal(this.configuration.id);
    }

    open() {
        this.renderer.setStyle(this.elRef.nativeElement, 'display', 'block');
        this.onOpen.emit();
    }

    close(emitEvent = true, eventType: 'close' | 'submit' = 'close') {
        this.renderer.setStyle(this.elRef.nativeElement, 'display', 'none');
        if (emitEvent) {
            this.onClose.emit(eventType);
        }
    }

    addModal(modal: ModalComponent) {
        ModalComponent.activeModals[modal.configuration.id] = modal;
    }

    removeModal(id: string) {
        delete ModalComponent.activeModals[id];
    }

    onOpenModal(id: string) {
        if (ModalComponent.activeModals[id]) {
            Object.keys(ModalComponent.activeModals).forEach(modalId => {
                if (modalId === id) {
                    ModalComponent.activeModals[modalId].open();
                } else {
                    this.onCloseModal(modalId, false);
                }
            });
        }
    }

    onCloseModal(id: string, emitEvent: boolean = true) {
        if (ModalComponent.activeModals[id] && !ModalComponent.activeModals[id].isClosed$.getValue()) {
            ModalComponent.activeModals[id].close(emitEvent, 'close');
        }
    }

    private setModalConfiguration(config: ModalConfiguration) {
        this._configuration = {
            id: config.id,
            width: getDefaultCssUnit(config?.width),
            height: getDefaultCssUnit(config?.height),
            defaultModalState: config?.defaultModalState || 'open',
            hasFooter: config?.hasFooter || true,
            error: config?.error || '',
            headerText: config?.headerText || '',
            isHeaderBorder: config?.isHeaderBorder || true,
            submitButton: {
                submitButtonText: config?.submitButton?.submitButtonText || 'Save',
                submitButtonClass: config?.submitButton?.submitButtonClass || '',
                submitButtonDisabled: config?.submitButton?.submitButtonDisabled || false
            },
            cancelButton: {
                cancelButtonText: config?.cancelButton?.cancelButtonText || 'Cancel',
                cancelButtonHidden: config?.cancelButton?.cancelButtonHidden || false,
                cancelButtonClass: config?.cancelButton?.cancelButtonClass || 'third'
            }
        };
    }
}
