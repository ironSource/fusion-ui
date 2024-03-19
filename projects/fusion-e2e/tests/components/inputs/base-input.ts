import {Page} from '@playwright/test';
import {getTestId} from '../../global/utils';
import {InputParams} from './types';
import {InputTestIdModifiers} from '@ironsource/fusion-ui/entities';

export class BaseInputComponent {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getInputsFieldText({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, InputTestIdModifiers.FIELD)).inputValue();
    }

    getPlaceholderText({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, InputTestIdModifiers.FIELD)).getAttribute('placeholder');
    }

    getInputsType({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, InputTestIdModifiers.FIELD)).getAttribute('type');
    }

    async addInput({testId, text}: InputParams) {
        await this.page.getByTestId(getTestId(testId, InputTestIdModifiers.FIELD)).type(text as string);
    }

    async clearInput({testId}: {testId: string}) {
        await this.page.getByTestId(getTestId(testId, InputTestIdModifiers.FIELD)).clear();
    }

    isDisabled({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, InputTestIdModifiers.FIELD)).isDisabled();
    }
}
