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

    async isButtonLoading() {
        // const testIdSelector = `${testId}--button`;
        const button = this.page.getByRole('button');
        const buttonClass = button.getAttribute('class');
        console.log('buttonClass', await buttonClass);
        return (await buttonClass).includes('loading');
    }

    async getButtonText({testId}: {testId: string}) {
        const buttonSelector = this.page.getByTestId(getTestId(testId, ButtonTestIdModifiers.BUTTON)).locator('.fu-button-content');
        return buttonSelector.textContent();
    }

    isButtonDisabled() {
        return this.page.getByRole('button').isDisabled();
    }
}
