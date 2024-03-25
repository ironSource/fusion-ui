import {Page} from '@playwright/test';
import {chartStoryId, labelTestId, loadedPageSelector} from './consts';
import {BasePage} from '../base-page/base-page';
import {ComponentProps, GotoParams} from '../base-page/types';
import {ChartComponent} from './chart-component';
import {createStoryBookComponentPath} from '../../global/utils';

export class ChartPage extends BasePage {
    readonly component: ChartComponent;

    constructor(page: Page) {
        const chartProps: ComponentProps = {
            page: page,
            testId: labelTestId,
            componentId: chartStoryId,
            loadedPageSelector: loadedPageSelector
        };

        super(chartProps);
        this.component = new ChartComponent(page);
    }

    async goto(gotoParams: GotoParams = {}) {
        const componentParams = {
            testId: labelTestId,
            ...gotoParams.additionalComponentParams
        };

        await this.page.goto(createStoryBookComponentPath(gotoParams.storyId || this.componentId, componentParams));

        await this.page.waitForSelector(this.loadedPageSelector);
    }

    async waitForComponent() {
        await this.component.waitForComponent({testId: this.testId});
    }

    async getLabelText() {
        return this.component.getLabelText({testId: this.testId});
    }
}
