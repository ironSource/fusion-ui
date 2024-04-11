import {expect, test} from '@playwright/test';
import {ChartPage} from '../../pages/chart-page';

let chartPage: ChartPage;

test.beforeEach(async ({page}) => {
    chartPage = new ChartPage(page);
});

test('Validate component is loaded', async () => {
    await chartPage.goto();
    await chartPage.waitForComponent();
    await chartPage.page.locator('fusion-chart-wrapper').isVisible();
});

test('Check chart label text appears', async () => {
    await chartPage.goto();
    await chartPage.waitForComponent();
    const firstLabelText = await chartPage.getLabelText(0);
    const secondLabelText = await chartPage.getLabelText(1);
    expect(firstLabelText).toContain('ironSource Ads');
    expect(secondLabelText).toContain('Unity Ads');
});
