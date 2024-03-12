import {Page} from '@playwright/test';
import {tabsStoryId, loadedPageSelector, wrapperTestId} from './consts';
import {ComponentBasePage} from '../base-page/component-base-page';
import {ComponentProps} from '../base-page/types';
import {TabsComponent} from './tabs-component';

export class TabsPage extends ComponentBasePage {
    readonly component: TabsComponent;

    constructor(page: Page) {
        const tabsProps: ComponentProps = {
            page: page,
            testId: wrapperTestId,
            componentId: tabsStoryId,
            loadedPageSelector: loadedPageSelector
        };

        super(tabsProps);
        this.component = new TabsComponent(page);
    }

    async waitForComponent() {
        await this.component.waitForComponent({testId: this.testId});
    }

    getSelectedTabText() {
        return this.component.getSelectedTabText({testId: this.testId});
    }

    async selectTab({tabName}: {tabName: string}) {
        await this.component.selectTab({testId: this.testId, tabName});
    }

    isTabDisabled({tabName}: {tabName: string}) {
        return this.component.isTabDisabled({testId: this.testId, tabName});
    }
}
