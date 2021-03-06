import {Directive, ElementRef, EventEmitter, Inject, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {WindowService} from '@ironsource/fusion-ui/services/window';
import {getDefaultCssUnit} from './modal-utils';
import {ModalService} from './modal.base.service';

@Directive()
export abstract class ModalBaseComponent implements OnInit, OnDestroy {
    @Input() id: string;
    @Input() footer = true;
    @Input() loading = false; // state for content loading
    @Input() waiting = false; // state for on click primary button waiter
    @Input() set width(value: string) {
        if (value) {
            this._width = getDefaultCssUnit(value);
        }
    }

    get width(): string {
        return this._width;
    }

    @Input() set height(value: string) {
        if (value) {
            this._height = getDefaultCssUnit(value);
        }
    }

    get height(): string {
        return this._height;
    }

    @Input() padding: string;
    @Input() error = '';
    @Input() headerText = '';
    @Input() noHeaderBorder = false;
    @Input() isClosed = false;
    @Input() saveButtonText = 'Save';
    @Input() saveButtonDisabled = false;
    @Input() cancelButtonText = 'Cancel';
    @Input() cancelButtonHidden: boolean;

    // eslint-disable-next-line
    @Output() onSave = new EventEmitter();
    // eslint-disable-next-line
    @Output() onOpen = new EventEmitter();
    // eslint-disable-next-line
    @Output() onClose = new EventEmitter();

    @ViewChild('modalBody', {static: true}) modalBody: ElementRef;
    @ViewChild('modalHolder', {static: true}) modalHolder: ElementRef;

    protected uid: string;
    private _width: string;
    private _height: string;

    constructor(
        @Inject(DOCUMENT) protected document: Document,
        protected uidService: UniqueIdService,
        protected elRef: ElementRef,
        protected windowRef: WindowService,
        protected logService: LogService,
        private modalService: ModalService,
        protected renderer: Renderer2
    ) {
        this.uid = this.uidService.getUniqueId().toString();
    }

    ngOnInit() {
        if (!this.id) {
            this.logService.error(new Error('Modal component must have an id'));
            return;
        }
        if (this.isClosed) {
            this.close(false);
        }
        this.modalService.add(this);
    }

    ngOnDestroy() {
        this.modalService.remove(this.id);
    }

    open() {
        this.renderer.setStyle(this.elRef.nativeElement, 'display', 'block');
        this.onOpen.emit();
    }

    close(emitEvent = true) {
        this.renderer.setStyle(this.elRef.nativeElement, 'display', 'none');
        if (emitEvent) {
            this.onClose.emit();
        }
    }

    save(value) {
        this.onSave.emit(value);
    }
}
