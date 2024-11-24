import {ComponentRef, Directive, TemplateRef, ViewContainerRef} from '@angular/core';
import {TooltipContentComponent} from './tooltip.content.component';

@Directive({
    selector: `[fusionTooltipContent]`,
    standalone: false
})
export class TooltipContentDirective {
    private componentRef: ComponentRef<TooltipContentComponent>;

    constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}

    get tooltipComponentRef() {
        return this.componentRef;
    }

    create() {
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
