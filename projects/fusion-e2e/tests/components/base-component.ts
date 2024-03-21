import {Page} from '@playwright/test';
import {BaseElement} from '../behavior';

export class BaseComponent extends BaseElement {
    constructor(page: Page, selector: string) {
        super(page, selector);
    }

    async isAllControlsVisible(controls: BaseElement[]) {
        let isVisible = true;
        for (const control of controls) {
            const isControlVisible = await control.isVisible();
            if (!isControlVisible) {
                isVisible = false;
                break;
            }
        }
        return isVisible;
    }
}
