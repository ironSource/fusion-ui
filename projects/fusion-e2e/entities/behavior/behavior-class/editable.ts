import {Page, test} from '@playwright/test';
import {Clickable} from './clickable';

export class Editable extends Clickable {
    constructor(page: Page, selector: string) {
        super(page, selector);
    }

    async clearInput(): Promise<void> {
        await test.step(`Clear input`, async () => {
            await this.page.fill(this.selector, '');
        });
    }

    async fill(text: string): Promise<void> {
        await test.step(`Fill input with text: ${text}`, async () => {
            await this.page.fill(this.selector, '');
            await this.page.fill(this.selector, text);
        });
    }

    async type(text: string): Promise<void> {
        await test.step(`Fill input with text: ${text}`, async () => {
            await this.page.fill(this.selector, '');
            await this.locator.type(text, {delay: 50});
        });
    }
}
