import {ChipFilterTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {getTestId, getTestIdSelector} from '../../global/utils';
import {BaseComponent} from '../base-component';
import {Locator} from '@playwright/test';

export class ChipFilterComponent extends BaseComponent {
    constructor(page, selector: string) {
        super(page, selector);
    }

    async getChipFilterLabel({testId}: {testId: string}) {
        const element: Locator = await this.getLocator(getTestIdSelector(getTestId(testId, ChipFilterTestIdModifiers.CHIP_FILTER)));
        const locator: Locator = await element.locator('.fu-chip-label');
        return locator.textContent();
    }

    async clickChipFilter({testId}: {testId: string}) {
        const element: Locator = await this.getLocator(getTestIdSelector(getTestId(testId, ChipFilterTestIdModifiers.CHIP_FILTER)));
        const locator = await element.locator('.fu-chip-label');
        return locator.click();
    }
}
