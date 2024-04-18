import {getTestId, getTestIdSelector} from '../../global/utils';
import {ButtonTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {BaseElement, Clickable} from '../../behavior';
import {StaticText} from '../../elements';
import {test} from '@playwright/test';
import {BaseComponent} from '../base-component';

export class ButtonComponent extends BaseComponent {
    protected button: Clickable;
    protected label: StaticText;
    contentElement: BaseElement;
    buttonModifierElement: BaseElement;
    buttonElement: BaseElement;

    constructor(page, selector: string) {
        super(page, selector);
        this.contentElement = new BaseElement(page, getTestIdSelector(getTestId(this.selector, ButtonTestIdModifiers.CONTENT)));
        this.buttonModifierElement = new BaseElement(page, getTestIdSelector(getTestId(this.selector, ButtonTestIdModifiers.BUTTON)));
        this.buttonElement = new BaseElement(page, getTestIdSelector(this.selector));
        this.button = new Clickable(page, selector);
        this.label = new StaticText(page, selector);
    }

    async waitForToggleButtonComponent() {
        const loadedPageSelector = getTestIdSelector(this.selector);
        await this.waitForSelector(loadedPageSelector);
    }

    async clickOnButton() {
        await this.buttonModifierElement.click();
    }

    async hoverOnButton() {
        await this.buttonModifierElement.hover();
    }

    async isButtonLoading() {
        const buttonLocator = await this.getLocator(getTestIdSelector(this.selector));
        const buttonElement = await buttonLocator.elementHandle();
        const buttonClass = await buttonElement.getAttribute('class');
        return buttonClass.includes('loading');
    }

    async getButtonText() {
        return this.contentElement.textContent();
    }

    async getIconButtonText() {
        const button = await this.getLocator(getTestIdSelector(this.selector));
        const textSelector = await button.last().locator('span');
        return this.selectorText(textSelector);
    }

    async isButtonDisabled() {
        return this.buttonElement.isDisabled();
    }

    async getToggleButtonFirstLabel() {
        return this.buttonElement.textContent();
    }

    async isIconExist(selector: string): Promise<boolean> {
        let numOfIcons: number;

        await test.step(`Is icon exist: ${selector}`, async () => {
            const isButtonWithIcon = await this.getLocator(selector);
            numOfIcons = await isButtonWithIcon.count();
        });

        return numOfIcons > 0;
    }

    async getButtonLabel(): Promise<string> {
        let labelSelector: string;

        await test.step(`Get button label`, async () => {
            labelSelector = await this.label.getText();
            if (labelSelector === null) {
                throw new Error(`Couldn't get text for the button: ${this.selector}`);
            }
        });

        return labelSelector;
    }
}
