import {Page} from '@playwright/test';
import {TestIdsService, TooltipTestIdModifiers} from '@ironsource/fusion-ui/services/test-ids';

export class TooltipComponent {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForComponent({testId}: {testId: string}) {
        const loadedPageSelector = TestIdsService.getTestIdSelector(TestIdsService.getTestId(testId, TooltipTestIdModifiers.TRIGGER));

        await this.page.waitForSelector(loadedPageSelector);
    }

    getTooltipText({testId}: {testId: string}) {
        const locator = this.page.getByTestId(TestIdsService.getTestId(testId, TooltipTestIdModifiers.TRIGGER)).last().locator('span');
        return locator.textContent();
    }

    getTooltipHeaderText({testId}: {testId: string}) {
        return this.page.getByTestId(TestIdsService.getTestId(testId, TooltipTestIdModifiers.TRIGGER)).last().getAttribute('header');
    }
}
