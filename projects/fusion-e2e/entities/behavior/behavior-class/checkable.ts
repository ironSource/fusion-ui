import {Page, test} from '@playwright/test';
import {BaseElement} from './base-element';

export class Checkable extends BaseElement {
    constructor(page: Page, selector: string) {
        super(page, selector);
    }

    async check(): Promise<void> {
        await test.step(`Check`, async () => {
            await this.page.check(this.selector);
            if (!(await this.isChecked())) {
                throw new Error(`Couldn't check the Check box ${this.selector}`);
            }
        });
    }

    async uncheck(): Promise<void> {
        await test.step(`UnCheck`, async () => {
            await this.page.uncheck(this.selector);
            if (await this.isChecked()) {
                throw new Error(`Couldn't uncheck the Check box ${this.selector}`);
            }
        });
    }

    async isChecked(): Promise<boolean> {
        let isChecked: boolean = false;

        await test.step(`isChecked`, async () => {
            isChecked = await this.locator.isChecked();
        });

        return isChecked;
    }
}
