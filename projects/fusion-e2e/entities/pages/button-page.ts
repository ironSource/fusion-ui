import {Page} from '@playwright/test';
import {BasePage} from './base-page/base-page';
import {ButtonComponent} from '../components/button/button-component';
import {ComponentProps} from './base-page/types';
import {buttonStoryId, defaultTestId, loadedPageSelector} from '../components/button/consts';
import {ButtonTestIdModifiers} from '@ironsource/fusion-ui/entities';

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
        await this.button.waitForComponent({testId: this.testId, modifiers: ButtonTestIdModifiers.BUTTON});
    }

    async waitForToggleButtonComponent() {
        await this.button.waitForToggleButtonComponent({testId: this.testId});
    }

    async clickOnButton() {
        await this.button.clickOnButton();
    }

    async hoverOnButton() {
        await this.button.hoverOnButton();
    }

    isButtonLoading() {
        return this.button.isButtonLoading({testId: this.testId});
    }

    getButtonText() {
        return this.button.getButtonText();
    }

    getIconButtonText() {
        return this.button.getIconButtonText({testId: this.testId});
    }

    isButtonDisabled() {
        return this.button.isButtonDisabled();
    }

    getToggleButtonFirstLabel() {
        return this.button.getToggleButtonFirstLabel();
    }
}
