import {Page} from '@playwright/test';
import {getTestIdSelector} from '../../global/utils';

export class ChartComponent {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForComponent({testId}: {testId: string}) {
        const loadedPageSelector = getTestIdSelector(testId);
        await this.page.waitForSelector(loadedPageSelector);
    }

    async getLabelText({testId}: {testId: string}) {
        let label = this.page.getByTestId(testId);
        return label.textContent();
    }
}
