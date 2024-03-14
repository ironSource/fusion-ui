import {AlertComponent} from './alert-component';
import {Page} from '@playwright/test';
import {ComponentBasePage} from '../base-page/component-base-page';
import {ComponentProps} from '../base-page/types';
import {AlertConsts} from '@ironsource/fusion-ui/testIds';

export class AlertPage extends ComponentBasePage {
    readonly component: AlertComponent;

    constructor(page: Page) {
        const alertProps: ComponentProps = {
            page: page,
            testId: AlertConsts.defaultTestId,
            componentId: AlertConsts.alertStoryId,
            loadedPageSelector: AlertConsts.loadedPageSelector
        };

        super(alertProps);
        this.component = new AlertComponent(page);
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
