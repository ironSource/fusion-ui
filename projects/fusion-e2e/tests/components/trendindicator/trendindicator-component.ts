import {Page} from '@playwright/test';
import {getTestId, getTestIdSelector} from '../../global/utils';
import {TrendIndicatorTestIdModifiers} from '@ironsource/fusion-ui/entities';

export class TrendIndicatorComponent {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForComponent({testId}: {testId: string}) {
        const loadedPageSelector = getTestIdSelector(testId);
        await this.page.waitForSelector(loadedPageSelector);
    }

    getTrendIndicatorValue({testId}: {testId: string}) {
        const locator = this.page.getByTestId(getTestId(testId, TrendIndicatorTestIdModifiers.VALUE));
        return locator.textContent();
    }
}
