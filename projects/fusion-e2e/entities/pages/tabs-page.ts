import {Page} from '@playwright/test';
import {tabsStoryId, loadedPageSelector, wrapperTestId} from '../components/tabs/consts';
import {BasePage} from './base-page/base-page';
import {ComponentProps} from './base-page/types';
import {TabsComponent} from '../components/tabs/tabs-component';

export class TabsPage extends BasePage {
    readonly tabs: TabsComponent;

    constructor(page: Page) {
        const tabsProps: ComponentProps = {
            page: page,
            testId: wrapperTestId,
            componentId: tabsStoryId,
            loadedPageSelector: loadedPageSelector
        };

        super(tabsProps);
        this.tabs = new TabsComponent(page, this.testId);
    }

    async waitForComponent() {
        await this.tabs.waitForComponent({testId: this.testId});
    }

    getSelectedTabText() {
        return this.tabs.getSelectedTabText();
    }

    async selectTab({tabName}: {tabName: string}) {
        await this.tabs.selectTab({tabName});
    }

    isTabDisabled() {
        return this.tabs.isTabDisabled();
    }
}
