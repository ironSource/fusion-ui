import {getTestId} from '../../global/utils';
import {FieldLabelTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {BaseComponent} from '../base-component';

export class FieldLabelComponent extends BaseComponent {
    constructor(page, selector: string) {
        super(page, selector);
    }

    async getLabelText({testId}: {testId: string}) {
        return (await this.getByTestId(getTestId(testId, FieldLabelTestIdModifiers.TEXT))).textContent();
    }

    async isMandatory({testId}: {testId: string}) {
        return (await this.getByTestId(getTestId(testId, FieldLabelTestIdModifiers.MANDATORY))).isVisible();
    }

    async getHelpIconText({testId}: {testId: string}) {
        const helpIconSelector = await this.getByTestId(getTestId(testId, FieldLabelTestIdModifiers.TOOLTIP));
        await helpIconSelector.hover();
        return helpIconSelector.getAttribute('text');
    }
}
