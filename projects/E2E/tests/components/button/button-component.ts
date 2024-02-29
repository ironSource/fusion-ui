import {Page} from '@playwright/test';

// import {ButtonTestIdModifiers} from "@ironsource/fusion-ui";

export class ButtonComponent {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForComponent({testId}: {testId: string}) {
        // const loadedPageSelector = `[data-testid='${testId}--${ButtonTestIdModifiers.BUTTON}']`;
        const loadedPageSelector = `[data-testid='${testId}--button']`;
        console.log('loadedPageSelector', loadedPageSelector);
        await this.page.waitForSelector(loadedPageSelector);
    }

    async clickOnButton({testId}: {testId: string}) {
        const loadedPageSelector = `[data-testid='${testId}--button']`;
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
        const loadedPageSelector = `${testId}--button`;

        const buttonSelector = this.page.getByTestId(loadedPageSelector).locator('.fu-button-content');
        return buttonSelector.textContent();
    }

    isButtonDisabled() {
        return this.page.getByRole('button').isDisabled();
    }
}
