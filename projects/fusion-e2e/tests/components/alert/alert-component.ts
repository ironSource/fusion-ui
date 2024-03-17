import {Page} from '@playwright/test';
import {AlertTestIdModifiers, TabsTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {getTestId, getTestIdSelector} from '../../global/utils';

export class AlertComponent {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForComponent({testId}: {testId: string}) {
        const loadedPageSelector = getTestIdSelector(getTestId(testId, AlertTestIdModifiers.WRAPPER), TabsTestIdModifiers.TAB_DISABLED);
        await this.page.waitForSelector(loadedPageSelector);
    }

    getAlertText({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, AlertTestIdModifiers.MESSAGE)).textContent();
    }

    getAlertTitle({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, AlertTestIdModifiers.TITLE)).textContent();
    }

    async clickOnActionButton({testId}: {testId: string}) {
        await this.page.click(getTestId(testId, AlertTestIdModifiers.ACTION_BUTTON));
    }

    getActionButtonText({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, AlertTestIdModifiers.ACTION_BUTTON)).textContent();
    }

    async closeAlert({testId}: {testId: string}) {
        await this.page.getByTestId(getTestId(testId, AlertTestIdModifiers.CLOSE_BUTTON)).click();
    }

    async isAlertVisible({testId}: {testId: string}) {
        const alertSelector = await this.page.getByTestId(getTestId(testId, AlertTestIdModifiers.WRAPPER)).count();
        return alertSelector > 0;
    }

    getAlertIconType({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, AlertTestIdModifiers.WRAPPER)).getAttribute('class');
    }
}
