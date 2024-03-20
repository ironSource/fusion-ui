import {Page} from '@playwright/test';
import {ChipFilterTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {getTestId, getTestIdSelector} from '../../global/utils';

export class ChipFilterComponent {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForComponent({testId}: {testId: string}) {
        const loadedPageSelector = getTestIdSelector(testId);
        await this.page.waitForSelector(loadedPageSelector);
    }

    getChipFilterLabel({testId}: {testId: string}) {
        const locator = this.page.getByTestId(getTestId(testId, ChipFilterTestIdModifiers.CHIP_FILTER)).locator('.fu-chip-label');
        return locator.textContent();
    }

    click({testId}: {testId: string}) {
        const locator = this.page.getByTestId(getTestId(testId, ChipFilterTestIdModifiers.CHIP_FILTER)).locator('.fu-chip-label');
        return locator.click();
    }
}
