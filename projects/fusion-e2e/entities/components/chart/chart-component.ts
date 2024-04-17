import {BaseComponent} from '../base-component';
import {getTestId} from '../../global/utils';
import {ChartLabelTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {Locator} from '@playwright/test';

export class ChartComponent extends BaseComponent {
    private labels = this.getByTestId(getTestId(this.selector, ChartLabelTestIdModifiers.LABEL));
    private iconModifier = ChartLabelTestIdModifiers.LABEL_ICON;
    private colorModifier = ChartLabelTestIdModifiers.LABEL_COLOR;

    constructor(page, selector: string) {
        super(page, selector);
    }

    async getLabelText({testId}: {testId: string}) {
        let label = await this.getByTestId(testId);
        return this.selectorText(label);
    }

    async getIcon(label: Locator) {
        const iconAttribute: Locator = label.getByTestId(getTestId(this.selector, this.iconModifier));
        return await iconAttribute.getAttribute('ng-reflect-name');
    }

    async getColor(label: Locator) {
        const colorAttribute: Locator = label.getByTestId(getTestId(this.selector, this.colorModifier));
        const style = await colorAttribute.getAttribute('style');
        return style
            .split(';')
            .find(style => style.trim().startsWith('background-color'))
            .split(':')[1]
            .trim();
    }

    async getLabels() {
        return await this.labels;
    }
}
