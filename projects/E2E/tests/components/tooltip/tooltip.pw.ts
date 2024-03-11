import {expect, test} from '@playwright/test';
import {TooltipPage} from './tooltip-page';

let tooltipPage: TooltipPage;

test.beforeEach(async ({page}) => {
    tooltipPage = new TooltipPage(page);
});

test('Validate component is loaded', async () => {
    await tooltipPage.goto();
    await tooltipPage.waitForComponent();
});

test('Validate tooltip text', async () => {
    await tooltipPage.goto();
    const actualText = await tooltipPage.getTooltipText();
    expect(actualText).toBe('I am a tooltip!');
});

test('Validate tooltip header', async () => {
    const headerText = 'Header';
    await tooltipPage.goto({additionalComponentParams: {header: headerText}});
    const actualText = await tooltipPage.getTooltipHeaderText();
    expect(actualText).toBe(headerText);
});
