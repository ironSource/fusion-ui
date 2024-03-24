import {expect, test} from '@playwright/test';
import {ButtonPage} from './button-page';
import {toggleButtonStoryId} from './consts';

let buttonPage: ButtonPage;

test.beforeEach(async ({page}) => {
    buttonPage = new ButtonPage(page);
    await buttonPage.goto({storyId: toggleButtonStoryId});
});
test('Verify toggle button', async () => {
    await buttonPage.waitForToggleButtonComponent();
    const firstLabelText = await buttonPage.getToggleButtonFirstLabel();
    expect(firstLabelText).toContain('Pie');
});
