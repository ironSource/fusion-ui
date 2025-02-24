import {expect, test} from '@playwright/test';
import {ChartPage} from '../../pages/chart-page';
import {CHART_BAR_GROUPED_DATA_MOCK} from '@ironsource/fusion-ui/components/chart/v4/stories/chart-v4.component.mock';

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

    const dataKeys = Object.keys(CHART_BAR_GROUPED_DATA_MOCK.data);

    for (let i = 0; i < dataKeys.length; i++) {
        const labelText = await chartPage.getLabelText(i);
        expect(labelText).toContain(dataKeys[i]);
    }
});
