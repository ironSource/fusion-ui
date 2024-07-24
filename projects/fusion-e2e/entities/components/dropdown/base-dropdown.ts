import {getTestId} from '../../global/utils';
import {SelectionByIndex, SelectionByName, SelectMultiple, SelectMultipleByName} from './types';
import {DropdownTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {BaseComponent} from '../base-component';
import {Locator} from '@playwright/test';

export class BaseDropdownComponent extends BaseComponent {
    constructor(page, selector: string) {
        super(page, selector);
    }

    async waitForComponent() {
        await this.getByTestId(getTestId(this.selector, DropdownTestIdModifiers.WRAPPER));
    }

    async selectDropdownOptionByIndex({index}: SelectionByIndex) {
        await this.openDropdownComponent();
        const element: Locator = await this.getByTestId(getTestId(this.selector, DropdownTestIdModifiers.LIST_CONTAINER));
        const locator: Locator = element.locator('fusion-dropdown-options-list > li').nth(index);
        await locator.click();
    }

    async getDropdownButtonContent() {
        const element: Locator = await this.getByTestId(getTestId(this.selector, DropdownTestIdModifiers.BUTTON_CONTENT));
        return element.textContent();
    }

    async openDropdownComponent() {
        const element = await this.getByTestId(getTestId(this.selector, DropdownTestIdModifiers.TRIGGER));
        await element.click({
            position: {
                x: 15,
                y: 15
            }
        });
    }

    async selectDropdownOptionByName({name, shouldOpen = true}: SelectionByName) {
        if (shouldOpen) await this.openDropdownComponent();
        const element: Locator = await this.getByTestId(getTestId(this.selector, DropdownTestIdModifiers.LIST_CONTAINER));
        const locator: Locator = element.locator('fusion-dropdown-options-list > li', {hasText: name});
        await locator.click();
    }

    async selectMultipleItemsByIndex({itemsToSelect}: SelectMultiple) {
        await this.openDropdownComponent();
        for (const i of itemsToSelect) {
            const element: Locator = await this.getByTestId(getTestId(this.selector, DropdownTestIdModifiers.LIST_CONTAINER));
            const locator: Locator = element.locator('ul > li').nth(i);
            await locator.click();
        }
    }

    async selectMultipleItemsByName({itemsToSelect}: SelectMultipleByName) {
        await this.openDropdownComponent();
        for (const name of itemsToSelect) {
            const element: Locator = await this.getByTestId(getTestId(this.selector, DropdownTestIdModifiers.LIST_CONTAINER));
            const locator: Locator = element.locator('ul > li', {hasText: name}).first();
            await locator.click();
        }
    }

    async clickOnApply() {
        const element: Locator = await this.getByTestId(getTestId(this.selector, DropdownTestIdModifiers.ACTION_APPLY));
        await element.click();
    }

    async clickOnCancel() {
        const element: Locator = await this.getByTestId(getTestId(this.selector, DropdownTestIdModifiers.ACTION_CANCEL));
        await element.click();
    }
}
