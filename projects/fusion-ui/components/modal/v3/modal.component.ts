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
import {BehaviorSubject, Subject} from 'rxjs';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {WindowService} from '@ironsource/fusion-ui/services/window';
import {ModalConfiguration} from './modal.entities';
import {getDefaultCssUnit} from './modal-utils';
import {takeUntil} from 'rxjs/operators';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';

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
    @Input() submitPending = false; // state for submit pending

    @Input() set isModalOpen(value: boolean) {
        if (!isNullOrUndefined(value)) {
            this.isClosed$.next(!value);
            this.modalOpenListener$.next(value);
        }
    }

    @Input() set configuration(config: ModalConfiguration) {
        this.setModalConfiguration(config);
    }

    get configuration(): ModalConfiguration {
        return this._configuration.getValue();
    }

    @Output() open = new EventEmitter();
    @Output() close = new EventEmitter();

    @ViewChild('modalBody', {static: true}) modalBody: ElementRef;
    @ViewChild('modalHolder', {static: true}) modalHolder: ElementRef;

    private uid: string;
    private _configuration = new BehaviorSubject<ModalConfiguration>(null);
    private isClosed$ = new BehaviorSubject<boolean>(false);
    private modalOpenListener$ = new BehaviorSubject<boolean>(false);
    private onDestroy$ = new Subject<void>();

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
            this.onClose(false);
        }

        this.addModal(this);
        this.initListeners();
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
        this.removeModal(this.configuration.id);
    }

    onOpen() {
        this.renderer.setStyle(this.elRef.nativeElement, 'display', 'block');
        this.open.emit();
    }

    onClose(emitEvent = true, eventType: 'close' | 'submit' = 'close') {
        if (eventType === 'close') {
            this.renderer.setStyle(this.elRef.nativeElement, 'display', 'none');
        }
        if (emitEvent) {
            this.close.emit(eventType);
        }
    }

    private initListeners() {
        this.modalOpenListener$
            .asObservable()
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(val => {
                if (val) {
                    this.onModalOpened(this.configuration.id);
                }
            });

        this.isClosed$
            .asObservable()
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((val: boolean) => {
                if (val) {
                    this.onClose(false);
                }
            });
    }

    private addModal(modal: ModalComponent) {
        ModalComponent.activeModals[modal.configuration.id] = modal;
    }

    private removeModal(id: string) {
        delete ModalComponent.activeModals[id];
    }

    private onModalOpened(id: string) {
        if (ModalComponent.activeModals[id]) {
            Object.keys(ModalComponent.activeModals).forEach(modalId => {
                if (modalId === id) {
                    ModalComponent.activeModals[modalId].onOpen();
                } else {
                    this.onModalClosed(modalId, false);
                }
            });
        }
    }

    private onModalClosed(id: string, emitEvent: boolean = true) {
        if (ModalComponent.activeModals[id] && !ModalComponent.activeModals[id].isClosed$.getValue()) {
            ModalComponent.activeModals[id].onClose(emitEvent, 'close');
        }
    }

    private setModalConfiguration(config: ModalConfiguration) {
        this._configuration.next({
            id: config?.id || this.uid,
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
                cancelButtonClass: config?.cancelButton?.cancelButtonClass || 'transparent third'
            }
        });
    }
}
