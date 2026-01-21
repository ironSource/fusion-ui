import {getTestId} from '../../global/utils';
import {InputParams} from './types';
import {InputTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {Editable} from '../../behavior';

export class BaseInputComponent extends Editable {
    constructor(page, selector: string) {
        super(page, selector);
    }

    async getInputField() {
        return await this.getByTestId(getTestId(this.selector, InputTestIdModifiers.FIELD));
    }

    async getInputsFieldText() {
        const element = await this.getInputField();
        return element.inputValue();
    }

    async getPlaceholderText() {
        const element = await this.getInputField();
        return element.getAttribute('placeholder');
    }

    async getInputsType() {
        const element = await this.getInputField();
        return element.getAttribute('type');
    }

    async addInput({text}: InputParams) {
        const element = await this.getInputField();
        await element.type(text as string);
    }

    async isInputDisabled() {
        const element = await this.getInputField();
        return element.isDisabled();
    }

    async getInputValue(): Promise<string> {
        return await this.locator.inputValue();
    }
}
