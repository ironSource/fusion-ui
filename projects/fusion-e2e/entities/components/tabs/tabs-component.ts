import {getTestId} from '../../global/utils';
import {TabsSelectionParams} from './types';
import {TabsTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {defaultTestId} from './consts';
import {BaseComponent} from '../base-component';
import {Locator, Page} from '@playwright/test';

export class TabsComponent extends BaseComponent {
    constructor(page: Page, selector: string) {
        super(page, selector);
    }

    // Get the text of the selected tab
    async getSelectedTabText({testId}: {testId: string}): Promise<string> {
        const testIdSelector = getTestId(testId, TabsTestIdModifiers.WRAPPER);
        const element: Locator = await this.getByTestId(testIdSelector);
        const activeTab: Locator = element.locator('.tab-item--active');
        return activeTab.textContent();
    }

    // Select a tab
    async selectTab({testId, tabName}: TabsSelectionParams): Promise<void> {
        const tabIndex: number = await this.getTabIndex({testId, tabName});
        const tabTestIdSelector = getTestId(testId, `${TabsTestIdModifiers.TAB}-${tabIndex + 1}`);
        const tab: Locator = await this.getByTestId(tabTestIdSelector);
        await tab.click();
    }

    // Get the index of a tab
    private async getTabIndex({testId, tabName}: TabsSelectionParams): Promise<number> {
        const testIdSelector = getTestId(testId, TabsTestIdModifiers.WRAPPER);
        const wrapperLocator: Locator = await this.getByTestId(testIdSelector);
        const tabs: string[] = await wrapperLocator.locator('.tab-item').allTextContents();
        return tabs.indexOf(tabName);
    }

    // Check if a tab is disabled
    async isTabDisabled(): Promise<boolean> {
        const disabledTestId = getTestId(defaultTestId, TabsTestIdModifiers.TAB_DISABLED);
        await this.waitForComponent({testId: disabledTestId});
        const disabledTab: Locator = await this.getByTestId(disabledTestId);
        return disabledTab.isDisabled();
    }
}
