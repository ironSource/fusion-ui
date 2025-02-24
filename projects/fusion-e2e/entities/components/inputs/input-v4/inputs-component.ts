import {FieldLabelComponent} from '../../fieldLabel/field-label-component';
import {FieldHelpTextComponent} from '../../fieldHelpText/field-help-text-component';
import {HasHelpTextTypeParams} from '../../fieldHelpText/types';
import {InputTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {getTestId, getTestIdSelector} from '../../../global/utils';
import {BaseInputComponent} from '../base-input';
import {Locator, Page} from '@playwright/test';
import {BaseElement} from '../../../behavior';

export class InputsComponent extends BaseInputComponent {
    private wrapper: BaseElement;
    private inputField: BaseElement;
    private tooltipField: BaseElement;
    private passwordField: BaseElement;
    private inputFieldElement: BaseInputComponent;

    constructor(page: Page, selector: string) {
        super(page, selector);
        this.wrapper = new BaseElement(page, getTestIdSelector(getTestId(this.selector, InputTestIdModifiers.WRAPPER)));
        this.inputField = new BaseElement(page, getTestIdSelector(getTestId(this.selector, InputTestIdModifiers.FIELD)));
        this.tooltipField = new BaseElement(page, getTestIdSelector(getTestId(this.selector, InputTestIdModifiers.TOOLTIP)));
        this.passwordField = new BaseElement(page, getTestIdSelector(getTestId(this.selector, InputTestIdModifiers.TOGGLE_PASSWORD)));
        this.inputFieldElement = new BaseInputComponent(page, getTestIdSelector(getTestId(this.selector, InputTestIdModifiers.FIELD)));
    }

    getInputsLabelText(): Promise<string> {
        const fieldLabelComponent = new FieldLabelComponent(this.page, this.selector);
        return fieldLabelComponent.getLabelText();
    }

    isInputMandatory(): Promise<boolean> {
        const fieldLabelComponent = new FieldLabelComponent(this.page, this.selector);
        return fieldLabelComponent.isMandatory();
    }

    hasInputExtraText(): Promise<boolean> {
        const fieldHelpTextComponent = new FieldHelpTextComponent(this.page, this.selector);
        return fieldHelpTextComponent.hasExtraText();
    }

    getInputExtraText(): Promise<string> {
        const fieldHelpTextComponent = new FieldHelpTextComponent(this.page, this.selector);
        return fieldHelpTextComponent.getExtraText();
    }

    async clickOnApplyButton(): Promise<void> {
        const applyButtonSelector = await this.wrapper.getLocator('.icon.icon-name--check');
        await applyButtonSelector.click();
    }

    async hasInlineErrorText(): Promise<boolean> {
        return (await this.tooltipField).isVisible();
    }

    async getInlineErrorText(): Promise<string> {
        const inlineErrorSelector = await this.tooltipField;
        await inlineErrorSelector.hover();
        return inlineErrorSelector.getAttribute('text');
    }

    async isPasswordHidden(): Promise<boolean> {
        const hiddenPasswordLocator = await (await this.passwordField).getLocator('.fu-show-password-button eye-slash');
        return hiddenPasswordLocator.isVisible();
    }

    async clickOnPasswordIcon(): Promise<void> {
        const passwordFieldSelector = await this.passwordField;
        await passwordFieldSelector.click();
    }

    async clickOnShowPassword(): Promise<void> {
        if (await this.isPasswordHidden()) {
            await this.clickOnPasswordIcon();
        }
    }

    async clickOnHidePassword(): Promise<void> {
        if (!(await this.isPasswordHidden())) {
            await this.clickOnPasswordIcon();
        }
    }

    async clearInput(): Promise<void> {
        await this.inputFieldElement.clearInput();
    }

    async isInputDisabled(): Promise<boolean> {
        return (await this.inputField).isDisabled();
    }

    async hasApplyButton(): Promise<boolean> {
        const applyButtonLocator: Locator = await (await this.wrapper).getLocator('.icon.icon-name--check');
        return applyButtonLocator.isVisible();
    }

    async getMaxLengthNumber(): Promise<string> {
        return (await this.inputField).getAttribute('maxlength');
    }

    async getActualNumberLength(): Promise<number> {
        const value: string = await (await this.inputField).getAttribute('value');
        return value.length;
    }

    async getFontCaptionText(): Promise<number[]> {
        const fontCaptionLocator: Locator = await (await this.wrapper).getLocator('.font-caption');
        const fontCaptionText: string = await fontCaptionLocator.textContent();
        return fontCaptionText.split('/').map(str => parseInt(str.trim(), 10));
    }

    getHelpIconText(): Promise<string> {
        const fieldLabelComponent = new FieldLabelComponent(this.page, this.selector);
        return fieldLabelComponent.getHelpIconText();
    }

    async hasExtraTextIconType({type}: HasHelpTextTypeParams): Promise<boolean> {
        const fieldHelpTextComponent = new FieldHelpTextComponent(this.page, this.selector);
        return fieldHelpTextComponent.hasExtraTextIconType({testId: this.selector, type: type});
    }

    async getInputValue(): Promise<string> {
        return await this.getInputsFieldText();
    }

    async isValidationAppear(): Promise<boolean> {
        const fieldClasses: string = await (await this.wrapper).getAttribute('class');
        return fieldClasses.includes('variant-error');
    }
}
