import {ChipFilterTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {getTestId, getTestIdSelector} from '../../global/utils';
import {BaseComponent} from '../base-component';

export class ChipFilterComponent extends BaseComponent {
    constructor(page, selector: string) {
        super(page, selector);
    }

    async waitForComponent({testId}: {testId: string}) {
        const loadedPageSelector = getTestIdSelector(testId);
        await this.waitForSelector(loadedPageSelector);
    }

    async getChipFilterLabel({testId}: {testId: string}) {
        const element = await this.getByTestId(getTestId(testId, ChipFilterTestIdModifiers.CHIP_FILTER));
        const locator = await element.locator('.fu-chip-label');
        return locator.textContent();
    }

    async clickChipFilter({testId}: {testId: string}) {
        const element = await this.getByTestId(getTestId(testId, ChipFilterTestIdModifiers.CHIP_FILTER));
        const locator = await element.locator('.fu-chip-label');
        return locator.click();
    }
}
