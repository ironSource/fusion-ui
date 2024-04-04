import {getTestId, getTestIdSelector} from '../../global/utils';
import {ButtonTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {BaseElement, Clickable} from '../../behavior';
import {StaticText} from '../../elements';
import {Page, test} from '@playwright/test';
import {BaseComponent} from '../base-component';

export class ButtonComponent extends BaseComponent {
    protected button: Clickable;
    protected label: StaticText;
    contentElement: BaseElement;
    buttonModifierElement: BaseElement;
    buttonElement: BaseElement;

    constructor(page: Page, selector: string) {
        super(page, selector);
        this.contentElement = new BaseElement(page, getTestIdSelector(getTestId(this.selector, ButtonTestIdModifiers.CONTENT)));
        this.buttonModifierElement = new BaseElement(page, getTestIdSelector(getTestId(this.selector, ButtonTestIdModifiers.BUTTON)));
        this.buttonElement = new BaseElement(page, getTestIdSelector(this.selector));
        this.button = new Clickable(page, selector);
        this.label = new StaticText(page, selector);
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
        const buttonLocator = await this.getLocator(getTestIdSelector(testId));
        const buttonElement = await buttonLocator.elementHandle();
        if (buttonElement) {
            const buttonClass = await buttonElement.getAttribute('class');
            return buttonClass ? buttonClass.includes('loading') : false;
        }
        return false;
    }

    async getButtonText() {
        return this.contentElement.textContent();
    }

    async getIconButtonText({testId}: {testId: string}) {
        const button = await this.getLocator(getTestIdSelector(testId));
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
        let numOfIcons: number = 0;

        await test.step(`Is icon exist: ${selector}`, async () => {
            const isButtonWithIcon = await this.getLocator(selector);
            numOfIcons = await isButtonWithIcon.count();
        });

        return numOfIcons > 0;
    }

    async getButtonLabel(): Promise<string> {
        let labelSelector: string = '';

        await test.step(`Get button label`, async () => {
            labelSelector = await this.label.getText();
            if (labelSelector === null) {
                throw new Error(`Couldn't get text for the button: ${this.selector}`);
            }
        });

        return labelSelector;
    }
}
