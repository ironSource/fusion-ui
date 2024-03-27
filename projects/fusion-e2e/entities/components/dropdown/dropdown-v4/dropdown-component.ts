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
    readonly fieldLabelComponent;
    readonly fieldHelpTextComponent;

    constructor(page, selector: string) {
        super(page, selector);
        this.fieldLabelComponent = new FieldLabelComponent(page, this.selector);
        this.fieldHelpTextComponent = new FieldHelpTextComponent(page, this.selector);
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

    async getSelectedLabel({testId}: {testId: string}) {
        const element = await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.BUTTON_CONTENT));
        return element.textContent();
    }

    async searchForItem({testId, searchTerm}: SearchItem) {
        await this.openDropdownComponent({testId});
        const inputElement = await (await this.getByTestId(getTestId(testId, InputTestIdModifiers.FIELD))).last();
        await inputElement.fill(searchTerm);
        const listElement = await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.LIST_CONTAINER));
        const firstItem = await listElement.locator('fusion-dropdown-options-list > li').first();
        return firstItem.textContent();
    }

    async isErrorText({testId}: {testId: string}) {
        const errorTextLocator = await this.getByTestId(getTestId(testId, FieldHelpTextTestIdModifiers.TEXT));
        const count = await errorTextLocator.count();
        return count > 0;
    }

    async isDropdownDisabled({testId}: {testId: string}) {
        const ddTriggerSelector = await (
            await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.TRIGGER))
        ).locator('.button__container--disabled');

        return ddTriggerSelector.isVisible();
    }

    async clearAllOptions({testId}: {testId: string}) {
        await (await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.ACTION_CLEAR_ALL))).click();
    }

    async isSelectAllChecked({testId}: {testId: string}) {
        const element = await (await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.SELECT_ALL))).locator('.fu-label-checkbox');
        return element.isChecked();
    }

    async isSelectAllIndeterminate({testId}: {testId: string}) {
        const locator = await (await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.SELECT_ALL))).locator('fusion-checkbox');
        return (await locator.getAttribute('ng-reflect-is-indeterminate')) === 'true';
    }

    async removeChipSelection({testId}: {testId: string}) {
        const element = await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.BUTTON_CLEAR));
        await element.click();
    }

    async getDropdownOptions({testId}: {testId: string}) {
        const element = await (await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.LIST_CONTAINER))).locator('.list');
        return element.allTextContents();
    }
}
