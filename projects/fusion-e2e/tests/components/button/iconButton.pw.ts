import {expect, test} from '@playwright/test';
import {ButtonPage} from './button-page';
import {ButtonConsts} from '@ironsource/fusion-ui/testIds';

let buttonPage: ButtonPage;

test.beforeEach(async ({page}) => {
    buttonPage = new ButtonPage(page);
    await buttonPage.goto({storyId: ButtonConsts.iconButtonStoryId});
});
test('Verify icon button', async () => {
    await buttonPage.waitForComponent();
    await buttonPage.hoverOnButton();
    const tooltipText = await buttonPage.getIconButtonText();
    expect(tooltipText).toContain('Edit');
});
