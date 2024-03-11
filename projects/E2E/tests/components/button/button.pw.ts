import {expect, test} from '@playwright/test';
import {ButtonPage} from './button-page';

let buttonPage: ButtonPage;

test.beforeEach(async ({page}) => {
    buttonPage = new ButtonPage(page);
    await buttonPage.goto();
});

test('Verify button functionality', async () => {
    await buttonPage.waitForComponent();
    await buttonPage.clickOnButton();
    const buttonText = await buttonPage.getButtonText();
    expect(buttonText).toContain(' Default');
});

test('Verify button loading state', async () => {
    let buttonLoaded = await buttonPage.isButtonLoading();
    expect(buttonLoaded).toBe(false);
    await buttonPage.goto({additionalComponentParams: {loading: true}});
    buttonLoaded = await buttonPage.isButtonLoading();
    expect(buttonLoaded).toBe(true);
});

test('Verify button disabled state', async () => {
    let buttonDisabled = await buttonPage.isButtonDisabled();
    expect(buttonDisabled).toBe(false);
    await buttonPage.goto({additionalComponentParams: {disabled: true}});
    buttonDisabled = await buttonPage.isButtonDisabled();
    expect(buttonDisabled).toBe(true);
});

test('Verify icon button', async () => {
    const buttonText = await buttonPage.getButtonText();
    expect(buttonText).toContain(' Default');
});
