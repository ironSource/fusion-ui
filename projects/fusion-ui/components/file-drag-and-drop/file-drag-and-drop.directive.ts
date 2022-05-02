import {Directive, ElementRef, EventEmitter, Input, Output, OnInit, AfterViewInit, OnDestroy, Renderer2} from '@angular/core';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

/**
 * Directive 'fusionFileDragAndDrop' for file selection by file select dialog
 * or by files drag and drop to the host area
 */
@Directive({
    selector: '[fusionFileDragAndDrop]'
})
export class FileDragAndDropDirective implements OnInit, AfterViewInit, OnDestroy {
    /**
     * element ID for initial file selection dialog by click.
     * if not provided used click on host
     */
    @Input() elementIdForClick: string;
    //
    /**
     * for disabling file selection
     */
    @Input() set fileDragAndDropDisabled(value: boolean) {
        this.isDisabled = value;
    }
    /**
     * CSS class name will set to the host element on drag over state
     */
    @Input() set dragOverCSSClass(value: string) {
        this.dragOverCSS = value;
    }
    /**
     * input.file accept attribute (file select dialog only, not grad&&drop)
     */
    @Input() acceptFiles: string;
    /**
     * input.file multiple attribute (file select dialog only, not grad&&drop)
     */
    @Input() multipleFiles = false;
    /**
     * output event emitter (files: FileList)
     */
    @Output() onHandleFileDragAndDrop = new EventEmitter();

    onDestroy$ = new Subject<void>();
    inputElement: any;

    private isDisabled = false;
    private dragOverCSS = 'fu-drag-over';

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
        this._renderer.setAttribute(this.inputElement, 'name', `input_file_${this.elementIdForClick}`);
        this._renderer.setAttribute(this.inputElement, 'id', `input_file_${this.elementIdForClick}`);
        if (this.multipleFiles) {
            this._renderer.setAttribute(this.inputElement, 'multiple', '');
        }
        if (this.acceptFiles) {
            this._renderer.setAttribute(this.inputElement, 'accept', this.acceptFiles);
        }
        this._renderer.setStyle(this.inputElement, 'display', 'none');
        this._renderer.listen(this.inputElement, 'change', event => {
            if (this.isDisabled) {
                return;
            }
            this.onHandleFileDragAndDrop.emit(event.target.files);
            setTimeout(() => {
                // set input value to be empty to fix issue when user tries to upload same file again
                event.target.value = '';
            }, 1500);
        });
        this._renderer.appendChild(parent, this.inputElement);
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    onDragEnter(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.isDisabled) {
            return;
        }
        this._renderer.addClass(this._element.nativeElement, this.dragOverCSS);
    }

    onDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.isDisabled) {
            return;
        }
        this._renderer.removeClass(this._element.nativeElement, this.dragOverCSS);
    }

    onDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    onDrop(event) {
        event.preventDefault();
        event.stopPropagation();

        if (this.isDisabled) {
            return;
        }

        this._renderer.removeClass(this._element.nativeElement, this.dragOverCSS);
        const files = event.dataTransfer.files;
        this.onHandleFileDragAndDrop.emit(files);
    }

    onClick(event) {
        event.preventDefault();
        event.stopPropagation();

        if (
            !this.isDisabled &&
            (event.target.id === this.elementIdForClick ||
                (event.target.offsetParent && event.target.offsetParent.id === this.elementIdForClick) ||
                isNullOrUndefined(this.elementIdForClick))
        ) {
            this.inputElement.click();
        }
    }
}
