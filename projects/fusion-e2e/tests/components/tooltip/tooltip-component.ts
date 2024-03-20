import {Page} from '@playwright/test';
import {TooltipTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {getTestId, getTestIdSelector} from '../../global/utils';

export class TooltipComponent {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForComponent({testId}: {testId: string}) {
        const loadedPageSelector = getTestIdSelector(getTestId(testId, TooltipTestIdModifiers.TRIGGER));

        await this.page.waitForSelector(loadedPageSelector);
    }

    getTooltipText({testId}: {testId: string}) {
        const locator = this.page.getByTestId(getTestId(testId, TooltipTestIdModifiers.TRIGGER)).last().locator('span');
        return locator.textContent();
    }

    getTooltipHeaderText({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, TooltipTestIdModifiers.TRIGGER)).last().getAttribute('header');
    }
}
