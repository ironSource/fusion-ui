import {Page} from '@playwright/test';
import {getTestId} from '../../global/utils';
import {TabsSelectionParams} from './types';
import {TabsTestIdModifiers} from '@ironsource/fusion-ui/entities';

export class TabsComponent {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForComponent({testId}: {testId: string}) {
        const loadedPageSelector = `[data-testid='${testId}']`;
        await this.page.waitForSelector(loadedPageSelector);
    }

    getSelectedTabText({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, TabsTestIdModifiers.WRAPPER)).locator('.tab-item--active').textContent();
    }

    async selectTab({testId, tabName}: TabsSelectionParams) {
        const tabIndex = await this.getTabIndex({testId, tabName});
        await this.page.getByTestId(getTestId(testId, `${TabsTestIdModifiers.TAB}-${tabIndex + 1}`)).click();
    }

    private async getTabIndex({testId, tabName}: TabsSelectionParams) {
        const tabs = await this.page.getByTestId(getTestId(testId, TabsTestIdModifiers.WRAPPER)).locator('.tab-item').allTextContents();
        return tabs.indexOf(tabName);
    }

    async isTabDisabled({testId, tabName}: TabsSelectionParams) {
        const tabIndex = await this.getTabIndex({testId, tabName});
        return this.page
            .getByTestId(getTestId(testId, `${TabsTestIdModifiers.TAB}-${tabIndex}`))
            .locator('.tab-item--disabled')
            .isVisible();
    }
}
