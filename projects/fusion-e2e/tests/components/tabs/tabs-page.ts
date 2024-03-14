import {Page} from '@playwright/test';
import {ComponentBasePage} from '../base-page/component-base-page';
import {ComponentProps} from '../base-page/types';
import {TabsComponent} from './tabs-component';
import {TabsConsts} from '@ironsource/fusion-ui/testIds';

export class TabsPage extends ComponentBasePage {
    readonly component: TabsComponent;

    constructor(page: Page) {
        const tabsProps: ComponentProps = {
            page: page,
            testId: TabsConsts.wrapperTestId,
            componentId: TabsConsts.tabsStoryId,
            loadedPageSelector: TabsConsts.loadedPageSelector
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

    isTabDisabled() {
        return this.component.isTabDisabled(this.testId);
    }
}
