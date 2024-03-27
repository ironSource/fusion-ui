import {getTestId} from '../../global/utils';
import {SelectionByIndex, SelectionByName, SelectMultiple, SelectMultipleByName} from './types';
import {DropdownTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {BaseComponent} from '../base-component';
import {Locator} from '@playwright/test';

export class BaseDropdownComponent extends BaseComponent {
    constructor(page, selector: string) {
        super(page, selector);
    }

    async waitForComponent({testId}: {testId: string}) {
        await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.WRAPPER));
    }

    async selectDropdownOptionByIndex({testId, index}: SelectionByIndex) {
        await this.openDropdownComponent({testId: testId});
        const element: Locator = await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.LIST_CONTAINER));
        const locator: Locator = element.locator('fusion-dropdown-options-list > li').nth(index);
        await locator.click();
    }

    async getDropdownButtonContent(testId: string) {
        const element: Locator = await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.BUTTON_CONTENT));
        return element.textContent();
    }

    async openDropdownComponent({testId}: {testId: string}) {
        const element = await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.TRIGGER));
        await element.click({
            position: {
                x: 15,
                y: 15
            }
        });
    }

    async selectDropdownOptionByName({testId, name, shouldOpen = true}: SelectionByName) {
        if (shouldOpen) await this.openDropdownComponent({testId: testId});
        const element: Locator = await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.LIST_CONTAINER));
        const locator: Locator = element.locator('fusion-dropdown-options-list > li', {hasText: name});
        await locator.click();
    }

    async selectMultipleItemsByIndex({testId, itemsToSelect}: SelectMultiple) {
        await this.openDropdownComponent({testId: testId});
        for (const i of itemsToSelect) {
            const element: Locator = await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.LIST_CONTAINER));
            const locator: Locator = element.locator('ul > li').nth(i);
            await locator.click();
        }
    }

    async selectMultipleItemsByName({testId, itemsToSelect}: SelectMultipleByName) {
        await this.openDropdownComponent({testId: testId});
        for (const name of itemsToSelect) {
            const element: Locator = await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.LIST_CONTAINER));
            const locator: Locator = element.locator('ul > li', {hasText: name}).first();
            await locator.click();
        }
    }

    async clickOnApply({testId}: {testId: string}) {
        const element: Locator = await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.ACTION_APPLY));
        await element.click();
    }

    async clickOnCancel({testId}: {testId: string}) {
        const element: Locator = await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.ACTION_CANCEL));
        await element.click();
    }
}
