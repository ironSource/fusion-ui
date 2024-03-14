import {Page} from '@playwright/test';
import {FieldLabelTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {TestIdsService} from '@ironsource/fusion-ui/services/test-ids';

export class FieldLabelComponent {
    readonly page;

    constructor(page: Page) {
        this.page = page;
    }

    getLabelText({testId}: {testId: string}) {
        return this.page.getByTestId(TestIdsService.getTestId(testId, FieldLabelTestIdModifiers.TEXT)).textContent();
    }

    isMandatory({testId}: {testId: string}) {
        return this.page.getByTestId(TestIdsService.getTestId(testId, FieldLabelTestIdModifiers.MANDATORY)).isVisible();
    }

    async getHelpIconText({testId}: {testId: string}) {
        const helpIconSelector = await this.page.getByTestId(TestIdsService.getTestId(testId, FieldLabelTestIdModifiers.TOOLTIP));
        await helpIconSelector.hover();
        return helpIconSelector.getAttribute('text');
    }
}
