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
        return this.dropdown.getSelectedLabel();
    }

    getDropdownTitle() {
        return this.dropdown.getDropdownTitle();
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
            await this.dropdown.clickOnApply();
        }
    }

    async clickOnCancel() {
        await this.dropdown.clickOnCancel();
    }

    searchForItem(searchTerm: string) {
        return this.dropdown.searchForItem({
            selector: this.testId,
            searchTerm
        });
    }

    async selectMultipleItemsByName(itemsToSelect: string[], applyChanges = true) {
        await this.dropdown.selectMultipleItemsByName({
            testId: this.testId,
            itemsToSelect
        });
        if (applyChanges) {
            await this.dropdown.clickOnApply();
        }
    }

    isErrorState() {
        return this.dropdown.isErrorText();
    }

    isDisabled() {
        return this.dropdown.isDropdownDisabled();
    }

    async clearAllOptions() {
        await this.dropdown.clearAllOptions();
    }

    async openDropdownComponent() {
        await this.dropdown.openDropdownComponent();
    }

    async clickOnApply() {
        await this.dropdown.clickOnApply();
    }

    isSelectAllChecked() {
        return this.dropdown.isSelectAllChecked();
    }

    isSelectAllIndeterminate() {
        return this.dropdown.isSelectAllIndeterminate();
    }

    async removeChipSelection() {
        await this.dropdown.removeChipSelection();
    }

    async waitForComponent() {
        await this.dropdown.waitForComponent();
    }

    getDropdownOptions() {
        return this.dropdown.getDropdownOptions();
    }
}
