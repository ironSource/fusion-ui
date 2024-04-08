import {getTestId} from '../../global/utils';
import {HasHelpTextTypeParams} from './types';
import {FieldHelpTextTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {BaseComponent} from '../base-component';
import {Locator, Page} from '@playwright/test';

export class FieldHelpTextComponent extends BaseComponent {
    constructor(page: Page, selector: string) {
        super(page, selector);
    }

    // Check if the extra text is visible
    async hasExtraText({testId}: {testId: string}): Promise<boolean> {
        const testIdSelector = getTestId(testId, FieldHelpTextTestIdModifiers.TEXT);
        const byTestId: Locator = await this.getByTestId(testIdSelector);
        return (await byTestId).isVisible();
    }

    // Get the extra text
    async getExtraText({testId}: {testId: string}): Promise<string> {
        const testIdSelector = getTestId(testId, FieldHelpTextTestIdModifiers.TEXT);
        const byTestId: Locator = await this.getByTestId(testIdSelector);
        return byTestId.textContent();
    }

    // Check if the extra text icon type is present
    async hasExtraTextIconType({testId, type}: HasHelpTextTypeParams): Promise<boolean> {
        const testIdSelector = getTestId(testId, FieldHelpTextTestIdModifiers.CONTAINER);
        const containerLocator: Locator = await this.getByTestId(testIdSelector);
        const extraTextIconTypeLocator: Locator = await containerLocator.locator(`.icon.icon-name--${type}`);
        return (await extraTextIconTypeLocator.count()) !== 0;
    }
}
