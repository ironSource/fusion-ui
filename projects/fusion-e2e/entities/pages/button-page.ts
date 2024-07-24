import {Page} from '@playwright/test';
import {BasePage} from './base-page/base-page';
import {ButtonComponent} from '../components/button/button-component';
import {ComponentProps} from './base-page/types';
import {buttonStoryId, defaultTestId, loadedPageSelector} from '../components/button/consts';

export class ButtonPage extends BasePage {
    readonly button: ButtonComponent;

    constructor(page: Page) {
        const buttonProps: ComponentProps = {
            page: page,
            testId: defaultTestId,
            componentId: buttonStoryId,
            loadedPageSelector: loadedPageSelector
        };

        super(buttonProps);
        this.button = new ButtonComponent(page, this.testId);
    }

    async waitForComponent() {
        await this.button.waitForComponent();
    }

    async waitForToggleButtonComponent() {
        await this.button.waitForToggleButtonComponent();
    }

    async clickOnButton() {
        await this.button.clickOnButton();
    }

    async hoverOnButton() {
        await this.button.hoverOnButton();
    }

    isButtonLoading() {
        return this.button.isButtonLoading();
    }

    getButtonText() {
        return this.button.getButtonText();
    }

    getIconButtonText() {
        return this.button.getIconButtonText();
    }

    isButtonDisabled() {
        return this.button.isButtonDisabled();
    }

    getToggleButtonFirstLabel() {
        return this.button.getToggleButtonFirstLabel();
    }
}
