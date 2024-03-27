import {Page} from '@playwright/test';
import {BasePage} from './base-page/base-page';
import {ButtonComponent} from '../components/button/button-component';
import {ComponentProps} from './base-page/types';
import {buttonStoryId, defaultTestId, loadedPageSelector} from '../components/button/consts';
import {ButtonTestIdModifiers} from '@ironsource/fusion-ui/entities';

export class ButtonPage extends BasePage {
    readonly component: ButtonComponent;

    constructor(page: Page) {
        const buttonProps: ComponentProps = {
            page: page,
            testId: defaultTestId,
            componentId: buttonStoryId,
            loadedPageSelector: loadedPageSelector
        };

        super(buttonProps);
        this.component = new ButtonComponent(page, this.testId);
    }

    async waitForComponent() {
        await this.component.waitForComponent({testId: this.testId, modifiers: ButtonTestIdModifiers.BUTTON});
    }

    async waitForToggleButtonComponent() {
        await this.component.waitForToggleButtonComponent({testId: this.testId});
    }

    async clickOnButton() {
        await this.component.clickOnButton();
    }

    async hoverOnButton() {
        await this.component.hoverOnButton();
    }

    isButtonLoading() {
        return this.component.isButtonLoading({testId: this.testId});
    }

    getButtonText() {
        return this.component.getButtonText();
    }

    getIconButtonText() {
        return this.component.getIconButtonText({testId: this.testId});
    }

    isButtonDisabled() {
        return this.component.isButtonDisabled();
    }

    getToggleButtonFirstLabel() {
        return this.component.getToggleButtonFirstLabel();
    }
}
