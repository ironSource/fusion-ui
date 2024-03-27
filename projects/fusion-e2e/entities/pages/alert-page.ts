import {AlertComponent} from '../components/alert/alert-component';
import {alertStoryId, defaultTestId, loadedPageSelector} from '../components/alert/const';
import {Page} from '@playwright/test';
import {BasePage} from './base-page/base-page';
import {ComponentProps} from './base-page/types';

export class AlertPage extends BasePage {
    readonly alert: AlertComponent;

    constructor(page: Page) {
        const alertProps: ComponentProps = {
            page: page,
            testId: defaultTestId,
            componentId: alertStoryId,
            loadedPageSelector: loadedPageSelector
        };

        super(alertProps);
        this.alert = new AlertComponent(page, this.testId);
    }

    getAlertText() {
        return this.alert.getAlertText();
    }

    getAlertTitle() {
        return this.alert.getAlertTitle();
    }

    async clickOnActionButton() {
        await this.alert.clickOnActionButton();
    }

    getActionButtonText() {
        return this.alert.getActionButtonText();
    }

    async closeAlert() {
        await this.alert.closeAlert();
    }

    isAlertVisible() {
        return this.alert.isAlertVisible();
    }

    async waitForComponent() {
        await this.alert.waitForComponent({testId: this.testId});
    }

    getAlertIconType() {
        return this.alert.getAlertIconType();
    }
}
