import {expect, test} from '@playwright/test';
import {ChartPage} from '../../pages/chart-page';
import {chartLabelWithIconStoryId} from './consts';
import {ChartLabelTestIdModifiers} from '@ironsource/fusion-ui/entities';

let chartPage: ChartPage;

test.beforeEach(async ({page}) => {
    chartPage = new ChartPage(page);
    await chartPage.goto({storyId: chartLabelWithIconStoryId});
});
test('check that the icon is displayed', async () => {
    await chartPage.waitForIconLabelComponent();
    const icon = await chartPage.getIcon();
    expect(icon).not.toBeNull();
});
