import {getTestId} from '../../global/utils';
import {HasHelpTextTypeParams} from './types';
import {FieldHelpTextTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {BaseComponent} from '../base-component';

export class FieldHelpTextComponent extends BaseComponent {
    constructor(page, selector: string) {
        super(page, selector);
    }

    async hasExtraText({testId}: {testId: string}) {
        const byTestId = this.getByTestId(getTestId(testId, FieldHelpTextTestIdModifiers.TEXT));
        return (await byTestId).isVisible();
    }

    async getExtraText({testId}: {testId: string}) {
        return (await this.getByTestId(getTestId(testId, FieldHelpTextTestIdModifiers.TEXT))).textContent();
    }

    async hasExtraTextIconType({testId, type}: HasHelpTextTypeParams) {
        const extraTextIconTypeLocator = await (
            await this.getByTestId(getTestId(testId, FieldHelpTextTestIdModifiers.CONTAINER))
        ).locator(`.icon.icon-name--${type}`);
        return (await extraTextIconTypeLocator.count()) !== 0;
    }
}