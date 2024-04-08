import {getTestId} from '../../global/utils';
import {TrendIndicatorTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {BaseComponent} from '../base-component';
import {Locator, Page} from '@playwright/test';

export class TrendIndicatorComponent extends BaseComponent {
    constructor(page: Page, selector: string) {
        super(page, selector);
    }

    // Get the value of the trend indicator
    async getTrendIndicatorValue({testId}: {testId: string}): Promise<string> {
        const testIdSelector = getTestId(testId, TrendIndicatorTestIdModifiers.VALUE);
        const locator: Locator = await this.getByTestId(testIdSelector);
        return locator.textContent();
    }
}
