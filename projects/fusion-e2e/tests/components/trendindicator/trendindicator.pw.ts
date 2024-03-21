import {TrendIndicatorPage} from './trend-indicator-page';
import {expect, test} from '@playwright/test';
import {trendIndicatorStoryId} from './consts';

let component: TrendIndicatorPage;

test.beforeEach(async ({page}) => {
    component = new TrendIndicatorPage(page);
});

test('Validate component is loaded', async () => {
    await component.goto();
    await component.waitForComponent();
});
