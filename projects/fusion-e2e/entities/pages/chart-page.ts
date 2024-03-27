import {Page} from '@playwright/test';
import {chartStoryId, labelTestId, loadedPageSelector} from '../components/chart/consts';
import {BasePage} from './base-page/base-page';
import {ComponentProps, GotoParams} from './base-page/types';
import {ChartComponent} from '../components/chart/chart-component';
import {createStoryBookComponentPath} from '../global/utils';

export class ChartPage extends BasePage {
    readonly chart: ChartComponent;

    constructor(page: Page) {
        const chartProps: ComponentProps = {
            page: page,
            testId: labelTestId,
            componentId: chartStoryId,
            loadedPageSelector: loadedPageSelector
        };

        super(chartProps);
        this.chart = new ChartComponent(page, this.testId);
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
        await this.chart.waitForComponent({testId: this.testId});
    }

    async getLabelText() {
        return this.chart.getLabelText({testId: this.testId});
    }
}
