import {Page} from '@playwright/test';
import {chartStoryId, defaultTestId, labelTestId, loadedPageSelector} from '../components/chart/consts';
import {BasePage} from './base-page/base-page';
import {ComponentProps, GotoParams} from './base-page/types';
import {ChartComponent} from '../components/chart/chart-component';
import {createStoryBookComponentPath} from '../global/utils';

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

    async waitForComponent() {
        await this.chart.waitForComponent();
    }

    async waitForIconLabelComponent() {
        await this.chart.waitForSelector('fusion-chart-labels');
    }

    async getLabelText(idx) {
        return this.chart.getLabelText({testId: `${labelTestId}_${idx}`});
    }

    async getLabelIconText(idx) {
        return this.chart.getLabelText({testId: `${defaultTestId}_${idx}`});
    }

    async getLabels() {
        return this.chart.getLabels();
    }

    async getLabelColor(label) {
        return this.chart.getColor(label);
    }

    async getLabelIcon(label) {
        return this.chart.getIcon(label);
    }
}
