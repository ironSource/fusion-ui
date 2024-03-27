import {getTestId} from '../../global/utils';
import {InputParams} from './types';
import {InputTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {Editable} from '../../behavior';

export class BaseInputComponent extends Editable {
    constructor(page, selector: string) {
        super(page, selector);
    }

    async getInputsFieldText({testId}: {testId: string}) {
        const element = await this.getByTestId(getTestId(testId, InputTestIdModifiers.FIELD));
        return element.inputValue();
    }

    async getPlaceholderText({testId}: {testId: string}) {
        const element = await this.getByTestId(getTestId(testId, InputTestIdModifiers.FIELD));
        return element.getAttribute('placeholder');
    }

    async getInputsType({testId}: {testId: string}) {
        const element = await this.getByTestId(getTestId(testId, InputTestIdModifiers.FIELD));
        return element.getAttribute('type');
    }

    async addInput({testId, text}: InputParams) {
        const element = await this.getByTestId(getTestId(testId, InputTestIdModifiers.FIELD));
        await element.type(text as string);
    }

    async isInputDisabled({testId}: {testId: string}) {
        const element = await this.getByTestId(getTestId(testId, InputTestIdModifiers.FIELD));
        return element.isDisabled();
    }

    async getInputValue(): Promise<string> {
        return await this.locator.inputValue();
    }
}
