import {getTestId} from '../../global/utils';
import {TrendIndicatorTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {BaseComponent} from '../base-component';
import {Locator, Page} from '@playwright/test';

export class TrendIndicatorComponent extends BaseComponent {
    locator: Locator;

    constructor(page: Page, selector: string) {
        super(page, selector);
        this.initializeLocator().then(r => r);
    }

    private async initializeLocator() {
        const testIdSelector = getTestId(this.selector, TrendIndicatorTestIdModifiers.VALUE);
        this.locator = await this.getByTestId(testIdSelector);
    }

    // Get the value of the trend indicator
    async getTrendIndicatorValue(): Promise<string> {
        return this.locator.textContent();
    }
}
