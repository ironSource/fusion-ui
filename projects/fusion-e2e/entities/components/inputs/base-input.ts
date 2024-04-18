import {InputTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {Locator, Page} from '@playwright/test';
import {Editable} from '../../behavior';
import {getTestId} from '../../global/utils';

export class BaseInputComponent extends Editable {
    private readonly inputTestIdSelector: string;
    private inputLocator: Locator;

    constructor(page: Page, selector: string) {
        super(page, selector);
        this.inputTestIdSelector = getTestId(selector, InputTestIdModifiers.FIELD);
        this.initializeElement().then(r => r);
    }

    private async initializeElement() {
        this.inputLocator = await this.getByTestId(this.inputTestIdSelector);
    }

    // Get the text of the input field
    async getInputsFieldText(): Promise<string> {
        return this.inputLocator.inputValue();
    }

    // Get the placeholder text of the input
    async getPlaceholderText(): Promise<string> {
        return this.inputLocator.getAttribute('placeholder');
    }

    // Get the type of the input
    async getInputsType(): Promise<string> {
        return this.inputLocator.getAttribute('type');
    }

    // Add input to the input field
    async addInput({text}): Promise<void> {
        await this.inputLocator.type(text as string);
    }

    // Check if the input is disabled
    async isInputDisabled(): Promise<boolean> {
        return this.inputLocator.isDisabled();
    }

    // Get the value of the input
    async getInputValue(): Promise<string> {
        return this.locator.inputValue();
    }
}
