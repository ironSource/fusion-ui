import {getTestId, getTestIdSelector} from '../../global/utils';
import {ButtonTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {BaseElement} from '../../behavior';
import {Button} from '../../elements';

export class ButtonComponent extends Button {
    private contentElement: BaseElement;
    private buttonModifierElement: BaseElement;
    private buttonElement: BaseElement;

    constructor(page, selector: string) {
        super(page, selector);
        this.contentElement = new BaseElement(page, getTestIdSelector(getTestId(this.selector, ButtonTestIdModifiers.CONTENT)));
        this.buttonModifierElement = new BaseElement(page, getTestIdSelector(getTestId(this.selector, ButtonTestIdModifiers.BUTTON)));
        this.buttonElement = new BaseElement(page, getTestIdSelector(this.selector));
    }

    async waitForToggleButtonComponent({testId}: {testId: string}) {
        const loadedPageSelector = getTestIdSelector(testId);
        await this.waitForSelector(loadedPageSelector);
    }

    async clickOnButton() {
        await this.buttonModifierElement.click();
    }

    async hoverOnButton() {
        await this.buttonModifierElement.hover();
    }

    async isButtonLoading({testId}: {testId: string}) {
        const buttonLocator = await this.getByTestId(testId);
        const buttonElement = await buttonLocator.elementHandle();
        const buttonClass = await buttonElement.getAttribute('class');
        return buttonClass.includes('loading');
    }

    async getButtonText() {
        return this.contentElement.textContent();
    }

    async getIconButtonText({testId}: {testId: string}) {
        const button = await this.getByTestId(testId);
        const textSelector = await button.last().locator('span');
        return this.selectorText(textSelector);
    }

    async isButtonDisabled() {
        return this.buttonElement.isDisabled();
    }

    async getToggleButtonFirstLabel() {
        return this.buttonElement.textContent();
    }
}
