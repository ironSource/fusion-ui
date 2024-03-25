import {Page} from '@playwright/test';
import {getTestId, getTestIdSelector} from '../../global/utils';
import {ButtonTestIdModifiers} from '@ironsource/fusion-ui/entities';

export class ButtonComponent {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForComponent({testId}: {testId: string}) {
        const loadedPageSelector = getTestIdSelector(getTestId(testId, ButtonTestIdModifiers.BUTTON));
        await this.page.waitForSelector(loadedPageSelector);
    }

    async waitForToggleButtonComponent({testId}: {testId: string}) {
        const loadedPageSelector = getTestIdSelector(testId);
        await this.page.waitForSelector(loadedPageSelector);
    }

    async clickOnButton({testId}: {testId: string}) {
        const loadedPageSelector = getTestIdSelector(getTestId(testId, ButtonTestIdModifiers.BUTTON));

        await this.page.click(loadedPageSelector);
    }

    async hoverOnButton({testId}: {testId: string}) {
        const loadedPageSelector = getTestIdSelector(getTestId(testId, ButtonTestIdModifiers.BUTTON));

        await this.page.hover(loadedPageSelector);
    }

    async isButtonLoading({testId}: {testId: string}) {
        const buttonClass = await this.page.getByTestId(testId).getAttribute('class');
        return buttonClass.includes('loading');
    }

    async getButtonText({testId}: {testId: string}) {
        const buttonSelector = this.page.getByTestId(getTestId(testId, ButtonTestIdModifiers.CONTENT));
        return buttonSelector.textContent();
    }

    async getIconButtonText({testId}: {testId: string}) {
        const textSelector = this.page.getByTestId(testId).last().locator('span');
        return textSelector.textContent();
    }

    isButtonDisabled({testId}: {testId: string}) {
        return this.page.getByTestId(testId).isDisabled();
    }

    getToggleButtonFirstLabel({testId}: {testId: string}) {
        return this.page.getByTestId(testId).textContent();
    }
}
