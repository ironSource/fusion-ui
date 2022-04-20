import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    OnDestroy,
    OnInit,
    Output,
    Renderer2,
    ViewChild
} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {ModalService} from './modal.base.service';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {WindowService} from '@ironsource/fusion-ui/services/window';

@Directive()
export abstract class ModalBaseComponent implements OnInit, OnDestroy {
    @Input() id: string;
    @Input() footer = true;
    @Input() loading = false; // state for content loading
    @Input() waiting = false; // state for on click primary button waiter
    @Input() set width(value: string) {
        if (value) {
            this._width = ModalBaseComponent.setDefaultCssUnit(value);
        }
    }

    get width(): string {
        return this._width;
    }

    @Input() set height(value: string) {
        if (value) {
            this._height = ModalBaseComponent.setDefaultCssUnit(value);
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

    private bodyEl: any;
    protected uid: string;

    private _width: string;
    private _height: string;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private uidService: UniqueIdService,
        private modalService: ModalService,
        private elRef: ElementRef,
        private windowRef: WindowService,
        private logService: LogService,
        private renderer: Renderer2
    ) {
        this.uid = this.uidService.getUniqueId().toString();
    }

    ngOnInit() {
        if (!this.id) {
            this.logService.error(new Error('Modal component must have an id'));
            return;
        }
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
        if (this.isClosed) {
            this.close(false);
        }
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

    private static setDefaultCssUnit(value: string): string {
        return /^\d+$/.test(value) ? `${value}px` : value;
    }

    // todo: add parameter for possibility close on outside click and escape press

    /**
     * close modal on background click
     */
    @HostListener('click', ['$event.target'])
    onClick(target: any) {
        // if (!$(target).closest('.modal-body').length) {
        //     this.close();
        // }
    }

    /**
     * close modal on escape keyboard click
     */
    @HostListener('document:keyup', ['$event.keyCode'])
    onKeyUp(keyCode: number) {
        // if (keyCode === 27) { // ESCAPE
        //     this.close();
        // }
    }
}
