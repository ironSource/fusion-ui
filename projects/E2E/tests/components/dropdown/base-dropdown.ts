import {Page} from '@playwright/test';
import {getTestId} from '../../global/utils';
import {SelectionByIndex, SelectionByName, SelectMultiple, SelectMultipleByName} from './types';
import {DropdownTestIdModifiers} from '@ironsource/fusion-ui/entities';

export class BaseDropdownComponent {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForComponent({testId}: {testId: string}) {
        this.page.getByTestId(getTestId(testId, DropdownTestIdModifiers.WRAPPER));
    }

    async selectDropdownOptionByIndex({testId, index}: SelectionByIndex) {
        await this.openDropdownComponent({testId: testId});
        const locator = await this.page
            .getByTestId(getTestId(testId, DropdownTestIdModifiers.LIST_CONTAINER))
            .locator('ul > li')
            .nth(index);
        locator.click();
    }

    async getDropdownButtonContent(testId: string) {
        await this.page.getByTestId(getTestId(testId, DropdownTestIdModifiers.BUTTON_CONTENT)).textContent();
    }

    async openDropdownComponent({testId}: {testId: string}) {
        await this.page.getByTestId(getTestId(testId, DropdownTestIdModifiers.TRIGGER_BY_INDEX)).click({position: {x: 15, y: 15}});
    }

    async selectDropdownOptionByName({testId, name, shouldOpen = true}: SelectionByName) {
        if (shouldOpen) await this.openDropdownComponent({testId: testId});
        await this.page
            .getByTestId(getTestId(testId, DropdownTestIdModifiers.LIST_CONTAINER))
            .locator('ul > li span', {hasText: name})
            .click();
    }

    async selectMultipleItemsByIndex({testId, itemsToSelect}: SelectMultiple) {
        await this.openDropdownComponent({testId: testId});
        for (const i of itemsToSelect) {
            await this.page.getByTestId(getTestId(testId, DropdownTestIdModifiers.LIST_CONTAINER)).locator('ul > li').nth(i).click();
        }
    }

    async selectMultipleItemsByName({testId, itemsToSelect}: SelectMultipleByName) {
        await this.openDropdownComponent({testId: testId});
        for (const name of itemsToSelect) {
            await this.page
                .getByTestId(getTestId(testId, DropdownTestIdModifiers.LIST_CONTAINER))
                .locator('ul > li span', {hasText: name})
                .first()
                .click();
        }
    }

    async clickOnApply({testId}: {testId: string}) {
        await this.page.getByTestId(getTestId(testId, DropdownTestIdModifiers.ACTION_APPLY)).click();
    }

    async clickOnCancel({testId}: {testId: string}) {
        await this.page.getByTestId(getTestId(testId, DropdownTestIdModifiers.ACTION_CANCEL)).click();
    }
}
