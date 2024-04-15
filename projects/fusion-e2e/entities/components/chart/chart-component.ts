import {BaseComponent} from '../base-component';
import {getTestId} from '../../global/utils';
import {ChartLabelTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {Locator} from '@playwright/test';

export class ChartComponent extends BaseComponent {
    constructor(page, selector: string) {
        super(page, selector);
    }

    async getLabelText({testId}: {testId: string}) {
        let label = await this.getByTestId(testId);
        return this.selectorText(label);
    }

    async getIcon(testId: string, label: Locator) {
        const iconAttribute: Locator = label.getByTestId(getTestId(testId, ChartLabelTestIdModifiers.LABEL_ICON));
        return await iconAttribute.getAttribute('ng-reflect-name');
    }

    async getColor(testId: string, label: Locator) {
        const colorAttribute: Locator = label.getByTestId(getTestId(testId, ChartLabelTestIdModifiers.LABEL_COLOR));
        const style = await colorAttribute.getAttribute('style');
        return style
            .split(';')
            .find(style => style.trim().startsWith('background-color'))
            .split(':')[1]
            .trim();
    }

    async getLabels({testId}: {testId: string}) {
        return await this.getByTestId(getTestId(testId, ChartLabelTestIdModifiers.LABEL));
    }
}
