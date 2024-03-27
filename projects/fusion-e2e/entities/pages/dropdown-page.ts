import {Page} from '@playwright/test';
import {dropdownDefaultStoryId, loadedPageSelector} from '../components/dropdown/dropdown-v4/consts';
import {DropdownComponent} from '../components/dropdown/dropdown-v4/dropdown-component';
import {BasePage} from './base-page/base-page';
import {ComponentProps} from './base-page/types';
import {testIdWithIndex} from '../components/dropdown/consts';

export class DropdownPage extends BasePage {
    readonly dropdown: DropdownComponent;

    constructor(page: Page) {
        const dropdownProps: ComponentProps = {
            page: page,
            testId: testIdWithIndex,
            componentId: dropdownDefaultStoryId,
            loadedPageSelector: loadedPageSelector
        };

        super(dropdownProps);
        this.dropdown = new DropdownComponent(page, this.testId);
    }

    async selectDropdownOptionByIndex(index: number) {
        await this.dropdown.selectDropdownOptionByIndex({
            testId: this.testId,
            index
        });
    }

    getSelectedLabel() {
        return this.dropdown.getSelectedLabel({testId: this.testId});
    }

    getDropdownTitle() {
        return this.dropdown.getDropdownTitle({testId: this.testId});
    }

    async selectDropdownOptionByName(name: string) {
        await this.dropdown.selectDropdownOptionByName({
            testId: this.testId,
            name
        });
    }

    async selectMultipleItems(itemsToSelect: number[], applyChanges = true) {
        await this.dropdown.selectMultipleItemsByIndex({
            testId: this.testId,
            itemsToSelect
        });
        if (applyChanges) {
            await this.dropdown.clickOnApply({testId: this.testId});
        }
    }

    async clickOnCancel() {
        await this.dropdown.clickOnCancel({testId: this.testId});
    }

    searchForItem(searchTerm: string) {
        return this.dropdown.searchForItem({
            testId: this.testId,
            searchTerm
        });
    }

    async selectMultipleItemsByName(itemsToSelect: string[], applyChanges = true) {
        await this.dropdown.selectMultipleItemsByName({
            testId: this.testId,
            itemsToSelect
        });
        if (applyChanges) {
            await this.dropdown.clickOnApply({testId: this.testId});
        }
    }

    isErrorState() {
        return this.dropdown.isErrorText({testId: this.testId});
    }

    isDisabled() {
        return this.dropdown.isDropdownDisabled({testId: this.testId});
    }

    async clearAllOptions() {
        await this.dropdown.clearAllOptions({testId: this.testId});
    }

    async openDropdownComponent() {
        await this.dropdown.openDropdownComponent({testId: this.testId});
    }

    async clickOnApply() {
        await this.dropdown.clickOnApply({testId: this.testId});
    }

    isSelectAllChecked() {
        return this.dropdown.isSelectAllChecked({testId: this.testId});
    }

    isSelectAllIndeterminate() {
        return this.dropdown.isSelectAllIndeterminate({testId: this.testId});
    }

    async removeChipSelection() {
        await this.dropdown.removeChipSelection({testId: this.testId});
    }

    async waitForComponent() {
        await this.dropdown.waitForComponent({testId: this.testId});
    }

    getDropdownOptions() {
        return this.dropdown.getDropdownOptions({testId: this.testId});
    }
}
