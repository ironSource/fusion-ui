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

    async waitForToggleButtonComponent() {
        await this.component.waitForToggleButtonComponent({testId: this.testId});
    }

    async clickOnButton() {
        await this.component.clickOnButton({testId: this.testId});
    }

    async hoverOnButton() {
        await this.component.hoverOnButton({testId: this.testId});
    }

    isButtonLoading() {
        return this.component.isButtonLoading({testId: this.testId});
    }

    getButtonText() {
        return this.component.getButtonText({testId: this.testId});
    }

    getIconButtonText() {
        return this.component.getIconButtonText({testId: this.testId});
    }

    isButtonDisabled() {
        return this.component.isButtonDisabled({testId: this.testId});
    }

    getToggleButtonFirstLabel() {
        return this.component.getToggleButtonFirstLabel({testId: this.testId});
    }
}
