import {getTestId, getTestIdSelector} from '../../global/utils';
import {ButtonTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {BaseComponent} from '../base-component';

export class ButtonComponent extends BaseComponent {
    constructor(page, selector: string) {
        super(page, selector);
    }

    async waitForComponent({testId}: {testId: string}) {
        const loadedPageSelector = getTestIdSelector(getTestId(testId, ButtonTestIdModifiers.BUTTON));
        await this.waitForSelector(loadedPageSelector);
    }

    async waitForToggleButtonComponent({testId}: {testId: string}) {
        const loadedPageSelector = getTestIdSelector(testId);
        await this.waitForSelector(loadedPageSelector);
    }

    async clickOnButton({testId}: {testId: string}) {
        const element = await this.getByTestId(getTestId(testId, ButtonTestIdModifiers.BUTTON));
        await element.click();
    }

    async hoverOnButton({testId}: {testId: string}) {
        const element = await this.getByTestId(getTestId(testId, ButtonTestIdModifiers.BUTTON));
        await element.hover();
    }

    async isButtonLoading({testId}: {testId: string}) {
        const buttonLocator = await this.getByTestId(testId);
        const buttonElement = await buttonLocator.elementHandle();
        const buttonClass = await buttonElement.getAttribute('class');
        return buttonClass.includes('loading');
    }

    async getButtonText({testId}: {testId: string}) {
        const button = await this.getByTestId(getTestId(testId, ButtonTestIdModifiers.CONTENT));
        return button.textContent();
    }

    async getIconButtonText({testId}: {testId: string}) {
        const button = await this.getByTestId(testId);
        const textSelector = await button.last().locator('span');
        return textSelector.textContent();
    }

    async isButtonDisabled({testId}: {testId: string}) {
        const button = await this.getByTestId(testId);
        return button.isDisabled();
    }

    async getToggleButtonFirstLabel({testId}: {testId: string}) {
        const button = await this.getByTestId(testId);
        return button.textContent();
    }
}
