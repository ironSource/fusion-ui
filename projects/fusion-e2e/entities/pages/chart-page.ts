import {Page} from '@playwright/test';
import {chartStoryId, defaultTestId, labelTestId, loadedPageSelector} from '../components/chart/consts';
import {BasePage} from './base-page/base-page';
import {ComponentProps, GotoParams} from './base-page/types';
import {ChartComponent} from '../components/chart/chart-component';
import {createStoryBookComponentPath, getTestId, getTestIdSelector} from '../global/utils';

export class ChartPage extends BasePage {
    readonly chart: ChartComponent;

    constructor(page: Page) {
        const chartProps: ComponentProps = {
            page: page,
            testId: defaultTestId,
            componentId: chartStoryId,
            loadedPageSelector: loadedPageSelector
        };

        super(chartProps);
        this.chart = new ChartComponent(page, this.testId);
    }

    async goto(gotoParams: GotoParams = {}) {
        const componentParams = {
            testId: defaultTestId,
            ...gotoParams.additionalComponentParams
        };

        await this.page.goto(createStoryBookComponentPath(gotoParams.storyId || this.componentId, componentParams));

        await this.page.waitForSelector(this.loadedPageSelector);
    }

    async waitForComponent(modifier = '') {
        let testId: string = '';
        if (modifier) {
            testId = getTestId(this.testId, modifier);
        } else {
            testId = this.testId;
        }
        await this.chart.waitForComponent({testId: testId});
    }

    async waitForIconLabelComponent() {
        const loadedPageSelector = getTestIdSelector(defaultTestId);
        await this.chart.waitForSelector(loadedPageSelector);
    }

    async getLabelText(idx) {
        return this.chart.getLabelText({testId: `${labelTestId}_${idx}`});
    }

    async getIcon() {
        return this.chart.getIcon({testId: this.testId});
    }
}
