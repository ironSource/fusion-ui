import {Directive, ElementRef, EventEmitter, Input, Output, OnInit, AfterViewInit, OnDestroy, Renderer2} from '@angular/core';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {DISABLED_CSS_CLASS, DRAG_OVER_CSS_CLASS, LOADING_CSS_CLASS} from './file-drag-and-drop.config';

/**
 * Directive 'fusionFileDragAndDrop' for file selection by file select dialog
 * or by files drag and drop to the host area
 */
@Directive({
    selector: '[fusionFileDragAndDrop]',
    standalone: false
})
export class FileDragAndDropDirective implements OnInit, AfterViewInit, OnDestroy {
    /**
     * element ID for initial file selection dialog by click.
     * if not provided used click on host
     */
    @Input() buttonId: string;
    //
    /**
     * for disabling file selection
     */
    @Input() set disabled(value: boolean) {
        this._disabled = value;
        this.toggleCssClass(DISABLED_CSS_CLASS, this._disabled);
    }
    /**
     * for loading file selection
     */
    @Input() set loading(value: boolean) {
        this._loading = value;
        this.toggleCssClass(LOADING_CSS_CLASS, this._loading);
    }
    /**
     * input.file accept attribute (file select dialog only, not grad&&drop)
     */
    @Input() accept: string;
    /**
     * input.file multiple attribute (file select dialog only, not grad&&drop)
     */
    @Input() multiple = false;
    /**
     * output event emitter (files: FileList)
     */
    @Output() handleFiles = new EventEmitter();

    onDestroy$ = new Subject<void>();
    inputElement: any;

    private _disabled = false;
    private _loading = false;

    constructor(private _element: ElementRef, private _renderer: Renderer2) {}

    ngOnInit() {
        fromEvent(this._element.nativeElement, 'click').pipe(takeUntil(this.onDestroy$)).subscribe(this.onClick.bind(this));

        fromEvent(this._element.nativeElement, 'dragenter').pipe(takeUntil(this.onDestroy$)).subscribe(this.onDragEnter.bind(this));

        fromEvent(this._element.nativeElement, 'dragleave').pipe(takeUntil(this.onDestroy$)).subscribe(this.onDragLeave.bind(this));

        fromEvent(this._element.nativeElement, 'dragover').pipe(takeUntil(this.onDestroy$)).subscribe(this.onDragOver.bind(this));

        fromEvent(this._element.nativeElement, 'drop').pipe(takeUntil(this.onDestroy$)).subscribe(this.onDrop.bind(this));
    }

    ngAfterViewInit() {
        const parent = this._renderer.parentNode(this._element.nativeElement);
        this.inputElement = this._renderer.createElement('input');
        this._renderer.setAttribute(this.inputElement, 'type', 'file');
        this._renderer.setAttribute(this.inputElement, 'name', `input_file_${this.buttonId}`);
        this._renderer.setAttribute(this.inputElement, 'id', `input_file_${this.buttonId}`);
        if (this.multiple) {
            this._renderer.setAttribute(this.inputElement, 'multiple', '');
        }
        if (this.accept) {
            this._renderer.setAttribute(this.inputElement, 'accept', this.accept);
        }
        this._renderer.setStyle(this.inputElement, 'display', 'none');

        fromEvent(this.inputElement, 'change')
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((event: Event) => {
                if (this._disabled) {
                    return;
                }
                const target = event.target as HTMLInputElement;
                this.handleFiles.emit(target.files);
                setTimeout(() => {
                    // set input value to be empty to fix issue when user tries to upload same file again
                    target.value = '';
                }, 1500);
            });
        if (!parent.querySelector(`#input_file_${this.buttonId}`)) {
            this._renderer.appendChild(parent, this.inputElement);
        }
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    onDragEnter(event) {
        this.suppressDefaultEvent(event);
        if (this.isDraggable()) {
            this._renderer.addClass(this._element.nativeElement, DRAG_OVER_CSS_CLASS);
        }
    }

    onDragLeave(event) {
        this.suppressDefaultEvent(event);
        if (this.isDraggable() && !event.relatedTarget.closest('[fusionfiledraganddrop]')) {
            this._renderer.removeClass(this._element.nativeElement, DRAG_OVER_CSS_CLASS);
        }
    }

    onDragOver(event) {
        this.suppressDefaultEvent(event);
    }

    onDrop(event) {
        this.suppressDefaultEvent(event);
        if (this.isDraggable()) {
            this._renderer.removeClass(this._element.nativeElement, DRAG_OVER_CSS_CLASS);
            const files = event.dataTransfer.files;
            this.handleFiles.emit(files);
        }
    }

    onClick(event) {
        event.preventDefault();
        event.stopPropagation();

        if (
            !isNullOrUndefined(this.buttonId) &&
            (!this._disabled || !this._loading) &&
            (event.target.id === this.buttonId || event.target.closest('#' + this.buttonId))
        ) {
            this.inputElement.click();
        }
    }

    private suppressDefaultEvent(event: Event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    private isDraggable(): boolean {
        return !(this._disabled || this._loading);
    }

    private toggleCssClass(className: string, toggled: boolean) {
        if (toggled) {
            this._renderer.addClass(this._element.nativeElement, className);
        } else {
            this._renderer.removeClass(this._element.nativeElement, className);
        }
    }
}
