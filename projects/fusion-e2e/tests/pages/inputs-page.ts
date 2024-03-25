import {Page} from '@playwright/test';
import {InputsComponent} from '../components/inputs/input-v4/inputs-component';
import {defaultTestId, inputsStoryId, loadedPageSelector} from '../components/inputs/input-v4/consts';
import {BasePage} from './base-page/base-page';
import {ComponentProps} from './base-page/types';

export class InputsPage extends BasePage {
    readonly component: InputsComponent;

    constructor(page: Page) {
        const inputsProps: ComponentProps = {
            page: page,
            testId: defaultTestId,
            componentId: inputsStoryId,
            loadedPageSelector: loadedPageSelector
        };

        super(inputsProps);
        this.component = new InputsComponent(page);
    }

    getInputsFieldText() {
        return this.component.getInputsFieldText({testId: this.testId});
    }

    getInputsLabelText() {
        return this.component.getInputsLabelText({testId: this.testId});
    }

    addInput({textInput}: {textInput: string}) {
        return this.component.addInput({
            testId: this.testId,
            text: textInput
        });
    }

    isInputMandatory() {
        return this.component.isInputMandatory({testId: this.testId});
    }

    getPlaceholderText() {
        return this.component.getPlaceholderText({testId: this.testId});
    }

    hasInputExtraText() {
        return this.component.hasInputExtraText({testId: this.testId});
    }

    getInputExtraText() {
        return this.component.getInputExtraText({testId: this.testId});
    }

    getInputsType() {
        return this.component.getInputsType({testId: this.testId});
    }

    hasInlineErrorText() {
        return this.component.hasInlineErrorText({testId: this.testId});
    }

    getInlineErrorText() {
        return this.component.getInlineErrorText({testId: this.testId});
    }

    async clickOnApplyButton() {
        await this.component.clickOnApplyButton({testId: this.testId});
    }

    hasApplyButton() {
        return this.component.hasApplyButton({testId: this.testId});
    }

    hasExtraTextIconType({type}: {type: string}) {
        return this.component.hasExtraTextIconType({
            testId: this.testId,
            type: type
        });
    }

    isDisabled() {
        return this.component.isDisabled({testId: this.testId});
    }

    getMaxLengthNumber() {
        return this.component.getMaxLengthNumber({testId: this.testId});
    }

    getActualNumberLength() {
        return this.component.getActualNumberLength({testId: this.testId});
    }

    getHelpIconText() {
        return this.component.getHelpIconText({testId: this.testId});
    }

    async clickOnShowPassword() {
        await this.component.clickOnShowPassword({testId: this.testId});
    }

    async clickOnHidePassword() {
        await this.component.clickOnHidePassword({testId: this.testId});
    }

    isPasswordHidden() {
        return this.component.isPasswordHidden({testId: this.testId});
    }

    async waitForComponent() {
        return this.component.waitForComponent({testId: this.testId});
    }

    async clearInput() {
        await this.component.clearInput({testId: this.testId});
    }
}
