import {Page} from '@playwright/test';
import {DialogComponent} from '../components/dialog/dialog-component';
import {dialogStoryId, defaultTestId, loadedPageSelector} from '../components/dialog/consts';
import {ComponentProps, GotoParams} from './base-page/types';
import {createStoryBookComponentPath} from '../global/utils';
import {BasePage} from './base-page/base-page';
import {DialogTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';

export class DialogPage extends BasePage {
    readonly dialog: DialogComponent;

    constructor(page: Page) {
        const dialogProps: ComponentProps = {
            page: page,
            testId: defaultTestId,
            componentId: dialogStoryId,
            loadedPageSelector: loadedPageSelector
        };

        super(dialogProps);
        this.dialog = new DialogComponent(page, this.testId);
    }

    async goto(gotoParams: GotoParams = {}) {
        const componentParams = {
            testId: this.testId,
            ...gotoParams.additionalComponentParams
        };

        await this.page.goto(createStoryBookComponentPath(gotoParams.storyId || this.componentId, componentParams));
        await this.openDialog();
        await this.page.waitForSelector(this.loadedPageSelector);
    }

    getDialogTitle() {
        return this.dialog.getDialogTitle();
    }

    openDialog() {
        return this.dialog.openDialog();
    }

    getDialogText() {
        return this.dialog.getDialogText();
    }

    getDialogSubtitle() {
        return this.dialog.getDialogSubtitle();
    }

    async closeDialog() {
        await this.dialog.closeDialog();
    }

    async clickOnPrimaryButton() {
        await this.dialog.clickOnPrimaryButton();
    }

    async clickOnDefaultButton() {
        await this.dialog.clickOnDefaultButton();
    }

    async clickOnDeleteButton() {
        await this.dialog.clickOnDeleteButton();
    }

    async waitForComponent() {
        // const loadedPageSelector = getTestIdSelector(getTestId(testId, DialogTestIdModifiers.WRAPPER));

        await this.dialog.waitForComponent(DialogTestIdModifiers.WRAPPER);
    }

    isDialogVisible() {
        return this.dialog.isDialogVisible();
    }
}
