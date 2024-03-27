import {getTestId} from '../../global/utils';
import {TabsSelectionParams} from './types';
import {TabsTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {defaultTestId} from './consts';
import {BaseComponent} from '../base-component';

export class TabsComponent extends BaseComponent {
    constructor(page, selector: string) {
        super(page, selector);
    }

    async getSelectedTabText({testId}: {testId: string}) {
        return (await this.getByTestId(getTestId(testId, TabsTestIdModifiers.WRAPPER))).locator('.tab-item--active').textContent();
    }

    async selectTab({testId, tabName}: TabsSelectionParams) {
        const tabIndex = await this.getTabIndex({testId, tabName});
        await (await this.getByTestId(getTestId(testId, `${TabsTestIdModifiers.TAB}-${tabIndex + 1}`))).click();
    }

    private async getTabIndex({testId, tabName}: TabsSelectionParams) {
        const tabs = await (await this.getByTestId(getTestId(testId, TabsTestIdModifiers.WRAPPER))).locator('.tab-item').allTextContents();
        return tabs.indexOf(tabName);
    }

    async isTabDisabled() {
        const disabledTestId = getTestId(defaultTestId, TabsTestIdModifiers.TAB_DISABLED);
        await this.waitForComponent({testId: disabledTestId});
        return (await this.getByTestId(disabledTestId)).isDisabled();
    }
}
