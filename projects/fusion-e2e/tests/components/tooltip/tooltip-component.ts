import {TooltipTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {getTestId} from '../../global/utils';
import {BaseComponent} from '../base-component';

export class TooltipComponent extends BaseComponent {
    constructor(page, selector: string) {
        super(page, selector);
    }

    async getTooltipText({testId}: {testId: string}) {
        const locator = (await this.getByTestId(getTestId(testId, TooltipTestIdModifiers.TRIGGER))).last().locator('span');
        return locator.textContent();
    }

    async getTooltipHeaderText({testId}: {testId: string}) {
        return (await this.getByTestId(getTestId(testId, TooltipTestIdModifiers.TRIGGER))).last().getAttribute('header');
    }
}
