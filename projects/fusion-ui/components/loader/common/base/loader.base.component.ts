import {AfterViewInit, Directive, ElementRef, HostBinding, Inject, Input, Optional, Renderer2, ViewChild} from '@angular/core';
import {LOADER_COMPONENT_TYPE_TOKEN} from './loader-token';
import {LoaderColor, LoaderPosition, LoaderSize} from './loader.types';
import {IconData} from '@ironsource/fusion-ui/components/icon/v1';

@Directive()
export abstract class LoaderBaseComponent implements AfterViewInit {
    /** @internal */
    @ViewChild('customLoader', {read: ElementRef}) customLoader: ElementRef;

    /** @internal */
    @Input() height: number; // has position static, with min-height
    /** @internal */
    @Input() status: boolean;
    /** @internal */
    @Input() text: string;
    /** @internal */
    @Input() position: LoaderPosition = 'center';
    /** @internal */
    @Input() size: LoaderSize = 'large';
    /** @internal */
    @Input() color: LoaderColor = 'grey';
    /** @internal */
    @HostBinding('style.top.px') top: number; // distance from top

    /** @internal */
    public get loaderPosition() {
        return `position-${this.position}`;
    }
    /** @internal */
    public loaderIconName: IconData;

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
        /** @internal */
        @Optional() @Inject(LOADER_COMPONENT_TYPE_TOKEN) public componentType
    ) {
        this.size = this.size || 'large';
    }

    ngAfterViewInit() {
        const loaderEl = this.elementRef.nativeElement.querySelector('.is-loader');
        if (this.height && !!loaderEl) {
            this.renderer.setStyle(loaderEl, 'position', 'static');
            this.renderer.setStyle(loaderEl, 'min-height', this.height + 'px');
        }

        this.addCustomLoaderSizeClass();
    }

    private addCustomLoaderSizeClass() {
        if (this.customLoader?.nativeElement?.previousSibling) {
            this.renderer.addClass(this.customLoader.nativeElement.previousSibling, this.size);
        }
    }
}
