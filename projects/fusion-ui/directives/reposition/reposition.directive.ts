import {AfterViewInit, Directive, ElementRef, Input, OnInit} from '@angular/core';
import {IShiftPosition, TooltipPosition} from '@ironsource/fusion-ui/components/tooltip/common/base';

/**
 * Used @floating-ui/dom (flip()) For flip position of dropped element like drop-menu
 */
@Directive({
    selector: '[fusionReposition]',
    standalone: true
})
export class RepositionDirective implements OnInit, AfterViewInit {
    @Input('fusionReposition') referenceElementSelector: string;
    @Input() fusionRepositionPlacement: TooltipPosition = TooltipPosition.Bottom;

    private hostElement: HTMLElement = this.elRef.nativeElement;
    private referenceElement: HTMLElement;

    constructor(private elRef: ElementRef) {}

    ngOnInit() {
        this.referenceElement = document.querySelector(this.referenceElementSelector);
    }

    ngAfterViewInit() {
        this.calcForReposition();
    }

    private calcForReposition(): void {
        if (!!this.referenceElement) {
            let shiftPosition: IShiftPosition;
            const rectReference = this.referenceElement.getBoundingClientRect();
            const rectHost = this.hostElement.getBoundingClientRect();

            shiftPosition = this.calcPosition(this.fusionRepositionPlacement, rectHost, rectReference);

            Object.assign(this.hostElement.style, {
                left: `${shiftPosition.left}px`,
                top: `${shiftPosition.top}px`
            });
        }
    }

    private calcPosition(pos: TooltipPosition, hostRect: DOMRect, refRect: DOMRect): IShiftPosition {
        const commonX = refRect.x + refRect.width / 2 - hostRect.width / 2;
        const commonY = refRect.y + refRect.height / 2 - hostRect.height / 2;
        let position: IShiftPosition = {top: refRect.y, left: refRect.x};

        switch (pos) {
            case TooltipPosition.Top:
                position = {left: commonX, top: refRect.y - refRect.height / 2};
                break;
            case TooltipPosition.TopRight:
                position = {left: refRect.x - hostRect.width + refRect.width / 2, top: refRect.y - refRect.height / 2};
                break;
            case TooltipPosition.TopLeft:
                position = {left: refRect.x - refRect.width / 2, top: refRect.y - refRect.height / 2};
                break;
            case TooltipPosition.Bottom:
                position = {left: commonX, top: refRect.y + refRect.height / 2};
                break;
            case TooltipPosition.BottomRight:
                position = {left: refRect.x - hostRect.width + refRect.width / 2, top: refRect.y + refRect.height / 2};
                break;
            case TooltipPosition.BottomLeft:
                position = {left: refRect.x - refRect.width / 2, top: refRect.y + refRect.height / 2};
                break;
            case TooltipPosition.Right:
                position = {left: refRect.x + refRect.width - refRect.width / 2, top: commonY};
                break;
            case TooltipPosition.Left:
                position = {left: refRect.x - hostRect.width - refRect.width / 2, top: commonY};
                break;
        }
        return position;
    }
}
