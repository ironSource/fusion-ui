import {ComponentRef, Directive, TemplateRef, ViewContainerRef} from '@angular/core';
import {TooltipContentV4Component} from './tooltip-content-v4.component';

@Directive({
    standalone: true,
    selector: `[fusionTooltipContent]`
})
export class TooltipContentV4Directive {
    private componentRef: ComponentRef<TooltipContentV4Component>;

    constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}

    get tooltipComponentRef() {
        return this.componentRef;
    }

    create() {
        if (!this.componentRef) {
            this.componentRef = this.viewContainerRef.createComponent(TooltipContentV4Component);
            this.componentRef.instance.templateRef = this.templateRef;
        }
    }

    destroy() {
        this.componentRef.destroy();
        this.componentRef = null;
    }
}
