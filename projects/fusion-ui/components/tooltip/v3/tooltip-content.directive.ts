import {ComponentRef, Directive, TemplateRef, ViewContainerRef} from '@angular/core';
import {TooltipComponent} from './tooltip.component';

@Directive({
    selector: `[fusionTooltipContent]`
})
export class TooltipContentDirective {
    private componentRef: ComponentRef<TooltipComponent>;

    constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}

    get tooltipComponentRef() {
        return this.componentRef;
    }

    create() {
        if (!this.componentRef) {
            this.componentRef = this.viewContainerRef.createComponent(TooltipComponent);
            this.componentRef.instance.templateRef = this.templateRef;
        }
    }

    destroy() {
        this.componentRef.destroy();
        this.componentRef = null;
    }
}
