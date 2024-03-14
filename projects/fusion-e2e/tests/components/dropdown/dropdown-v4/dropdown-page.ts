import {Page} from '@playwright/test';
import {DropdownComponent} from './dropdown-component';
import {ComponentBasePage} from '../../base-page/component-base-page';
import {ComponentProps} from '../../base-page/types';
import {DropdownConsts} from '@ironsource/fusion-ui/services/test-ids';

export class DropdownPage extends ComponentBasePage {
    readonly component: DropdownComponent;

    constructor(page: Page) {
        const dropdownProps: ComponentProps = {
            page: page,
            testId: DropdownConsts.testIdWithIndex,
            componentId: DropdownConsts.dropdownStoryId,
            loadedPageSelector: DropdownConsts.loadedPageSelector
        };

        super(dropdownProps);
        this.component = new DropdownComponent(page);
    }

    async selectDropdownOptionByIndex(index: number) {
        await this.component.selectDropdownOptionByIndex({
            testId: this.testId,
            index
        });
    }

    getSelectedLabel() {
        return this.component.getSelectedLabel({testId: this.testId});
    }

    getDropdownTitle() {
        return this.component.getDropdownTitle({testId: this.testId});
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

    async clickOnCancel() {
        await this.component.clickOnCancel({testId: this.testId});
    }

    searchForItem(searchTerm: string) {
        return this.component.searchForItem({
            testId: this.testId,
            searchTerm
        });
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

    isErrorState() {
        return this.component.isErrorText({testId: this.testId});
    }

    isDisabled() {
        return this.component.isDisabled({testId: this.testId});
    }

    async clearAllOptions() {
        await this.component.clearAllOptions({testId: this.testId});
    }

    async openDropdownComponent() {
        await this.component.openDropdownComponent({testId: this.testId});
    }

    async clickOnApply() {
        await this.component.clickOnApply({testId: this.testId});
    }

    isSelectAllChecked() {
        return this.component.isSelectAllChecked({testId: this.testId});
    }

    isSelectAllIndeterminate() {
        return this.component.isSelectAllIndeterminate({testId: this.testId});
    }

    async removeChipSelection() {
        await this.component.removeChipSelection({testId: this.testId});
    }

    async waitForComponent() {
        await this.component.waitForComponent({testId: this.testId});
    }

    getDropdownOptions() {
        return this.component.getDropdownOptions({testId: this.testId});
    }
}
