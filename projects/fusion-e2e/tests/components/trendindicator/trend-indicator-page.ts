import {TrendIndicatorComponent} from './trendindicator-component';
import {trendIndicatorStoryId, defaultTestId, loadedPageSelector} from './consts';
import {Page} from '@playwright/test';
import {ComponentBasePage} from '../base-page/component-base-page';
import {ComponentProps} from '../base-page/types';

export class TrendIndicatorPage extends ComponentBasePage {
    readonly component: TrendIndicatorComponent;

    constructor(page: Page) {
        const alertProps: ComponentProps = {
            page: page,
            testId: defaultTestId,
            componentId: trendIndicatorStoryId,
            loadedPageSelector: loadedPageSelector
        };

        super(alertProps);
        this.component = new TrendIndicatorComponent(page);
    }

    async waitForComponent() {
        await this.component.waitForComponent({testId: this.testId});
    }
}
