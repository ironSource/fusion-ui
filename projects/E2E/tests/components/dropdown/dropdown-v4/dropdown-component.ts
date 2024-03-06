import {Page} from '@playwright/test';

import {getTestId} from '../../../global/utils';
import {BaseDropdownComponent} from '../base-dropdown';
import {FieldLabelComponent} from '../../fieldLabel/field-label-component';
import {FieldHelpTextComponent} from '../../fieldHelpText/field-help-text-component';
import {HasHelpTextTypeParams} from '../../fieldHelpText/types';
import {DropdownTestIdModifiers, FieldHelpTextTestIdModifiers, InputTestIdModifiers} from '@ironsource/fusion-ui/entities';

type SearchItem = {
    testId: string;
    searchTerm: string;
};

export class DropdownComponent extends BaseDropdownComponent {
    private readonly fieldLabelComponent;
    private readonly fieldHelpTextComponent;

    constructor(page: Page) {
        super(page);
        this.fieldLabelComponent = new FieldLabelComponent(page);
        this.fieldHelpTextComponent = new FieldHelpTextComponent(page);
    }

    getDropdownTitle({testId}: {testId: string}) {
        return this.fieldLabelComponent.getLabelText({testId: testId});
    }

    isMandatory({testId}: {testId: string}) {
        return this.fieldLabelComponent.isMandatory({testId: testId});
    }

    getHelpIconText({testId}: {testId: string}) {
        return this.fieldLabelComponent.getHelpIconText({testId: testId});
    }

    hasExtraText({testId}: {testId: string}) {
        return this.fieldHelpTextComponent.hasExtraText({testId: testId});
    }

    getExtraText({testId}: {testId: string}) {
        return this.fieldHelpTextComponent.getExtraText({testId: testId});
    }

    hasExtraTextIconType({testId, type}: HasHelpTextTypeParams) {
        return this.fieldHelpTextComponent.hasExtraTextIconType({testId, type});
    }

    getSelectedLabel({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, DropdownTestIdModifiers.BUTTON_CONTENT)).textContent();
    }

    async searchForItem({testId, searchTerm}: SearchItem) {
        await this.openDropdownComponent({testId});
        await this.page.getByTestId(getTestId(testId, InputTestIdModifiers.FIELD)).fill(searchTerm);
        return this.page
            .getByTestId(getTestId(testId, DropdownTestIdModifiers.LIST_CONTAINER))
            .locator('fusion-dropdown-options-list > li')
            .first()
            .textContent();
    }

    async isErrorText({testId}: {testId: string}) {
        const errorTextLocator = await this.page.getByTestId(getTestId(testId, FieldHelpTextTestIdModifiers.TEXT)).count();
        return errorTextLocator > 0;
    }

    async isDisabled({testId}: {testId: string}) {
        const ddTriggerSelector = await this.page
            .getByTestId(getTestId(testId, DropdownTestIdModifiers.TRIGGER))
            .locator('.button__container--disabled');

        return ddTriggerSelector.isVisible();
    }

    async clearAllOptions({testId}: {testId: string}) {
        await this.page.getByTestId(getTestId(testId, DropdownTestIdModifiers.ACTION_CLEAR_ALL)).click();
    }

    isSelectAllChecked({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, DropdownTestIdModifiers.SELECT_ALL)).locator('.fu-label-checkbox').isChecked();
    }

    async isSelectAllIndeterminate({testId}: {testId: string}) {
        const locator = this.page.getByTestId(getTestId(testId, DropdownTestIdModifiers.SELECT_ALL)).locator('fusion-checkbox');
        return (await locator.getAttribute('ng-reflect-is-indeterminate')) === 'true';
    }

    async removeChipSelection({testId}: {testId: string}) {
        await this.page.getByTestId(getTestId(testId, DropdownTestIdModifiers.BUTTON_CLEAR)).click();
    }

    getDropdownOptions({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, DropdownTestIdModifiers.LIST_CONTAINER)).locator('.list').allTextContents();
    }
}
