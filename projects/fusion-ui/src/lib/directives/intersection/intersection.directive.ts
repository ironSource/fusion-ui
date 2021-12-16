import {Directive, AfterViewInit, OnInit, OnDestroy, ElementRef, EventEmitter, Output, Input} from '@angular/core';
import {WindowService} from '../../services/window/window.service';
import {IntersectionOptions} from './intersection';

@Directive({
    selector: '[fusionIntersection]'
})
export class IntersectionDirective implements OnInit, OnDestroy, AfterViewInit {
    @Input() set intersectionOptions(value: IntersectionOptions) {
        this.options = value || {};
        this.disconnect();
        this.observe();
    }

    @Output() fusionIntersection = new EventEmitter<IntersectionObserverEntry>();

    private isSupported: boolean;
    private isAfterViewInit = false;
    private observer: IntersectionObserver | null;
    private options: IntersectionOptions;

    private observerCallback = ([entry]: [IntersectionObserverEntry]): void => {
        this.fusionIntersection.emit(entry);
    };

    constructor(private el: ElementRef, private windowService: WindowService) {}

    ngOnInit(): void {
        this.isSupported = typeof (this.windowService.nativeWindow as any).IntersectionObserver === 'function';
    }

    ngOnDestroy(): void {
        this.disconnect();
    }

    ngAfterViewInit(): void {
        this.isAfterViewInit = true;
        this.observe();
    }

    private observe(): void {
        if (this.isSupported && this.isAfterViewInit) {
            const options = this.createObserverOptions();
            this.observer = new IntersectionObserver(this.observerCallback, options);
            this.observer.observe(this.el.nativeElement);
        }
    }

    private disconnect(): void {
        if (this.isSupported && this.isAfterViewInit && this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
    }

    private createObserverOptions(): IntersectionObserverInit {
        const options: IntersectionObserverInit = {
            rootMargin: this.createRootMarginValue()
        };
        const root = this.getRoot();
        if (root) {
            options.root = root;
        }
        if (this.options && this.options.threshold) {
            options.threshold = this.options.threshold;
        }
        return options;
    }

    private createRootMarginValue(): string {
        if (!this.options || !this.options.rootMargin) {
            return '';
        }
        return [this.options.rootMargin.top, this.options.rootMargin.left, this.options.rootMargin.bottom, this.options.rootMargin.right]
            .map(value => {
                if (typeof value === 'number') {
                    return value + 'px';
                }
                return value || '0px';
            })
            .join(' ');
    }

    private getRoot(): HTMLElement {
        if (!this.options) {
            return null;
        }
        return typeof this.options.root === 'string'
            ? this.windowService.nativeWindow.document.querySelector(this.options.root as string)
            : this.options.root instanceof HTMLElement
            ? (this.options.root as HTMLElement)
            : null;
    }
}
