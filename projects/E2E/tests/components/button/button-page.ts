import {Page} from '@playwright/test';
import {ComponentBasePage} from '../base-page/component-base-page';
import {ButtonComponent} from './button-component';
import {ComponentProps} from '../base-page/types';
import {buttonStoryId, defaultTestId, loadedPageSelector} from './consts';

export class ButtonPage extends ComponentBasePage {
    readonly component: ButtonComponent;

    constructor(page: Page) {
        const buttonProps: ComponentProps = {
            page: page,
            testId: defaultTestId,
            componentId: buttonStoryId,
            loadedPageSelector: loadedPageSelector
        };

        super(buttonProps);
        this.component = new ButtonComponent(page);
    }

    async waitForComponent() {
        await this.component.waitForComponent({testId: this.testId});
    }

    async clickOnButton() {
        await this.component.clickOnButton({testId: this.testId});
    }

    isButtonLoading() {
        return this.component.isButtonLoading({testId: this.testId});
    }

    getButtonText() {
        return this.component.getButtonText({testId: this.testId});
    }

    isButtonDisabled() {
        return this.component.isButtonDisabled({testId: this.testId});
    }
}
