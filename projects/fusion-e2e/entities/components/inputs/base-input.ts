import {getTestId} from '../../global/utils';
import {InputParams} from './types';
import {InputTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {BaseComponent} from '../base-component';
import {Locator, Page} from '@playwright/test';

export class BaseInputComponent extends BaseComponent {
    constructor(page: Page, selector: string) {
        super(page, selector);
    }

    // Get the text of the input field
    async getInputsFieldText({testId}: {testId: string}): Promise<string> {
        const testIdSelector = getTestId(testId, InputTestIdModifiers.FIELD);
        const element: Locator = await this.getByTestId(testIdSelector);
        return element.inputValue();
    }

    // Get the placeholder text of the input
    async getPlaceholderText({testId}: {testId: string}): Promise<string> {
        const testIdSelector = getTestId(testId, InputTestIdModifiers.FIELD);
        const element: Locator = await this.getByTestId(testIdSelector);
        return element.getAttribute('placeholder');
    }

    // Get the type of the input
    async getInputsType({testId}: {testId: string}): Promise<string> {
        const testIdSelector = getTestId(testId, InputTestIdModifiers.FIELD);
        const element: Locator = await this.getByTestId(testIdSelector);
        return element.getAttribute('type');
    }

    // Add input to the input field
    async addInput({testId, text}: InputParams): Promise<void> {
        const testIdSelector = getTestId(testId, InputTestIdModifiers.FIELD);
        const element: Locator = await this.getByTestId(testIdSelector);
        await element.type(text as string);
    }

    // Clear the input field
    async clearInput({testId}: {testId: string}): Promise<void> {
        const testIdSelector = getTestId(testId, InputTestIdModifiers.FIELD);
        const element: Locator = await this.getByTestId(testIdSelector);
        await element.clear();
    }

    // Check if the input is disabled
    async isInputDisabled({testId}: {testId: string}): Promise<boolean> {
        const testIdSelector = getTestId(testId, InputTestIdModifiers.FIELD);
        const element: Locator = await this.getByTestId(testIdSelector);
        return element.isDisabled();
    }

    // Get the value of the input
    async getInputValue(): Promise<string> {
        return await this.locator.inputValue();
    }
}
