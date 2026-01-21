import {TrendIndicatorPage} from '../../pages/trend-indicator-page';
import {expect, test} from '@playwright/test';

let trendIndicatorPage: TrendIndicatorPage;

test.beforeEach(async ({page}) => {
    trendIndicatorPage = new TrendIndicatorPage(page);
});

test('Validate component is loaded', async () => {
    await trendIndicatorPage.goto();
    await trendIndicatorPage.waitForComponent();
});

test('Value should appear', async () => {
    await trendIndicatorPage.goto();
    await trendIndicatorPage.waitForComponent();
    const actualValue = await trendIndicatorPage.getTrendIndicatorValue();
    expect(actualValue).toContain('0.0% ');
});
