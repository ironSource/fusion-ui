import {TrendIndicatorComponent} from '../components/trendindicator/trendindicator-component';
import {trendIndicatorStoryId, defaultTestId, loadedPageSelector} from '../components/trendindicator/consts';
import {Page} from '@playwright/test';
import {BasePage} from './base-page/base-page';
import {ComponentProps} from './base-page/types';

export class TrendIndicatorPage extends BasePage {
    readonly trendIndicator: TrendIndicatorComponent;

    constructor(page: Page) {
        const alertProps: ComponentProps = {
            page: page,
            testId: defaultTestId,
            componentId: trendIndicatorStoryId,
            loadedPageSelector: loadedPageSelector
        };

        super(alertProps);
        this.trendIndicator = new TrendIndicatorComponent(page, this.testId);
    }

    async waitForComponent() {
        await this.trendIndicator.waitForComponent();
    }

    async getTrendIndicatorValue() {
        return this.trendIndicator.getTrendIndicatorValue();
    }
}
