import {TooltipTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {getTestId} from '../../global/utils';
import {BaseComponent} from '../base-component';
import {Locator, Page} from '@playwright/test';

export class TooltipComponent extends BaseComponent {
    constructor(page: Page, selector: string) {
        super(page, selector);
    }

    // Get the text of the tooltip
    async getTooltipText({testId}: {testId: string}): Promise<string> {
        const testIdSelector = getTestId(testId, TooltipTestIdModifiers.TRIGGER);
        const triggerLocator: Locator = await this.getByTestId(testIdSelector);
        const lastTriggerLocator: Locator = triggerLocator.last();
        const spanLocator: Locator = lastTriggerLocator.locator('span');
        return spanLocator.textContent();
    }

    // Get the header text of the tooltip
    async getTooltipHeaderText({testId}: {testId: string}): Promise<string> {
        const testIdSelector = getTestId(testId, TooltipTestIdModifiers.TRIGGER);
        const triggerLocator: Locator = await this.getByTestId(testIdSelector);
        const lastTriggerLocator: Locator = triggerLocator.last();
        return lastTriggerLocator.getAttribute('header');
    }
}
