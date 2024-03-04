import {getTestId} from '../../global/utils';
import {HasHelpTextTypeParams} from './types';
import {FieldHelpTextTestIdModifiers} from '@ironsource/fusion-ui/entities';

export class FieldHelpTextComponent {
    readonly page;

    constructor(page) {
        this.page = page;
    }

    hasExtraText({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, FieldHelpTextTestIdModifiers.TEXT)).isVisible();
    }

    getExtraText({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, FieldHelpTextTestIdModifiers.TEXT)).textContent();
    }

    async hasExtraTextIconType({testId, type}: HasHelpTextTypeParams) {
        const extraTextIconTypeLocator = await this.page
            .getByTestId(getTestId(testId, FieldHelpTextTestIdModifiers.CONTAINER))
            .locator(`.icon.icon-name--${type}`);
        return (await extraTextIconTypeLocator.count()) !== 0;
    }
}
