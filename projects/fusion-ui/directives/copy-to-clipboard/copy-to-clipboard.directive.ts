import {Directive, ElementRef, EventEmitter, HostListener, Inject, Input, Output, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {isFunction} from '@ironsource/fusion-ui/utils';

@Directive({
    selector: '[fusionCopyToClipboard]',
    standalone: false
})
export class CopyToClipboardDirective {
    @Input() fusionCopyToClipboard?: (elRef?: ElementRef) => string;
    @Output() copied = new EventEmitter();
    private _document?: Document;

    constructor(
        @Inject(DOCUMENT) private document: any, // todo: Document (open issue https://github.com/angular/angular/issues/20351)
        private renderer: Renderer2,
        private elementRef: ElementRef
    ) {
        this._document = document as Document;
    }

    @HostListener('click', ['$event'])
    onClick($event) {
        $event.preventDefault();
        $event.stopPropagation();
        const textToCopy = isFunction(this.fusionCopyToClipboard)
            ? this.fusionCopyToClipboard(this.elementRef)
            : this.elementRef.nativeElement.innerHTML;
        this.copyText(textToCopy);

        this.copied.emit();
    }

    private copyText(textToCopy: string): void {
        const elem = this.renderer.createElement('input');
        this.renderer.setAttribute(elem, 'type', 'text');
        this.renderer.setAttribute(elem, 'value', textToCopy);
        this.renderer.appendChild(this._document.body, elem);
        elem.focus();
        elem.select();
        this._document.execCommand('Copy');
        this.renderer.removeChild(this._document.body, elem);
    }
}
