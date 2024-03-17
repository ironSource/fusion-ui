import {dialogDeleteStoryId} from './consts';
import {DialogPage} from './dialog-page';
import {expect, test} from '@playwright/test';

let dialogPage: DialogPage;

test.beforeEach(async ({page}) => {
    dialogPage = new DialogPage(page);
});

test('Validate component is loaded', async () => {
    await dialogPage.goto();
    await dialogPage.waitForComponent();
});

test('Validate dialog text', async () => {
    // const subtitleText = 'Description'; TODO there is no test id for the subtitle check if it can be seperated
    await dialogPage.goto();
    const dialogTitle = await dialogPage.getDialogTitle();
    expect(dialogTitle).toContain('Title');
    // const actualSubtitle = await dialogPage.getDialogSubtitle();
    // expect(actualSubtitle).toBe(subtitleText);
    const dialogText = await dialogPage.getDialogText();
    const expectedText = 'This is a dialog that demonstrates the usage of the DialogTitle and DialogActions components!';
    expect(dialogText).toContain(expectedText);
});

test('Validate dialog buttons close the dialog', async () => {
    await dialogPage.goto();
    let dialogIsVisible = await dialogPage.isDialogVisible();
    expect(dialogIsVisible).toBe(true);
    await dialogPage.closeDialog();
    dialogIsVisible = await dialogPage.isDialogVisible();
    expect(dialogIsVisible).toBe(false);
    await dialogPage.openDialog();
    await dialogPage.clickOnDefaultButton();
    dialogIsVisible = await dialogPage.isDialogVisible();
    expect(dialogIsVisible).toBe(false);
    await dialogPage.openDialog();
    await dialogPage.clickOnPrimaryButton();
    dialogIsVisible = await dialogPage.isDialogVisible();
    expect(dialogIsVisible).toBe(false);
});

test.skip('Validate delete button closes dialog', async () => {
    await dialogPage.goto({storyId: dialogDeleteStoryId});
    await dialogPage.clickOnDeleteButton();
    const dialogVisible = await dialogPage.isDialogVisible();
    expect(dialogVisible).toBe(false);
});
