import {getTestId} from '../../global/utils';
import {Page} from '@playwright/test';
import {FieldLabelTestIdModifiers} from '@ironsource/fusion-ui/entities';

export class FieldLabelComponent {
    readonly page;

    constructor(page: Page) {
        this.page = page;
    }

    getLabelText({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, FieldLabelTestIdModifiers.TEXT)).textContent();
    }

    isMandatory({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, FieldLabelTestIdModifiers.MANDATORY)).isVisible();
    }

    async getHelpIconText({testId}: {testId: string}) {
        const helpIconSelector = await this.page.getByTestId(getTestId(testId, FieldLabelTestIdModifiers.TOOLTIP));
        await helpIconSelector.hover();
        return helpIconSelector.getAttribute('text');
    }
}
