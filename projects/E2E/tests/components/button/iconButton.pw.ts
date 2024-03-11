import {expect, test} from '@playwright/test';
import {ButtonPage} from './button-page';
import {iconButtonStoryId} from './consts';

let buttonPage: ButtonPage;

test.beforeEach(async ({page}) => {
    buttonPage = new ButtonPage(page);
    await buttonPage.goto({storyId: iconButtonStoryId});
});
test('Verify icon button', async () => {
    await buttonPage.waitForComponent();
    await buttonPage.hoverOnButton();
    const tooltipText = await buttonPage.getButtonText();
    expect(tooltipText).toContain(' Default');
});
