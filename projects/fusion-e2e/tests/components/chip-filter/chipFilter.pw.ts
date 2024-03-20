import {chipFilterStoryId} from './consts';
import {ChipFilterPage} from './chipFilter-page';
import {expect, test} from '@playwright/test';

let chipFilterPage: ChipFilterPage;

test.beforeEach(async ({page}) => {
    chipFilterPage = new ChipFilterPage(page);
});

test('Validate component is loaded', async () => {
    await chipFilterPage.goto();
    await chipFilterPage.waitForComponent();
});
// test.describe('Chip Filter Element', () => {
//
//     test('should be visible on the page', async ({ page }) => {
//         await page.goto('your_website_url');
//         const chipFilter = await page.isVisible('.chip-filter-selector');
//         expect(chipFilter).toBe(true);
//     });
//
//     test('should work when clicked', async ({ page }) => {
//         // TODO: implement this based on expected behaviour
//     });
//
//     test('should add new chips', async ({ page }) => {
//         // TODO: implement this based on expected behaviour
//     });
//
//     test('should remove chips', async ({ page }) => {
//         // TODO: implement this based on expected behaviour
//     });
//
//     test('should be responsive', async ({ page }) => {
//         // TODO: implement this based on expected behaviour
//     });
//
//     test('should be accessible', async ({ page }) => {
//         // TODO: implement this based on expected behaviour
//     });
//
//     test('should handle errors gracefully', async ({ page }) => {
//         // TODO: implement this based on expected behaviour
//     });
//
//     test('should perform well', async ({ page }) => {
//         // TODO: implement this based on expected behaviour
//     });
//
//     test('should work across different browsers', async ({ page }) => {
//         // TODO: implement this based on expected behaviour
//     });
//
//     test('should match design and UX guidelines', async ({ page }) => {
//         // TODO: implement this based on expected behaviour
//     });
// });
