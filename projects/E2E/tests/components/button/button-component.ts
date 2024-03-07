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

    async clickOnButton({testId}: {testId: string}) {
        const loadedPageSelector = getTestIdSelector(getTestId(testId, ButtonTestIdModifiers.BUTTON));

        await this.page.click(loadedPageSelector);
    }

    async isButtonLoading({testId}: {testId: string}) {
        const buttonClass = await this.page.getByTestId(testId).getAttribute('class');
        return buttonClass.includes('loading');
    }

    async getButtonText({testId}: {testId: string}) {
        const buttonSelector = this.page.getByTestId(getTestId(testId, ButtonTestIdModifiers.BUTTON)).locator('.fu-button-content');
        return buttonSelector.textContent();
    }

    isButtonDisabled({testId}: {testId: string}) {
        return this.page.getByTestId(testId).isDisabled();
    }
}
