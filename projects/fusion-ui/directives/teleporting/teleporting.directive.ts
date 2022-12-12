import {Directive, EmbeddedViewRef, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[fusionTeleporting]',
    standalone: true
})
export class TeleportingDirective implements OnInit, OnDestroy {
    @Input('fusionTeleporting') selector: string;

    private host: Element;
    private viewRef: EmbeddedViewRef<any>;
    private addChildNodes: Element[] = [];

    constructor(private templateRef: TemplateRef<any>, private vcr: ViewContainerRef) {}

    ngOnInit() {
        this.viewRef = this.vcr.createEmbeddedView(this.templateRef);
        if (this.selector) {
            this.host = document.querySelector(this.selector);
            if (this.host) {
                this.viewRef.rootNodes.forEach(node => {
                    this.host.appendChild(node);
                    this.addChildNodes.push(node);
                });
            }
        }
    }

    ngOnDestroy() {
        if (this.host && this.addChildNodes.length) {
            this.addChildNodes.forEach(node => {
                this.host.removeChild(node);
            });
        }
        if (this.viewRef) {
            this.viewRef.destroy();
        }
    }
}
