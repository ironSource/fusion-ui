import {TooltipTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {getTestId} from '../../global/utils';
import {BaseComponent} from '../base-component';
import {Locator, Page} from '@playwright/test';

export class TooltipComponent extends BaseComponent {
    private triggerLocator: Locator;

    constructor(page: Page, selector: string) {
        super(page, selector);
        this.initializeLocator().then(r => r);
    }

    private async initializeLocator() {
        const testIdSelector = getTestId(this.selector, TooltipTestIdModifiers.TRIGGER);
        this.triggerLocator = await this.getByTestId(testIdSelector);
    }

    // Get the text of the tooltip
    async getTooltipText(): Promise<string> {
        const lastTriggerLocator: Locator = this.triggerLocator.last();
        const spanLocator: Locator = lastTriggerLocator.locator('span');
        return spanLocator.textContent();
    }

    // Get the header text of the tooltip
    async getTooltipHeaderText(): Promise<string> {
        const lastTriggerLocator: Locator = this.triggerLocator.last();
        return lastTriggerLocator.getAttribute('header');
    }
}
