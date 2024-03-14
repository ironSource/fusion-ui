import {Page} from '@playwright/test';
import {SelectionByIndex, SelectionByName, SelectMultiple, SelectMultipleByName} from './types';
import {DropdownTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {TestIdsService} from '@ironsource/fusion-ui/services/test-ids';

export class BaseDropdownComponent {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForComponent({testId}: {testId: string}) {
        this.page.getByTestId(TestIdsService.getTestId(testId, DropdownTestIdModifiers.WRAPPER));
    }

    async selectDropdownOptionByIndex({testId, index}: SelectionByIndex) {
        await this.openDropdownComponent({testId: testId});
        await this.page
            .getByTestId(TestIdsService.getTestId(testId, DropdownTestIdModifiers.LIST_CONTAINER))
            .locator('fusion-dropdown-options-list > li')
            .nth(index)
            .click();
    }

    async getDropdownButtonContent(testId: string) {
        await this.page.getByTestId(TestIdsService.getTestId(testId, DropdownTestIdModifiers.BUTTON_CONTENT)).textContent();
    }

    async openDropdownComponent({testId}: {testId: string}) {
        await this.page.getByTestId(TestIdsService.getTestId(testId, DropdownTestIdModifiers.TRIGGER)).click({
            position: {
                x: 15,
                y: 15
            }
        });
    }

    async selectDropdownOptionByName({testId, name, shouldOpen = true}: SelectionByName) {
        if (shouldOpen) await this.openDropdownComponent({testId: testId});
        await this.page
            .getByTestId(TestIdsService.getTestId(testId, DropdownTestIdModifiers.LIST_CONTAINER))
            .locator('fusion-dropdown-options-list > li', {hasText: name})
            .click();
    }

    async selectMultipleItemsByIndex({testId, itemsToSelect}: SelectMultiple) {
        await this.openDropdownComponent({testId: testId});
        for (const i of itemsToSelect) {
            await this.page
                .getByTestId(TestIdsService.getTestId(testId, DropdownTestIdModifiers.LIST_CONTAINER))
                .locator('ul > li')
                .nth(i)
                .click();
        }
    }

    async selectMultipleItemsByName({testId, itemsToSelect}: SelectMultipleByName) {
        await this.openDropdownComponent({testId: testId});
        for (const name of itemsToSelect) {
            await this.page
                .getByTestId(TestIdsService.getTestId(testId, DropdownTestIdModifiers.LIST_CONTAINER))
                .locator('ul > li', {hasText: name})
                .first()
                .click();
        }
    }

    async clickOnApply({testId}: {testId: string}) {
        await this.page.getByTestId(TestIdsService.getTestId(testId, DropdownTestIdModifiers.ACTION_APPLY)).click();
    }

    async clickOnCancel({testId}: {testId: string}) {
        await this.page.getByTestId(TestIdsService.getTestId(testId, DropdownTestIdModifiers.ACTION_CANCEL)).click();
    }
}
