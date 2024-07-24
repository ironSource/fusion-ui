import {Page, test} from '@playwright/test';
import {BaseElement} from '../../behavior';
import {SELECTORS} from '../constants';

export class FileCSVUploadInput extends BaseElement {
    constructor(page: Page, selector: string) {
        super(page, selector);
    }

    async uploadFile(pathToFile: string) {
        await test.step(`Upload file`, async () => {
            await this.page.setInputFiles(`${this.selector} ${SELECTORS.FILE_INPUT.INPUT}`, pathToFile);
        });
    }
}
