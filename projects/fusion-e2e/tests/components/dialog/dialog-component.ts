import {Page} from '@playwright/test';
import {DialogTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {getTestId, getTestIdSelector} from '../../global/utils';

export class DialogComponent {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForComponent({testId}: {testId: string}) {
        const loadedPageSelector = getTestIdSelector(getTestId(testId, DialogTestIdModifiers.WRAPPER));
        await this.page.waitForSelector(loadedPageSelector);
    }

    getDialogTitle({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, DialogTestIdModifiers.HEADER)).textContent();
    }

    getDialogText({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, DialogTestIdModifiers.MODAL_CONTENT)).textContent();
    }

    async closeDialog({testId}: {testId: string}) {
        const closeButton = await this.page.getByTestId(getTestId(testId, DialogTestIdModifiers.ACTION_CLOSE));
        await closeButton.click();
    }

    async clickOnPrimaryButton({testId}: {testId: string}) {
        const primaryButton = this.page.getByTestId(getTestId(testId, DialogTestIdModifiers.SAVE_BUTTON));
        await primaryButton.click();
    }

    async clickOnDefaultButton({testId}: {testId: string}) {
        const defaultButton = this.page.getByTestId(getTestId(testId, DialogTestIdModifiers.CANCEL_BUTTON));
        await defaultButton.click();
    }

    async clickOnDeleteButton({testId}: {testId: string}) {
        const deleteButton = await this.page
            .getByTestId(getTestId(testId, DialogTestIdModifiers.ACTION_BUTTONS_WRAPPER))
            .locator('.danger');

        await deleteButton.click();
    }

    getDialogSubtitle({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, DialogTestIdModifiers.HEADER_SECONDARY)).locator('.subtitle').textContent();
    }

    async isDialogVisible({testId}: {testId: string}) {
        await this.page.waitForTimeout(1000);
        const dialog = this.page.getByTestId(getTestId(testId, DialogTestIdModifiers.MODAL_WRAPPER));
        return dialog.isVisible();
    }
}
