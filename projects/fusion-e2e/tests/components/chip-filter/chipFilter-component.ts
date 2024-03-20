import {Page} from '@playwright/test';
import {IncludeExcludeTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {getTestId, getTestIdSelector} from '../../global/utils';

export class ChipFilterComponent {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForComponent({testId}: {testId: string}) {
        const loadedPageSelector = getTestIdSelector(getTestId(testId, IncludeExcludeTestIdModifiers.CHIP_FILTER_LABEL));

        await this.page.waitForSelector(loadedPageSelector);
    }

    getChipFilterLabel({testId}: {testId: string}) {
        const locator = this.page.getByTestId(getTestId(testId, IncludeExcludeTestIdModifiers.CHIP_FILTER_LABEL)).last().locator('span');
        return locator.textContent();
    }

    getChipFilterValue({testId}: {testId: string}) {
        const locator = this.page.getByTestId(getTestId(testId, IncludeExcludeTestIdModifiers.CHIP_FILTER_VALUE)).last().locator('span');
        return locator.textContent();
    }
}
