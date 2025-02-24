import {getTestId} from '../../global/utils';
import {FieldLabelTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {BaseComponent} from '../base-component';

export class FieldLabelComponent extends BaseComponent {
    constructor(page, selector: string) {
        super(page, selector);
    }

    async getLabelText() {
        return (await this.getByTestId(getTestId(this.selector, FieldLabelTestIdModifiers.TEXT))).textContent();
    }

    async isMandatory() {
        return (await this.getByTestId(getTestId(this.selector, FieldLabelTestIdModifiers.MANDATORY))).isVisible();
    }

    async getHelpIconText() {
        const helpIconSelector = await this.getByTestId(getTestId(this.selector, FieldLabelTestIdModifiers.TOOLTIP));
        await helpIconSelector.hover();
        return helpIconSelector.getAttribute('text');
    }
}
