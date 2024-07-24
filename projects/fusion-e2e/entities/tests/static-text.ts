import {Page, test} from '@playwright/test';
import {BaseElement} from '../behavior';

export class StaticText extends BaseElement {
    constructor(page: Page, selector: string) {
        super(page, selector);
    }

    async getText(): Promise<string> {
        let text: string;

        await test.step(`Get text`, async () => {
            const textLocator = await this.getLocator(this.selector);
            text = await textLocator.textContent();
            if (!text) {
                throw new Error(`Couldn't find text: ${text}`);
            }
        });

        return text.trim();
    }
}
