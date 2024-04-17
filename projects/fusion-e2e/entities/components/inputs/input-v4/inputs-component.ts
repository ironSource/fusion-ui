import {FieldLabelComponent} from '../../fieldLabel/field-label-component';
import {FieldHelpTextComponent} from '../../fieldHelpText/field-help-text-component';
import {HasHelpTextTypeParams} from '../../fieldHelpText/types';
import {InputTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {getTestId, getTestIdSelector} from '../../../global/utils';
import {BaseInputComponent} from '../base-input';
import {Locator, Page} from '@playwright/test';

export class InputsComponent extends BaseInputComponent {
    private wrapperLocator: Locator;
    private inputFieldSelector: Locator;
    private tooltipFieldSelector: Locator;
    private passwordFieldSelector: Locator;
    private inputFieldElement: BaseInputComponent;

    constructor(page: Page, selector: string) {
        super(page, selector);
        this.initializeLocators(page).then(r => r);
    }

    private async initializeLocators(page) {
        this.wrapperLocator = await this.getByTestId(getTestId(this.selector, InputTestIdModifiers.WRAPPER));
        this.inputFieldSelector = await this.getByTestId(getTestId(this.selector, InputTestIdModifiers.FIELD));
        this.tooltipFieldSelector = await this.getByTestId(getTestId(this.selector, InputTestIdModifiers.TOOLTIP));
        this.passwordFieldSelector = await this.getByTestId(getTestId(this.selector, InputTestIdModifiers.TOGGLE_PASSWORD));
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
        const applyButtonSelector: Locator = (await this.wrapperLocator).locator('.icon.icon-name--check');
        await applyButtonSelector.click();
    }

    async hasInlineErrorText(): Promise<boolean> {
        return (await this.tooltipFieldSelector).isVisible();
    }

    async getInlineErrorText(): Promise<string> {
        const inlineErrorSelector: Locator = await this.tooltipFieldSelector;
        await inlineErrorSelector.hover();
        return inlineErrorSelector.getAttribute('text');
    }

    async isPasswordHidden(): Promise<boolean> {
        const hiddenPasswordLocator: Locator = (await this.passwordFieldSelector).locator('.fu-show-password-button eye-slash');
        return hiddenPasswordLocator.isVisible();
    }

    async clickOnPasswordIcon(): Promise<void> {
        const passwordFieldSelector = await this.passwordFieldSelector;
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
        return (await this.inputFieldSelector).isDisabled();
    }

    async hasApplyButton(): Promise<boolean> {
        const applyButtonLocator: Locator = (await this.wrapperLocator).locator('.icon.icon-name--check');
        return applyButtonLocator.isVisible();
    }

    async getMaxLengthNumber(): Promise<string> {
        return (await this.inputFieldSelector).getAttribute('maxlength');
    }

    async getActualNumberLength(): Promise<number> {
        const value: string = await (await this.inputFieldSelector).getAttribute('value');
        return value.length;
    }

    async getFontCaptionText(): Promise<number[]> {
        const fontCaptionLocator: Locator = (await this.wrapperLocator).locator('.font-caption');
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
        const fieldClasses: string = await (await this.wrapperLocator).getAttribute('class');
        return fieldClasses.includes('variant-error');
    }
}
