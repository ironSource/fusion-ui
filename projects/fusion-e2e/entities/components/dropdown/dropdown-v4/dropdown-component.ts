import {getTestId} from '../../../global/utils';
import {BaseDropdownComponent} from '../base-dropdown';
import {FieldLabelComponent} from '../../fieldLabel/field-label-component';
import {FieldHelpTextComponent} from '../../fieldHelpText/field-help-text-component';
import {HasHelpTextTypeParams} from '../../fieldHelpText/types';
import {
    DropdownTestIdModifiers,
    FieldHelpTextTestIdModifiers,
    InputTestIdModifiers
} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {Locator} from '@playwright/test';

type SearchItem = {
    selector: string;
    searchTerm: string;
};

export class DropdownComponent extends BaseDropdownComponent {
    readonly fieldLabelComponent;
    readonly fieldHelpTextComponent;

    constructor(page, selector: string) {
        super(page, selector);
        this.fieldLabelComponent = new FieldLabelComponent(page, selector);
        this.fieldHelpTextComponent = new FieldHelpTextComponent(page, selector);
    }

    getDropdownTitle() {
        return this.fieldLabelComponent.getLabelText();
    }

    isMandatory() {
        return this.fieldLabelComponent.isMandatory();
    }

    getHelpIconText() {
        return this.fieldLabelComponent.getHelpIconText();
    }

    hasExtraText() {
        return this.fieldHelpTextComponent.hasExtraText();
    }

    getExtraText() {
        return this.fieldHelpTextComponent.getExtraText();
    }

    hasExtraTextIconType({type}: HasHelpTextTypeParams) {
        return this.fieldHelpTextComponent.hasExtraTextIconType({testId: this.selector, type: type});
    }

    async getSelectedLabel() {
        const element: Locator = await this.getByTestId(getTestId(this.selector, DropdownTestIdModifiers.BUTTON_CONTENT));
        return element.textContent();
    }

    async searchForItem({selector, searchTerm}: SearchItem) {
        await this.openDropdownComponent();
        const inputElement = await (await this.getByTestId(getTestId(selector, InputTestIdModifiers.FIELD))).last();
        await inputElement.fill(searchTerm);
        const listElement = await this.getByTestId(getTestId(selector, DropdownTestIdModifiers.LIST_CONTAINER));
        const firstItem = await listElement.locator('fusion-dropdown-options-list > li').first();
        return firstItem.textContent();
    }

    async isErrorText() {
        const errorTextLocator = await this.getByTestId(getTestId(this.selector, FieldHelpTextTestIdModifiers.TEXT));
        const count = await errorTextLocator.count();
        return count > 0;
    }

    async isDropdownDisabled() {
        const ddTriggerSelector = await (
            await this.getByTestId(getTestId(this.selector, DropdownTestIdModifiers.TRIGGER))
        ).locator('.button__container--disabled');

        return ddTriggerSelector.isVisible();
    }

    async clearAllOptions() {
        await (await this.getByTestId(getTestId(this.selector, DropdownTestIdModifiers.ACTION_CLEAR_ALL))).click();
    }

    async isSelectAllChecked() {
        const element = await (
            await this.getByTestId(getTestId(this.selector, DropdownTestIdModifiers.SELECT_ALL))
        ).locator('.fu-label-checkbox');
        return element.isChecked();
    }

    async isSelectAllIndeterminate() {
        const locator = await (
            await this.getByTestId(getTestId(this.selector, DropdownTestIdModifiers.SELECT_ALL))
        ).locator('fusion-checkbox');
        return (await locator.getAttribute('ng-reflect-is-indeterminate')) === 'true';
    }

    async removeChipSelection() {
        const element = await this.getByTestId(getTestId(this.selector, DropdownTestIdModifiers.BUTTON_CLEAR));
        await element.click();
    }

    async getDropdownOptions() {
        const element = await (await this.getByTestId(getTestId(this.selector, DropdownTestIdModifiers.LIST_CONTAINER))).locator('.list');
        return element.allTextContents();
    }
}
