import {DialogTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {getTestId, getTestIdSelector} from '../../global/utils';
import {BaseComponent} from '../base-component';

export class DialogComponent extends BaseComponent {
    constructor(page, selector: string) {
        super(page, selector);
    }

    async getDialogTitle({testId}: {testId: string}) {
        const element = await this.getByTestId(getTestId(testId, DialogTestIdModifiers.HEADER));
        return element.textContent();
    }

    async getDialogText({testId}: {testId: string}) {
        const element = await this.getByTestId(getTestId(testId, DialogTestIdModifiers.MODAL_CONTENT));
        return element.textContent();
    }

    async openDialog({testId}: {testId: string}) {
        const selector = getTestId(testId, DialogTestIdModifiers.WRAPPER);
        await this.waitForSelector(getTestIdSelector(selector));
        const dialogButton = await this.getByTestId(selector);
        await dialogButton.click();
    }

    async closeDialog({testId}: {testId: string}) {
        const closeButton = await this.getByTestId(getTestId(testId, DialogTestIdModifiers.ACTION_CLOSE));
        await closeButton.click();
    }

    async clickOnPrimaryButton({testId}: {testId: string}) {
        const primaryButton = await this.getByTestId(getTestId(testId, DialogTestIdModifiers.SAVE_BUTTON));
        await primaryButton.click();
    }

    async clickOnDefaultButton({testId}: {testId: string}) {
        const defaultButton = await this.getByTestId(getTestId(testId, DialogTestIdModifiers.CANCEL_BUTTON));
        await defaultButton.click();
    }

    async clickOnDeleteButton({testId}: {testId: string}) {
        const deleteButton = await (
            await this.getByTestId(getTestId(testId, DialogTestIdModifiers.ACTION_BUTTONS_WRAPPER))
        ).locator('.danger');

        await deleteButton.click();
    }

    async getDialogSubtitle({testId}: {testId: string}) {
        const element = await this.getByTestId(getTestId(testId, DialogTestIdModifiers.HEADER_SECONDARY));
        const locator = await element.locator('.subtitle');
        return locator.textContent();
    }

    async isDialogVisible({testId}: {testId: string}) {
        await this.waitForTimeout(1000);
        const dialog = await this.getByTestId(getTestId(testId, DialogTestIdModifiers.MODAL_WRAPPER));
        return dialog.isVisible();
    }
}
