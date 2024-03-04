import {expect, Page} from '@playwright/test';
import {defaultTestId, dropdownDefaultStoryId, loadedPageSelector} from './consts';
import {DropdownComponentV3} from './dropdown-component';
import {ComponentBasePage} from '../../base-page/component-base-page';
import {ComponentProps} from '../../base-page/types';
import {DropdownTestIdModifiers} from '@ironsource/fusion-ui/entities';

export class DropdownPage extends ComponentBasePage {
    readonly component: DropdownComponentV3;

    constructor(page: Page) {
        const dropdownProps: ComponentProps = {
            page: page,
            testId: defaultTestId,
            componentId: dropdownDefaultStoryId,
            loadedPageSelector: loadedPageSelector
        };

        super(dropdownProps);
        this.component = new DropdownComponentV3(this.page);
    }

    async openDropDown() {
        await this.component.openDropdownComponent({testId: this.testId});
    }

    getDropdownTitle() {
        return this.component.getDropdownTitle({testId: this.testId});
    }

    async selectDropdownOptionByIndex(index: number) {
        await this.component.selectDropdownOptionByIndex({
            testId: this.testId,
            index
        });
    }

    async selectDropdownOptionByName(name: string) {
        await this.component.selectDropdownOptionByName({
            testId: this.testId,
            name
        });
    }

    async selectMultipleItems(itemsToSelect: number[], applyChanges = true) {
        await this.component.selectMultipleItemsByIndex({
            testId: this.testId,
            itemsToSelect
        });
        if (applyChanges) {
            await this.component.clickOnApply({testId: this.testId});
        }
    }

    async selectMultipleItemsByName(itemsToSelect: string[], applyChanges = true) {
        await this.component.selectMultipleItemsByName({
            testId: this.testId,
            itemsToSelect
        });
        if (applyChanges) {
            await this.component.clickOnApply({testId: this.testId});
        }
    }

    async verifyClickOutOfFocus() {
        await this.openDropDown();
        await this.page.click('body');
        const dropdownHandler = await this.page.locator(DropdownTestIdModifiers.LIST_CONTAINER);
        await expect(dropdownHandler).toHaveCount(0);
    }

    searchForItem(searchTerm: string) {
        return this.component.searchForItem({
            testId: this.testId,
            searchTerm
        });
    }

    getSelectedItem() {
        return this.component.getSelectedItem({testId: this.testId});
    }

    async clickOnCancel() {
        await this.component.clickOnCancel({testId: this.testId});
    }

    async waitForComponent() {
        await this.component.waitForComponent({testId: this.testId});
    }
}
