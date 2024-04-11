import {BaseComponent} from '../base-component';
import {getTestId} from '../../global/utils';
import {ChartLabelTestIdModifiers} from '@ironsource/fusion-ui/entities';

export class ChartComponent extends BaseComponent {
    constructor(page, selector: string) {
        super(page, selector);
    }

    async getLabelText({testId}: {testId: string}) {
        let label = await this.getByTestId(testId);
        return this.selectorText(label);
    }

    async getIcon({testId}: {testId: string}) {
        let icon = await this.getByTestId(getTestId(testId, ChartLabelTestIdModifiers.LABEL_ICON));
        return icon.locator('svg');
    }
}
