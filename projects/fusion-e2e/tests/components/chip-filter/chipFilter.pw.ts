import {ChipFilterPage} from '../../pages/chipFilter-page';
import {expect, test} from '@playwright/test';

let chipFilterPage: ChipFilterPage;

test.beforeEach(async ({page}) => {
    chipFilterPage = new ChipFilterPage(page);
});

test('Validate component is loaded', async () => {
    await chipFilterPage.goto();
    await chipFilterPage.waitForComponent();
});

test('should work when clicked', async () => {
    await chipFilterPage.goto();
    await chipFilterPage.waitForComponent();
    let labelText = await chipFilterPage.getChipFilterLabel();
    expect(labelText).toBe('Status');
});

test('should show option dropdown when clicked', async ({page}) => {
    await chipFilterPage.goto();
    await chipFilterPage.waitForComponent();
    await chipFilterPage.click();
    await expect(await page.locator('.options-dropdown').first()).toBeVisible();
});
