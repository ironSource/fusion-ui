import {Page} from '@playwright/test';
import {InputsComponent} from '../components/inputs/input-v4/inputs-component';
import {defaultTestId, inputsStoryId, loadedPageSelector} from '../components/inputs/input-v4/consts';
import {BasePage} from './base-page/base-page';
import {ComponentProps} from './base-page/types';
import {InputTestIdModifiers} from '@ironsource/fusion-ui/entities';

export class InputsPage extends BasePage {
    readonly input: InputsComponent;

    constructor(page: Page) {
        const inputsProps: ComponentProps = {
            page: page,
            testId: defaultTestId,
            componentId: inputsStoryId,
            loadedPageSelector: loadedPageSelector
        };

        super(inputsProps);
        this.input = new InputsComponent(page, this.testId);
    }

    getInputsFieldText() {
        return this.input.getInputsFieldText({testId: this.testId});
    }

    getInputsLabelText() {
        return this.input.getInputsLabelText({testId: this.testId});
    }

    addInput({textInput}: {textInput: string}) {
        return this.input.addInput({
            testId: this.testId,
            text: textInput
        });
    }

    isInputMandatory() {
        return this.input.isInputMandatory({testId: this.testId});
    }

    getPlaceholderText() {
        return this.input.getPlaceholderText({testId: this.testId});
    }

    hasInputExtraText() {
        return this.input.hasInputExtraText({testId: this.testId});
    }

    getInputExtraText() {
        return this.input.getInputExtraText({testId: this.testId});
    }

    getInputsType() {
        return this.input.getInputsType({testId: this.testId});
    }

    hasInlineErrorText() {
        return this.input.hasInlineErrorText({testId: this.testId});
    }

    getInlineErrorText() {
        return this.input.getInlineErrorText({testId: this.testId});
    }

    async clickOnApplyButton() {
        await this.input.clickOnApplyButton({testId: this.testId});
    }

    hasApplyButton() {
        return this.input.hasApplyButton({testId: this.testId});
    }

    hasExtraTextIconType({type}: {type: string}) {
        return this.input.hasExtraTextIconType({
            testId: this.testId,
            type: type
        });
    }

    isInputDisabled() {
        return this.input.isInputDisabled({testId: this.testId});
    }

    getMaxLengthNumber() {
        return this.input.getMaxLengthNumber({testId: this.testId});
    }

    getActualNumberLength() {
        return this.input.getActualNumberLength({testId: this.testId});
    }

    getHelpIconText() {
        return this.input.getHelpIconText({testId: this.testId});
    }

    async clickOnShowPassword() {
        await this.input.clickOnShowPassword({testId: this.testId});
    }

    async clickOnHidePassword() {
        await this.input.clickOnHidePassword({testId: this.testId});
    }

    isPasswordHidden() {
        return this.input.isPasswordHidden({testId: this.testId});
    }

    async waitForComponent() {
        return this.input.waitForComponent({testId: this.testId, modifiers: InputTestIdModifiers.WRAPPER});
    }

    async clearInput() {
        await this.input.clearInput({testId: this.testId});
    }
}
