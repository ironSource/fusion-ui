import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

/** @dynamic */
@Injectable({
    providedIn: 'root'
})
export class ScrollToService {
    constructor(@Inject(DOCUMENT) private document: Document) {}

    /**
     * Scroll to element
     */
    public scrollTo({
        element,
        duration = 500,
        offset = 0,
        mainView = 'body'
    }: {
        element: string | HTMLElement;
        duration: number;
        offset: number;
        mainView: string;
    }) {
        const el = this._getElem(element);
        if (!el) {
            throw new Error(`Element [${element}] for isScrollTo not found`);
        }
        this._scrollToElement(el as HTMLElement, duration, offset, mainView);
    }

    /**
     * Get HTMLElement
     */
    private _getElem(element: string | HTMLElement) {
        return typeof element === 'string'
            ? this.document.querySelector(element as string)
            : element instanceof HTMLElement
            ? element
            : null;
    }

    /**
     * Do scroll to the element
     */
    private _scrollToElement(el: HTMLElement, duration: number, offset: number, mainView: string) {
        if (el) {
            // just suppress lint warning
            offset = offset;
            // todo: temp code, without animation
            el.scrollIntoView();

            // if(!el.offsetTop){
            if (offset) {
                // todo: need to fix this 'hardcoded' selection
                this.document.querySelector(mainView).scrollTop -= offset;
            }
            // }
            // --------------------------------------------------
            // this._doScrolling(el.offsetTop + offset, duration);
        } else {
            throw new Error('Element for isScrollTo not found');
        }
    }

    // todo: check scroll with animation,  window.scrollTo do not work ;((

    /*    private _doScrolling(elementY, duration) {
   const startingY = window.pageYOffset;
   const diff = elementY - startingY;
   let start;

   window.requestAnimationFrame(function step(timestamp) {
   start = (!start) ? timestamp : start;

   const time = timestamp - start;
   let percent = Math.min(time / duration, 1);

   console.log(">",percent, startingY + diff * percent)

   window.scrollTo(0, startingY + diff * percent);

   if (time < duration) {
   window.requestAnimationFrame(step);
   }
   });
   }*/
}
