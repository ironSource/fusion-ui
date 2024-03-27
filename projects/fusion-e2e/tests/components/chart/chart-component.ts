import {BaseComponent} from '../base-component';

export class ChartComponent extends BaseComponent {
    constructor(page, selector: string) {
        super(page, selector);
    }

    async getLabelText({testId}: {testId: string}) {
        let label = await this.getByTestId(testId);
        return this.selectorText(label);
    }
}
