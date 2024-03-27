import {Page} from '@playwright/test';
import {Editable} from '../../behavior';

export class Input extends Editable {
    constructor(page: Page, selector: string) {
        super(page, selector);
    }

    async getInputValue(): Promise<string> {
        return await this.locator.inputValue();
    }
}
