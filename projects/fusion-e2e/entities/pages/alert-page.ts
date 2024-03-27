import {AlertComponent} from '../components/alert/alert-component';
import {alertStoryId, defaultTestId, loadedPageSelector} from '../components/alert/const';
import {Page} from '@playwright/test';
import {BasePage} from './base-page/base-page';
import {ComponentProps} from './base-page/types';

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
        return this.component.getAlertText();
    }

    getAlertTitle() {
        return this.component.getAlertTitle();
    }

    async clickOnActionButton() {
        await this.component.clickOnActionButton();
    }

    getActionButtonText() {
        return this.component.getActionButtonText();
    }

    async closeAlert() {
        await this.component.closeAlert();
    }

    isAlertVisible() {
        return this.component.isAlertVisible();
    }

    async waitForComponent() {
        await this.component.waitForComponent({testId: this.testId});
    }

    getAlertIconType() {
        return this.component.getAlertIconType();
    }
}
