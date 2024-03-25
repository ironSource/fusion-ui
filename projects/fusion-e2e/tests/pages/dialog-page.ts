import {Page} from '@playwright/test';
import {DialogComponent} from '../components/dialog/dialog-component';
import {dialogStoryId, defaultTestId, loadedPageSelector} from '../components/dialog/consts';
import {ComponentProps, GotoParams} from './base-page/types';
import {createStoryBookComponentPath} from '../global/utils';
import {BasePage} from './base-page/base-page';

export class DialogPage extends BasePage {
    readonly component: DialogComponent;

    constructor(page: Page) {
        const dialogProps: ComponentProps = {
            page: page,
            testId: defaultTestId,
            componentId: dialogStoryId,
            loadedPageSelector: loadedPageSelector
        };

        super(dialogProps);
        this.component = new DialogComponent(page);
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
        return this.component.getDialogTitle({testId: this.testId});
    }

    openDialog() {
        return this.component.openDialog({testId: this.testId});
    }

    getDialogText() {
        return this.component.getDialogText({testId: this.testId});
    }

    getDialogSubtitle() {
        return this.component.getDialogSubtitle({testId: this.testId});
    }

    async closeDialog() {
        await this.component.closeDialog({testId: this.testId});
    }

    async clickOnPrimaryButton() {
        await this.component.clickOnPrimaryButton({testId: this.testId});
    }

    async clickOnDefaultButton() {
        await this.component.clickOnDefaultButton({testId: this.testId});
    }

    async clickOnDeleteButton() {
        await this.component.clickOnDeleteButton({testId: this.testId});
    }

    async waitForComponent() {
        await this.component.waitForComponent({testId: this.testId});
    }

    isDialogVisible() {
        return this.component.isDialogVisible({testId: this.testId});
    }
}
