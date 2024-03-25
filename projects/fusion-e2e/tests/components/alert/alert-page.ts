import {AlertComponent} from './alert-component';
import {alertStoryId, defaultTestId, loadedPageSelector} from './consts';
import {Page} from '@playwright/test';
import {BasePage} from '../base-page/base-page';
import {ComponentProps} from '../base-page/types';

export class AlertPage extends BasePage {
    readonly component: AlertComponent;

    constructor(page: Page) {
        const alertProps: ComponentProps = {
            page: page,
            testId: defaultTestId,
            componentId: alertStoryId,
            loadedPageSelector: loadedPageSelector
        };

        super(alertProps);
        this.component = new AlertComponent(page, this.testId);
    }

    getAlertText() {
        return this.component.getAlertText({testId: this.testId});
    }

    getAlertTitle() {
        return this.component.getAlertTitle({testId: this.testId});
    }

    async clickOnActionButton() {
        await this.component.clickOnActionButton({testId: this.testId});
    }

    getActionButtonText() {
        return this.component.getActionButtonText({testId: this.testId});
    }

    async closeAlert() {
        await this.component.closeAlert({testId: this.testId});
    }

    isAlertVisible() {
        return this.component.isAlertVisible({testId: this.testId});
    }

    async waitForComponent() {
        await this.component.waitForComponent({testId: this.testId});
    }

    getAlertIconType() {
        return this.component.getAlertIconType({testId: this.testId});
    }
}
