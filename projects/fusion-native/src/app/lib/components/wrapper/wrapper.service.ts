import {Injectable, OnDestroy} from '@angular/core';
// eslint-disable-next-line
const IS_WC = window['VUE_TYPE'] === 'wc';

@Injectable({
    providedIn: 'root'
})
export class WrapperService implements OnDestroy {
    private headMutationObserver: MutationObserver;
    private shadowRootElements: ShadowRoot[] = [];
    private headStylesElements: HTMLStyleElement[] = [];

    constructor() {
        if (IS_WC) {
            this.initHeadListener();
        }
    }

    initHeadListener() {
        this.headMutationObserver = new MutationObserver((mutationRecords: MutationRecord[]) => {
            this.clearShadowRootElements();
            mutationRecords.forEach(mutationRecord => {
                if (
                    mutationRecord &&
                    mutationRecord.addedNodes &&
                    mutationRecord.addedNodes.length &&
                    mutationRecord.addedNodes[0].nodeName === 'STYLE'
                ) {
                    const styleElement = mutationRecord.addedNodes[0] as HTMLStyleElement;
                    this.headStylesElements.push(styleElement);
                    this.shadowRootElements.forEach(shadowRootElement => shadowRootElement.appendChild(styleElement.cloneNode(true)));
                }
            });
        });

        this.headMutationObserver.observe(document.querySelector('head'), {
            childList: true,
            subtree: false
        });
    }

    clearShadowRootElements() {
        this.shadowRootElements = this.shadowRootElements.filter(shadowRoot => document.body.contains(shadowRoot.host));
    }

    getShadowRoot(element: Node): ShadowRoot {
        while (element !== null && element.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
            element = element.parentNode;
        }

        return element as ShadowRoot;
    }

    setShadowRoot(element: Element) {
        if (!IS_WC) {
            return;
        }

        const shadowRoot = this.getShadowRoot(element);
        if (!!shadowRoot && !this.shadowRootElements.includes(shadowRoot)) {
            this.shadowRootElements.push(shadowRoot);
            this.headStylesElements.forEach(styleElement => {
                shadowRoot.appendChild(styleElement.cloneNode(true));
            });
        }
    }

    ngOnDestroy(): void {
        if (this.headMutationObserver) {
            this.headMutationObserver.disconnect();
            this.headMutationObserver = null;
        }
    }
}
