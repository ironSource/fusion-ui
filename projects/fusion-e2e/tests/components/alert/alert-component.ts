import {Page} from '@playwright/test';
import {TestIdsService, AlertTestIdModifiers} from '@ironsource/fusion-ui/services/test-ids';

export class AlertComponent {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForComponent({testId}: {testId: string}) {
        const loadedPageSelector = TestIdsService.getTestIdSelector(TestIdsService.getTestId(testId, AlertTestIdModifiers.WRAPPER));
        await this.page.waitForSelector(loadedPageSelector);
    }

    getAlertText({testId}: {testId: string}) {
        return this.page.getByTestId(TestIdsService.getTestId(testId, AlertTestIdModifiers.MESSAGE)).textContent();
    }

    getAlertTitle({testId}: {testId: string}) {
        return this.page.getByTestId(TestIdsService.getTestId(testId, AlertTestIdModifiers.TITLE)).textContent();
    }

    async clickOnActionButton({testId}: {testId: string}) {
        await this.page.click(TestIdsService.getTestId(testId, AlertTestIdModifiers.ACTION_BUTTON));
    }

    getActionButtonText({testId}: {testId: string}) {
        return this.page.getByTestId(TestIdsService.getTestId(testId, AlertTestIdModifiers.ACTION_BUTTON)).textContent();
    }

    async closeAlert({testId}: {testId: string}) {
        await this.page.getByTestId(TestIdsService.getTestId(testId, AlertTestIdModifiers.CLOSE_BUTTON)).click();
    }

    async isAlertVisible({testId}: {testId: string}) {
        const alertSelector = await this.page.getByTestId(TestIdsService.getTestId(testId, AlertTestIdModifiers.WRAPPER)).count();
        return alertSelector > 0;
    }

    getAlertIconType({testId}: {testId: string}) {
        return this.page.getByTestId(TestIdsService.getTestId(testId, AlertTestIdModifiers.WRAPPER)).getAttribute('class');
    }
}
