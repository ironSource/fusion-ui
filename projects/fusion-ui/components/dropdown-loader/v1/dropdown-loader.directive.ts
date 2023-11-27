import {ComponentRef, Directive, EmbeddedViewRef, HostBinding, inject, Input, OnChanges, Renderer2, ViewContainerRef} from '@angular/core';
import {DropdownLoaderComponent} from './dropdown-loader.component';

@Directive({
    selector: '[fusionDropdownLoader]'
})
export class DropdownLoaderDirective implements OnChanges {
    @HostBinding('class.is-hidden') isOptionHidden = false;
    @Input() fusionDropdownLoader: boolean;
    private loaderComponentRef: ComponentRef<DropdownLoaderComponent>;
    viewContainerRef = inject(ViewContainerRef);

    constructor(private renderer: Renderer2) {}

    ngOnChanges() {
        this.isOptionHidden = !this.fusionDropdownLoader;
        this.loadContent();
    }

    loadContent() {
        if (!this.isOptionHidden) {
            this.viewContainerRef.clear();
            this.loaderComponentRef = this.viewContainerRef.createComponent(DropdownLoaderComponent);
            const loaderViewRef = this.loaderComponentRef.hostView as EmbeddedViewRef<any>;
            this.renderer.appendChild(this.viewContainerRef.element.nativeElement, loaderViewRef.rootNodes[0]);
        } else {
            this.viewContainerRef.clear();
        }
    }
}
