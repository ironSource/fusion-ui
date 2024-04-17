import {DialogTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {getTestId, getTestIdSelector} from '../../global/utils';
import {BaseComponent} from '../base-component';

export class DialogComponent extends BaseComponent {
    private headerModifier = DialogTestIdModifiers.HEADER;
    private contentModifier = DialogTestIdModifiers.MODAL_CONTENT;
    private wrapperModifier = DialogTestIdModifiers.WRAPPER;
    private closeModifier = DialogTestIdModifiers.ACTION_CLOSE;
    private saveButtonModifier = DialogTestIdModifiers.SAVE_BUTTON;
    private cancelButtonModifier = DialogTestIdModifiers.CANCEL_BUTTON;
    private actionButtonsWrapperModifier = DialogTestIdModifiers.ACTION_BUTTONS_WRAPPER;
    private modalWrapperModifier = DialogTestIdModifiers.MODAL_WRAPPER;

    constructor(page, selector: string) {
        super(page, selector);
    }

    async getDialogElement(modifier: string) {
        const testIdSelector = getTestIdSelector(getTestId(this.selector, modifier));
        return await this.getLocator(testIdSelector);
    }

    // Get the title of the dialog
    async getDialogTitle() {
        const element = await this.getDialogElement(this.headerModifier);
        return element.textContent();
    }

    // Get the text of the dialog
    async getDialogText() {
        const element = await this.getDialogElement(this.contentModifier);
        return element.textContent();
    }

    // Open the dialog
    async openDialog() {
        const dialogButton = await this.getDialogElement(this.wrapperModifier);
        await dialogButton.click();
    }

    // Close the dialog
    async closeDialog() {
        const closeButton = await this.getDialogElement(this.closeModifier);
        await closeButton.click();
    }

    // Click on the primary button of the dialog
    async clickOnPrimaryButton() {
        const primaryButton = await this.getDialogElement(this.saveButtonModifier);
        await primaryButton.click();
    }

    // Click on the default button of the dialog
    async clickOnDefaultButton() {
        const defaultButton = await this.getDialogElement(this.cancelButtonModifier);
        await defaultButton.click();
    }

    // Click on the delete button of the dialog
    async clickOnDeleteButton() {
        const wrapperLocator = await this.getDialogElement(this.actionButtonsWrapperModifier);
        const deleteButton = await wrapperLocator.locator('.danger');
        await deleteButton.click();
    }

    // Get the subtitle of the dialog
    async getDialogSubtitle() {
        const element = await this.getDialogElement(this.headerModifier);
        const locator = await element.locator('.subtitle');
        return locator.textContent();
    }

    // Check if the dialog is visible
    async isDialogVisible() {
        const dialog = await this.getDialogElement(this.modalWrapperModifier);
        return dialog.isVisible();
    }
}
