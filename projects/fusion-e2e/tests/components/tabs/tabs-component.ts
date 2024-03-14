import {Page} from '@playwright/test';
import {TabsSelectionParams} from './types';
import {TabsConsts, TestIdsService, TabsTestIdModifiers} from '@ironsource/fusion-ui/services/test-ids';

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
        return this.page
            .getByTestId(TestIdsService.getTestId(testId, TabsTestIdModifiers.WRAPPER))
            .locator('.tab-item--active')
            .textContent();
    }

    async selectTab({testId, tabName}: TabsSelectionParams) {
        const tabIndex = await this.getTabIndex({testId, tabName});
        await this.page.getByTestId(TestIdsService.getTestId(testId, `${TabsTestIdModifiers.TAB}-${tabIndex + 1}`)).click();
    }

    private async getTabIndex({testId, tabName}: TabsSelectionParams) {
        const tabs = await this.page
            .getByTestId(TestIdsService.getTestId(testId, TabsTestIdModifiers.WRAPPER))
            .locator('.tab-item')
            .allTextContents();
        return tabs.indexOf(tabName);
    }

    async isTabDisabled(testId: string) {
        const disabledTestId = TestIdsService.getTestId(TabsConsts.defaultTestId, TabsTestIdModifiers.TAB_DISABLED);
        await this.waitForComponent({testId: disabledTestId});
        return this.page.getByTestId(disabledTestId).isDisabled();
    }
}
