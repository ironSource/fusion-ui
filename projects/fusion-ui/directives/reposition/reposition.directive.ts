import {AfterViewInit, Directive, ElementRef, Input, OnInit} from '@angular/core';
import {IShiftPosition, TooltipPosition} from '@ironsource/fusion-ui/components/tooltip/common/base';
import {RepositionOffset} from './reposition.entities';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';

/**
 * Used @floating-ui/dom (flip()) For flip position of dropped element like drop-menu
 */
@Directive({
    selector: '[fusionReposition]',
    standalone: true
})
export class RepositionDirective implements OnInit, AfterViewInit {
    @Input('fusionReposition') referenceElementSelector: string;
    @Input() fusionRepositionOffset: RepositionOffset;
    @Input() fusionRepositionPlacement: TooltipPosition = TooltipPosition.Bottom;

    private hostElement: HTMLElement = this.elRef.nativeElement;
    private referenceElement: HTMLElement;
    private clientHeight = document.body.clientHeight;

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
            shiftPosition = this.applyOffset(shiftPosition);

            shiftPosition = this.checkForFlip(this.fusionRepositionPlacement, shiftPosition, rectHost, rectReference);

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
                position = {left: commonX, top: refRect.y - hostRect.height};
                break;
            case TooltipPosition.TopRight:
                position = {left: refRect.x - hostRect.width + refRect.width, top: refRect.y - hostRect.height};
                break;
            case TooltipPosition.TopLeft:
                position = {left: refRect.x, top: refRect.y - hostRect.height};
                break;
            case TooltipPosition.Bottom:
                position = {left: commonX, top: refRect.y + refRect.height};
                break;
            case TooltipPosition.BottomRight:
                position = {left: refRect.x - hostRect.width + refRect.width, top: refRect.y + refRect.height};
                break;
            case TooltipPosition.BottomLeft:
                position = {left: refRect.x, top: refRect.y + refRect.height - hostRect.height};
                break;
            case TooltipPosition.Right:
                position = {left: refRect.x + refRect.width, top: commonY};
                break;
            case TooltipPosition.Left:
                position = {left: refRect.x - hostRect.width, top: commonY};
                break;
        }
        return position;
    }

    private applyOffset(position: IShiftPosition): IShiftPosition {
        if (!isNullOrUndefined(this.fusionRepositionOffset?.y)) {
            position.top = position.top + this.fusionRepositionOffset.y;
        }
        if (!isNullOrUndefined(this.fusionRepositionOffset?.x)) {
            position.left = position.left + this.fusionRepositionOffset.x;
        }
        return position;
    }

    private checkForFlip(pos: TooltipPosition, position: IShiftPosition, hostRect: DOMRect, rectReference: DOMRect): IShiftPosition {
        switch (pos) {
            case TooltipPosition.Bottom:
            case TooltipPosition.BottomLeft:
            case TooltipPosition.BottomRight:
                if (this.clientHeight - (position.top + hostRect.height) < 0) {
                    pos =
                        pos === TooltipPosition.Bottom
                            ? TooltipPosition.Top
                            : pos === TooltipPosition.BottomLeft
                            ? TooltipPosition.TopLeft
                            : TooltipPosition.TopRight;
                    position = this.calcPosition(pos, hostRect, rectReference);
                }
                break;
        }

        return position;
    }
}
