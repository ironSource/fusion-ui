import {expect, Locator, test} from '@playwright/test';
import {ChartPage} from '../../pages/chart-page';
import {chartLabelWithIconStoryId} from './consts';
import {CART_LABELS_ICONS_MOCK} from '@ironsource/fusion-ui/components/chart-labels/v4/chart-labels-v4.stories.mock';
import {toRgba} from '../utils';

const ALPHA_VALUE = 100;

let chartPage: ChartPage;

test.beforeEach(async ({page}) => {
    chartPage = new ChartPage(page);
    await chartPage.goto({storyId: chartLabelWithIconStoryId});
    await chartPage.waitForComponent();
});

test('Reloads the icon label component', async () => {
    await chartPage.waitForIconLabelComponent();
});

test('Checks the number and properties of labels', async () => {
    const labels: Locator = await chartPage.getLabels();
    const labelsCount = await labels.count();
    expect(labelsCount).toBe(CART_LABELS_ICONS_MOCK.length);

    for (let i = 0; i < labelsCount; i++) {
        await checkLabelProperties(i, labels);
    }
});

async function checkLabelProperties(index: number, labels: Locator) {
    const label = await labels.nth(index);
    const mockLabel = CART_LABELS_ICONS_MOCK[index];

    // Check color
    const color: string = (await chartPage.getLabelColor(label)).replace(/\s/g, '');
    const expectedColor = mockLabel.color.startsWith('#') ? toRgba(mockLabel.color, ALPHA_VALUE) : mockLabel.color;
    expect(color).toBe(expectedColor);

    // Check icon
    const icon = await chartPage.getLabelIcon(label);
    expect(icon).toBe(mockLabel.icon);
}

test('Checks that chart label text appears', async () => {
    const firstLabelText = await chartPage.getLabelIconText(0);
    const secondLabelText = await chartPage.getLabelIconText(1);
    expect(firstLabelText).toContain(CART_LABELS_ICONS_MOCK[0].label);
    expect(secondLabelText).toContain(CART_LABELS_ICONS_MOCK[1].label);
});
