import {Page} from '@playwright/test';
import {InputsComponent} from '../components/inputs/input-v4/inputs-component';
import {defaultTestId, inputsStoryId, loadedPageSelector} from '../components/inputs/input-v4/consts';
import {BasePage} from './base-page/base-page';
import {ComponentProps} from './base-page/types';
import {InputTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';

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
        return this.input.getInputsFieldText();
    }

    getInputsLabelText() {
        return this.input.getInputsLabelText();
    }

    addInput({textInput}: {textInput: string}) {
        return this.input.addInput({
            text: textInput
        });
    }

    isInputMandatory() {
        return this.input.isInputMandatory();
    }

    getPlaceholderText() {
        return this.input.getPlaceholderText();
    }

    hasInputExtraText() {
        return this.input.hasInputExtraText();
    }

    getInputExtraText() {
        return this.input.getInputExtraText();
    }

    getInputsType() {
        return this.input.getInputsType();
    }

    hasInlineErrorText() {
        return this.input.hasInlineErrorText();
    }

    getInlineErrorText() {
        return this.input.getInlineErrorText();
    }

    async clickOnApplyButton() {
        await this.input.clickOnApplyButton();
    }

    hasApplyButton() {
        return this.input.hasApplyButton();
    }

    hasExtraTextIconType({type}: {type: string}) {
        return this.input.hasExtraTextIconType({
            testId: this.testId,
            type: type
        });
    }

    isInputDisabled() {
        return this.input.isInputDisabled();
    }

    getMaxLengthNumber() {
        return this.input.getMaxLengthNumber();
    }

    getActualNumberLength() {
        return this.input.getActualNumberLength();
    }

    getHelpIconText() {
        return this.input.getHelpIconText();
    }

    async clickOnShowPassword() {
        await this.input.clickOnShowPassword();
    }

    async clickOnHidePassword() {
        await this.input.clickOnHidePassword();
    }

    isPasswordHidden() {
        return this.input.isPasswordHidden();
    }

    async waitForComponent() {
        return this.input.waitForComponent(InputTestIdModifiers.WRAPPER);
    }

    async clearInput() {
        await this.input.clearInput();
    }
}
