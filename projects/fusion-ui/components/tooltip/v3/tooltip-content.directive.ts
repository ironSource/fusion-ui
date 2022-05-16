import {ComponentRef, Directive, TemplateRef, ViewContainerRef} from '@angular/core';
import {TooltipContentComponent} from './tooltip.content.component';

@Directive({
    selector: `[fusionTooltipContent]`
})
export class TooltipContentDirective {
    private componentRef: ComponentRef<TooltipContentComponent>;

    constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}

    get tooltipComponentRef() {
        return this.componentRef;
    }

    create() {
        console.log('>>>>', this.viewContainerRef);
        if (!this.componentRef) {
            this.componentRef = this.viewContainerRef.createComponent(TooltipContentComponent);
            this.componentRef.instance.templateRef = this.templateRef;
        }
    }

    destroy() {
        this.componentRef.destroy();
        this.componentRef = null;
    }
}
