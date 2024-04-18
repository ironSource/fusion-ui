import {InputTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {Page} from '@playwright/test';
import {BaseElement, Editable} from '../../behavior';
import {getTestId, getTestIdSelector} from '../../global/utils';

export class BaseInputComponent extends Editable {
    private inputElement: BaseElement;

    constructor(page: Page, selector: string) {
        super(page, selector);
        this.inputElement = new BaseElement(page, getTestIdSelector(getTestId(this.selector, InputTestIdModifiers.FIELD)));
    }

    // Get the text of the input field
    async getInputsFieldText(): Promise<string> {
        return this.inputElement.locator.inputValue();
    }

    // Get the placeholder text of the input
    async getPlaceholderText(): Promise<string> {
        return this.inputElement.locator.getAttribute('placeholder');
    }

    // Get the type of the input
    async getInputsType(): Promise<string> {
        return this.inputElement.locator.getAttribute('type');
    }

    // Add input to the input field
    async addInput({text}): Promise<void> {
        await this.inputElement.locator.type(text as string);
    }

    // Check if the input is disabled
    async isInputDisabled(): Promise<boolean> {
        return this.inputElement.locator.isDisabled();
    }

    // Get the value of the input
    async getInputValue(): Promise<string> {
        return this.locator.inputValue();
    }
}
