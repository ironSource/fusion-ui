import {getTestId} from '../../global/utils';
import {TrendIndicatorTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {BaseComponent} from '../base-component';

export class TrendIndicatorComponent extends BaseComponent {
    constructor(page, selector: string) {
        super(page, selector);
    }

    async getTrendIndicatorValue({testId}: {testId: string}) {
        const locator = this.getByTestId(getTestId(testId, TrendIndicatorTestIdModifiers.VALUE));
        return (await locator).textContent();
    }
}
