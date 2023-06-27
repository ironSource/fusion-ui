import {ComponentRef, Directive, TemplateRef, ViewContainerRef} from '@angular/core';
import {TooltipContentComponent} from './tooltip.content.component';
import {TooltipComponentStyleConfiguration} from '@ironsource/fusion-ui/components/tooltip/common/base';

@Directive({
    selector: `[fusionTooltipContent]`
})
export class TooltipContentDirective {
    private componentRef: ComponentRef<TooltipContentComponent>;

    constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}

    get tooltipComponentRef() {
        return this.componentRef;
    }

    create(theme?: string) {
        if (!this.componentRef) {
            this.componentRef = this.viewContainerRef.createComponent(TooltipContentComponent);
            this.componentRef.instance.templateRef = this.templateRef;
            if (theme) {
                this.componentRef.instance.tooltipStyleConfiguration = {themeClass: theme} as TooltipComponentStyleConfiguration;
            }
        }
    }

    destroy() {
        this.componentRef.destroy();
        this.componentRef = null;
    }
}
