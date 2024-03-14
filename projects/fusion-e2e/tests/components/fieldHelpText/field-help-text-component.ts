import {HasHelpTextTypeParams} from './types';
import {TestIdsService, FieldHelpTextTestIdModifiers} from '@ironsource/fusion-ui/services/test-ids';

export class FieldHelpTextComponent {
    readonly page;

    constructor(page) {
        this.page = page;
    }

    hasExtraText({testId}: {testId: string}) {
        const byTestId = this.page.getByTestId(TestIdsService.getTestId(testId, FieldHelpTextTestIdModifiers.TEXT));
        return byTestId.isVisible();
    }

    getExtraText({testId}: {testId: string}) {
        return this.page.getByTestId(TestIdsService.getTestId(testId, FieldHelpTextTestIdModifiers.TEXT)).textContent();
    }

    async hasExtraTextIconType({testId, type}: HasHelpTextTypeParams) {
        const extraTextIconTypeLocator = await this.page
            .getByTestId(TestIdsService.getTestId(testId, FieldHelpTextTestIdModifiers.CONTAINER))
            .locator(`.icon.icon-name--${type}`);
        return (await extraTextIconTypeLocator.count()) !== 0;
    }
}
