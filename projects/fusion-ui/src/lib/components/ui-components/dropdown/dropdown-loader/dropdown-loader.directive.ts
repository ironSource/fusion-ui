import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    EmbeddedViewRef,
    HostBinding,
    Input,
    OnChanges,
    OnInit,
    Renderer2,
    ViewContainerRef
} from '@angular/core';
import {DropdownLoaderComponent} from './dropdown-loader.component';

@Directive({
    selector: '[fusionDropdownLoader]'
})
export class DropdownLoaderDirective implements OnChanges {
    @HostBinding('class.is-hidden') isOptionHidden = false;
    @Input() fusionDropdownLoader: boolean;
    private loaderComponentRef: ComponentRef<DropdownLoaderComponent>;

    constructor(
        public viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        private renderer: Renderer2
    ) {}

    ngOnChanges() {
        this.isOptionHidden = !this.fusionDropdownLoader;
        this.loadContent();
    }

    loadContent() {
        if (!this.isOptionHidden) {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DropdownLoaderComponent);
            this.loaderComponentRef = this.viewContainerRef.createComponent(componentFactory);
            const loaderViewRef = this.loaderComponentRef.hostView as EmbeddedViewRef<any>;
            this.renderer.appendChild(this.viewContainerRef.element.nativeElement, loaderViewRef.rootNodes[0]);
        } else {
            this.viewContainerRef.element.nativeElement.innerHTML = '';
        }
    }
}
