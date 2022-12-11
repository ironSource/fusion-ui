import {Directive, OnInit, ElementRef, Input} from '@angular/core';

/**
 * Used for dropped elements.  Check position, if has ho place to drop down,
 * Dropped top.
 */
@Directive({
    selector: '[fusionReposition]',
    standalone: true
})
export class RepositionDirective implements OnInit {
    /**
     * Parent element selector for this element reposition
     */
    @Input('fusionReposition') relativeElementSelector: string;

    private hostElement: HTMLElement = this.elRef.nativeElement;
    private parentElement: HTMLElement;

    constructor(private elRef: ElementRef) {}

    ngOnInit() {
        this.parentElement = !!this.relativeElementSelector
            ? document.querySelector(this.relativeElementSelector)
            : this.getParentWithOverflow(this.hostElement);

        this.calcForReposition();
    }

    private calcForReposition(): void {
        if (!!this.parentElement) {
            const parentOverflowRect = this.parentElement.getBoundingClientRect();
            const hostHolderRect = this.hostElement.getBoundingClientRect();

            console.log('parent: ', parentOverflowRect);
            console.log('host: ', hostHolderRect);
        }
    }

    /**
     * Find first parent element with style overflow in 'auto', 'hidden', 'scroll'
     * - childEl
     */
    private getParentWithOverflow(childEl: HTMLElement): HTMLElement {
        const parent = childEl.parentElement;
        let retVal = null;
        if (parent) {
            const parentOverflow = window.getComputedStyle(parent).overflow;
            retVal = ['auto', 'hidden', 'scroll'].includes(parentOverflow) ? parent : this.getParentWithOverflow(parent);
        }
        return retVal;
    }
}
