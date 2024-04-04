import {BaseComponent} from '../base-component';
import {Page} from '@playwright/test';

export class ChartComponent extends BaseComponent {
    constructor(page: Page, selector: string) {
        super(page, selector);
    }

    async getLabelText({testId}: {testId: string}) {
        let label = await this.getByTestId(testId);
        return this.selectorText(label);
    }
}
