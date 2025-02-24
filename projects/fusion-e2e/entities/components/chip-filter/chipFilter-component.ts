import {ChipFilterTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {getTestId, getTestIdSelector} from '../../global/utils';
import {BaseComponent} from '../base-component';
import {StaticText} from '../../elements';
import {Page} from '@playwright/test';
import {Clickable} from '../../behavior';

export class ChipFilterComponent extends BaseComponent {
    chipFilterElement: Clickable;
    chipFilterLabel: StaticText;

    constructor(page: Page, selector: string) {
        super(page, selector);
        const chipFilterSelector = getTestIdSelector(getTestId(selector, ChipFilterTestIdModifiers.CHIP_FILTER));
        this.chipFilterElement = new Clickable(page, chipFilterSelector);
        this.chipFilterLabel = new StaticText(page, `${chipFilterSelector} .fu-chip-label`);
    }

    async getChipFilterLabel() {
        return this.chipFilterLabel.getText();
    }

    async clickChipFilter() {
        return this.chipFilterElement.click();
    }
}
