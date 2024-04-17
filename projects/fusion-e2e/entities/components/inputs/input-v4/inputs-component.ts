import {BaseInputComponent} from '../base-input';
import {FieldLabelComponent} from '../../fieldLabel/field-label-component';
import {FieldHelpTextComponent} from '../../fieldHelpText/field-help-text-component';
import {HasHelpTextTypeParams} from '../../fieldHelpText/types';
import {InputTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {getTestId} from '../../../global/utils';
import {Locator, Page} from '@playwright/test';

export class InputsComponent extends BaseInputComponent {
    readonly fieldLabelComponent: FieldLabelComponent;
    readonly fieldHelpTextComponent: FieldHelpTextComponent;

    constructor(page: Page, selector: string) {
        super(page, selector);
        this.fieldLabelComponent = new FieldLabelComponent(page, selector);
        this.fieldHelpTextComponent = new FieldHelpTextComponent(page, selector);
    }

    async getWrapperLocator() {
        return this.getByTestId(getTestId(this.selector, InputTestIdModifiers.WRAPPER));
    }

    async getInputFieldSelector() {
        return this.getByTestId(getTestId(this.selector, InputTestIdModifiers.FIELD));
    }

    async getTooltipFieldSelector() {
        return this.getByTestId(getTestId(this.selector, InputTestIdModifiers.TOOLTIP));
    }

    async getPasswordFieldSelector() {
        return this.getByTestId(getTestId(this.selector, InputTestIdModifiers.TOGGLE_PASSWORD));
    }

    getInputsLabelText(): Promise<string> {
        return this.fieldLabelComponent.getLabelText();
    }

    isInputMandatory(): Promise<boolean> {
        return this.fieldLabelComponent.isMandatory();
    }

    hasInputExtraText(): Promise<boolean> {
        return this.fieldHelpTextComponent.hasExtraText();
    }

    getInputExtraText(): Promise<string> {
        return this.fieldHelpTextComponent.getExtraText();
    }

    async clickOnApplyButton(): Promise<void> {
        const applyButtonSelector: Locator = (await this.getWrapperLocator()).locator('.icon.icon-name--check');
        await applyButtonSelector.click();
    }

    async hasInlineErrorText(): Promise<boolean> {
        return (await this.getTooltipFieldSelector()).isVisible();
    }

    async getInlineErrorText(): Promise<string> {
        const inlineErrorSelector: Locator = await this.getTooltipFieldSelector();
        await inlineErrorSelector.hover();
        return inlineErrorSelector.getAttribute('text');
    }

    async clickOnShowPassword(): Promise<void> {
        if (await this.isPasswordHidden()) {
            await this.clickOnPasswordIcon();
        }
    }

    async clickOnPasswordIcon(): Promise<void> {
        const passwordFieldSelector = await this.getPasswordFieldSelector();
        await passwordFieldSelector.click();
    }

    async clickOnHidePassword(): Promise<void> {
        if (!(await this.isPasswordHidden())) {
            await this.clickOnPasswordIcon();
        }
    }

    async isPasswordHidden(): Promise<boolean> {
        const hiddenPasswordLocator: Locator = (await this.getPasswordFieldSelector()).locator('.fu-show-password-button eye-slash');
        return hiddenPasswordLocator.isVisible();
    }

    async clearInput(): Promise<void> {
        const inputFieldSelector = await this.getInputFieldSelector();
        await inputFieldSelector.clear();
    }

    async isInputDisabled(): Promise<boolean> {
        const inputFieldSelector = await this.getInputFieldSelector();
        return inputFieldSelector.isDisabled();
    }

    async hasApplyButton(): Promise<boolean> {
        const wrapperLocator = await this.getWrapperLocator();
        const applyButtonLocator: Locator = wrapperLocator.locator('.icon.icon-name--check');
        return applyButtonLocator.isVisible();
    }

    async getMaxLengthNumber(): Promise<string> {
        const inputFieldSelector = await this.getInputFieldSelector();
        return inputFieldSelector.getAttribute('maxlength');
    }

    async getActualNumberLength(): Promise<number> {
        const inputFieldSelector = await this.getInputFieldSelector();
        const value: string = await inputFieldSelector.getAttribute('value');
        return value.length;
    }

    async getFontCaptionText(): Promise<number[]> {
        const fontCaptionLocator: Locator = (await this.getWrapperLocator()).locator('.font-caption');
        const fontCaptionText: string = await fontCaptionLocator.textContent();
        return fontCaptionText.split('/').map(str => parseInt(str.trim(), 10));
    }

    getHelpIconText(): Promise<string> {
        return this.fieldLabelComponent.getHelpIconText();
    }

    async hasExtraTextIconType({type}: HasHelpTextTypeParams): Promise<boolean> {
        return this.fieldHelpTextComponent.hasExtraTextIconType({testId: this.selector, type: type});
    }

    async getInputValue(): Promise<string> {
        return await this.getInputsFieldText();
    }

    async isValidationAppear(): Promise<boolean> {
        const wrapperLocator = await this.getWrapperLocator();
        const fieldClasses: string = await wrapperLocator.getAttribute('class');
        return fieldClasses.includes('variant-error');
    }
}
