import {getTestId} from '../../global/utils';
import {InputTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {BaseComponent} from '../base-component';
import {Locator, Page} from '@playwright/test';

export class BaseInputComponent extends BaseComponent {
    constructor(page: Page, selector: string) {
        super(page, selector);
    }

    // Get the text of the input field
    async getInputsFieldText(): Promise<string> {
        const testIdSelector = getTestId(this.selector, InputTestIdModifiers.FIELD);
        const element: Locator = await this.getByTestId(testIdSelector);
        return element.inputValue();
    }

    // Get the placeholder text of the input
    async getPlaceholderText(): Promise<string> {
        const testIdSelector = getTestId(this.selector, InputTestIdModifiers.FIELD);
        const element: Locator = await this.getByTestId(testIdSelector);
        return element.getAttribute('placeholder');
    }

    // Get the type of the input
    async getInputsType(): Promise<string> {
        const testIdSelector = getTestId(this.selector, InputTestIdModifiers.FIELD);
        const element: Locator = await this.getByTestId(testIdSelector);
        return element.getAttribute('type');
    }

    // Add input to the input field
    async addInput({text}): Promise<void> {
        const testIdSelector = getTestId(this.selector, InputTestIdModifiers.FIELD);
        const element: Locator = await this.getByTestId(testIdSelector);
        await element.type(text as string);
    }

    // Clear the input field
    async clearInput(): Promise<void> {
        const testIdSelector = getTestId(this.selector, InputTestIdModifiers.FIELD);
        const element: Locator = await this.getByTestId(testIdSelector);
        await element.clear();
    }

    // Check if the input is disabled
    async isInputDisabled(): Promise<boolean> {
        const testIdSelector = getTestId(this.selector, InputTestIdModifiers.FIELD);
        const element: Locator = await this.getByTestId(testIdSelector);
        return element.isDisabled();
    }

    // Get the value of the input
    async getInputValue(): Promise<string> {
        return await this.locator.inputValue();
    }
}
