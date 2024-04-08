import {DialogTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {getTestId, getTestIdSelector} from '../../global/utils';
import {BaseComponent} from '../base-component';

export class DialogComponent extends BaseComponent {
    constructor(page, selector: string) {
        super(page, selector);
    }

    // Get the title of the dialog
    async getDialogTitle({testId}: {testId: string}) {
        const testIdSelector = getTestIdSelector(getTestId(testId, DialogTestIdModifiers.HEADER));
        const element = await this.getLocator(testIdSelector);
        return element.textContent();
    }

    // Get the text of the dialog
    async getDialogText({testId}: {testId: string}) {
        const testIdSelector = getTestIdSelector(getTestId(testId, DialogTestIdModifiers.MODAL_CONTENT));
        const element = await this.getLocator(testIdSelector);
        return element.textContent();
    }

    // Open the dialog
    async openDialog({testId}: {testId: string}) {
        const selector = getTestId(testId, DialogTestIdModifiers.WRAPPER);
        const testIdSelector = getTestIdSelector(selector);
        await this.waitForSelector(testIdSelector);
        const dialogButton = await this.getLocator(testIdSelector);
        await dialogButton.click();
    }

    // Close the dialog
    async closeDialog({testId}: {testId: string}) {
        const testIdSelector = getTestIdSelector(getTestId(testId, DialogTestIdModifiers.ACTION_CLOSE));
        const closeButton = await this.getLocator(testIdSelector);
        await closeButton.click();
    }

    // Click on the primary button of the dialog
    async clickOnPrimaryButton({testId}: {testId: string}) {
        const testIdSelector = getTestIdSelector(getTestId(testId, DialogTestIdModifiers.SAVE_BUTTON));
        const primaryButton = await this.getLocator(testIdSelector);
        await primaryButton.click();
    }

    // Click on the default button of the dialog
    async clickOnDefaultButton({testId}: {testId: string}) {
        const testIdSelector = getTestIdSelector(getTestId(testId, DialogTestIdModifiers.CANCEL_BUTTON));
        const defaultButton = await this.getLocator(testIdSelector);
        await defaultButton.click();
    }

    // Click on the delete button of the dialog
    async clickOnDeleteButton({testId}: {testId: string}) {
        const testIdSelector = getTestIdSelector(getTestId(testId, DialogTestIdModifiers.ACTION_BUTTONS_WRAPPER));
        const wrapperLocator = await this.getLocator(testIdSelector);
        const deleteButton = await wrapperLocator.locator('.danger');
        await deleteButton.click();
    }

    // Get the subtitle of the dialog
    async getDialogSubtitle({testId}: {testId: string}) {
        const testIdSelector = getTestIdSelector(getTestId(testId, DialogTestIdModifiers.HEADER_SECONDARY));
        const element = await this.getLocator(testIdSelector);
        const locator = await element.locator('.subtitle');
        return locator.textContent();
    }

    // Check if the dialog is visible
    async isDialogVisible({testId}: {testId: string}) {
        await this.waitForTimeout(1000);
        const testIdSelector = getTestIdSelector(getTestId(testId, DialogTestIdModifiers.MODAL_WRAPPER));
        const dialog = await this.getLocator(testIdSelector);
        return dialog.isVisible();
    }
}
