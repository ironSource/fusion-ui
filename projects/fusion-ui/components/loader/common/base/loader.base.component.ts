import {AfterViewInit, Directive, ElementRef, HostBinding, Inject, Input, Optional, Renderer2, ViewChild} from '@angular/core';
import {LOADER_COMPONENT_TYPE_TOKEN} from './loader-token';
import {LoaderColor, LoaderPosition, LoaderSize} from './loader.types';
import {IconData} from '@ironsource/fusion-ui/components/icon/v1';

@Directive()
export abstract class LoaderBaseComponent implements AfterViewInit {
    @ViewChild('customLoader', {read: ElementRef}) customLoader: ElementRef;

    @Input() height: number; // has position static, with min-height
    @Input() status: boolean;
    @Input() text: string;
    @Input() position: LoaderPosition = 'center';
    @Input() size: LoaderSize = 'large';
    @Input() color: LoaderColor = 'grey';
    @HostBinding('style.top.px') top: number; // distance from top

    public get loaderPosition() {
        return `position-${this.position}`;
    }
    public loaderIconName: IconData;

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
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
