import {Directive, OnInit, ElementRef, Input} from '@angular/core';
import {computePosition, flip, offset, shift} from '@floating-ui/dom';
import {Placement} from '@floating-ui/core/src/types';

/**
 * Used @floating-ui/dom (flip()) For flip position of dropped element like drop-menu
 */
@Directive({
    selector: '[fusionReposition]',
    standalone: true
})
export class RepositionDirective implements OnInit {
    @Input('fusionReposition') referenceElementSelector: string;
    @Input() fusionRepositionOffset: number;
    @Input() fusionRepositionPlacement: Placement;

    private hostElement: HTMLElement = this.elRef.nativeElement;
    private referenceElement: HTMLElement;

    constructor(private elRef: ElementRef) {}

    ngOnInit() {
        this.referenceElement = document.querySelector(this.referenceElementSelector);
        this.calcForReposition();
    }

    private calcForReposition(): void {
        if (!!this.referenceElement) {
            try {
                computePosition(this.referenceElement, this.hostElement, {
                    placement: this.fusionRepositionPlacement,
                    middleware: [shift(), flip(), !!this.fusionRepositionOffset && offset(this.fusionRepositionOffset ?? 0)].filter(Boolean)
                }).then(({x, y}) => {
                    Object.assign(this.hostElement.style, {
                        left: `${x}px`,
                        top: `${y}px`
                    });
                });
            } catch (e) {
                console.error(e);
            }
        }
    }
}
