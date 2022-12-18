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
        this.clearAttachedNodes();
    }

    private clearAttachedNodes() {
        if (!!this.host && this.host.hasChildNodes() && this.addChildNodes.length) {
            this.addChildNodes.forEach(node => {
                try {
                    this.host.removeChild(node);
                } catch (e) {
                    console.warn(`teleported : ${e}`);
                }
            });
        }
        if (this.viewRef) {
            this.viewRef.destroy();
        }
    }
}