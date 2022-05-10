import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, TemplateRef} from '@angular/core';
import {TooltipComponentStyleConfiguration, TooltipPosition} from '@ironsource/fusion-ui/components/tooltip/common/base';

@Component({
    selector: 'fusion-tooltip-content',
    template: `<div class="fu-tooltip-component" [ngClass]="'fu-tooltip-' + position">
        <ng-container *ngIf="!tooltipInnerText" [ngTemplateOutlet]="templateRef"></ng-container>
        <span *ngIf="tooltipInnerText">{{ tooltipInnerText }}</span>
    </div>`,
    styleUrls: ['./tooltip.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipContentComponent implements AfterViewInit {
    tooltipInnerText: string;
    position: string;

    @Input() templateRef: TemplateRef<any>;

    @Input() set tooltipTextContent(text: string) {
        this.tooltipInnerText = text;
        console.log('text tooltip content: ', this.tooltipInnerText);
    }

    @Input() set tooltipPositionClass(pos: TooltipPosition) {
        this.position = TooltipPosition[pos].toLowerCase();
        console.log('position tooltip content: ', this.position);
    }

    @Input() set tooltipStyleConfiguration(config: TooltipComponentStyleConfiguration) {
        if (config) {
            this.setTooltipStyle(config);
        }
    }

    // @ViewChild('tooltipContent') contentHolder: ElementRef;

    constructor(public elementRef: ElementRef, private renderer: Renderer2) {}

    ngAfterViewInit() {
        this.setTooltipContent();
    }

    private setTooltipContent() {
        // if (this.tooltipInnerText) {
        //     this.renderer.setProperty(this.contentHolder.nativeElement, 'innerText', this.tooltipInnerText);
        // }
        // else {
        //     console.log(this.templateRef);
        //     this.renderer.appendChild(this.contentHolder.nativeElement, this.templateRef.elementRef.nativeElement);
        // }
    }

    private setTooltipStyle(propertyValue: {[key: string]: string}) {
        Object.keys(propertyValue).forEach(val => {
            if (val === 'backgroundColor') {
                this.elementRef.nativeElement.style.setProperty('--fu-tooltip-background-color', propertyValue[val]);
            } else {
                this.renderer.setStyle(this.elementRef.nativeElement, val, propertyValue[val]);
            }
        });
    }
}
