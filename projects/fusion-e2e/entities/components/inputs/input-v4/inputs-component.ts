import {BaseInputComponent} from '../base-input';
import {FieldLabelComponent} from '../../fieldLabel/field-label-component';
import {FieldHelpTextComponent} from '../../fieldHelpText/field-help-text-component';
import {HasHelpTextTypeParams} from '../../fieldHelpText/types';
import {InputTestIdModifiers} from '@ironsource/fusion-ui/entities';
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

    // Get the label text of the inputs
    getInputsLabelText({testId}: {testId: string}): Promise<string | null> {
        return this.fieldLabelComponent.getLabelText({testId: testId});
    }

    // Check if the input is mandatory
    isInputMandatory({testId}: {testId: string}): Promise<boolean> {
        return this.fieldLabelComponent.isMandatory({testId: testId});
    }

    // Check if the input has extra text
    hasInputExtraText({testId}: {testId: string}): Promise<boolean> {
        return this.fieldHelpTextComponent.hasExtraText({testId: testId});
    }

    // Get the extra text of the input
    getInputExtraText({testId}: {testId: string}): Promise<string | null> {
        return this.fieldHelpTextComponent.getExtraText({testId: testId});
    }

    // Click on the apply button
    async clickOnApplyButton({testId}: {testId: string}): Promise<void> {
        const wrapperLocator: Locator = await this.getByTestId(getTestId(testId, InputTestIdModifiers.WRAPPER));
        const applyButtonSelector: Locator = await wrapperLocator.locator('.icon.icon-name--check');
        await applyButtonSelector.click();
    }

    // Check if the inline error text is visible
    async hasInlineErrorText({testId}: {testId: string}): Promise<boolean> {
        const element: Locator = await this.getByTestId(getTestId(testId, InputTestIdModifiers.TOOLTIP));
        return element.isVisible();
    }

    // Get the inline error text
    async getInlineErrorText({testId}: {testId: string}): Promise<string | null> {
        const inlineErrorSelector: Locator = await this.getByTestId(getTestId(testId, InputTestIdModifiers.TOOLTIP));
        await inlineErrorSelector.hover();
        return inlineErrorSelector.getAttribute('text');
    }

    // Click on the show password button
    async clickOnShowPassword({testId}: {testId: string}): Promise<void> {
        if (await this.isPasswordHidden({testId})) {
            await this.clickOnPasswordIcon({testId});
        }
    }

    // Click on the password icon
    async clickOnPasswordIcon({testId}: {testId: string}): Promise<void> {
        const passwordIcon: Locator = await this.getByTestId(getTestId(testId, InputTestIdModifiers.TOGGLE_PASSWORD));
        await passwordIcon.click();
    }

    // Click on the hide password button
    async clickOnHidePassword({testId}: {testId: string}): Promise<void> {
        if (!(await this.isPasswordHidden({testId}))) {
            await this.clickOnPasswordIcon({testId});
        }
    }

    // Check if the password is hidden
    async isPasswordHidden({testId}: {testId: string}): Promise<boolean> {
        const passwordToggle: Locator = await this.getByTestId(getTestId(testId, InputTestIdModifiers.TOGGLE_PASSWORD));
        const hiddenPasswordLocator: Locator = passwordToggle.locator('.fu-show-password-button eye-slash');
        return hiddenPasswordLocator.isVisible();
    }

    // Clear the input
    async clearInput({testId}: {testId: string}): Promise<void> {
        const inputFieldSelector: Locator = await this.getByTestId(getTestId(testId, InputTestIdModifiers.FIELD));
        await inputFieldSelector.clear();
    }

    // Check if the extra text icon type is present
    hasExtraTextIconType({testId, type}: HasHelpTextTypeParams): Promise<boolean> {
        return this.fieldHelpTextComponent.hasExtraTextIconType({testId, type});
    }

    // Check if the input is disabled
    async isInputDisabled({testId}: {testId: string}): Promise<boolean> {
        const inputFieldSelector: Locator = await this.getByTestId(getTestId(testId, InputTestIdModifiers.FIELD));
        return inputFieldSelector.isDisabled();
    }

    // Check if the apply button is present
    async hasApplyButton({testId}: {testId: string}): Promise<boolean> {
        const wrapperLocator: Locator = await this.getByTestId(getTestId(testId, InputTestIdModifiers.WRAPPER));
        const applyButtonLocator: Locator = wrapperLocator.locator('.icon.icon-name--check');
        return applyButtonLocator.isVisible();
    }

    // Get the maximum length number of the input
    async getMaxLengthNumber({testId}: {testId: string}): Promise<string | null> {
        const inputFieldSelector: Locator = await this.getByTestId(getTestId(testId, InputTestIdModifiers.FIELD));
        return inputFieldSelector.getAttribute('maxlength');
    }

    // Get the actual number length of the input
    async getActualNumberLength({testId}: {testId: string}): Promise<number> {
        const inputFieldSelector: Locator = await this.getByTestId(getTestId(testId, InputTestIdModifiers.FIELD));
        const value: string | null = await inputFieldSelector.getAttribute('value');
        return value ? value.length : 0;
    }

    // Get the font caption text of the input
    async getFontCaptionText({testId}: {testId: string}): Promise<number[]> {
        const wrapperLocator: Locator = await this.getByTestId(getTestId(testId, InputTestIdModifiers.WRAPPER));
        const fontCaptionLocator: Locator = wrapperLocator.locator('.font-caption');
        const fontCaptionText: string | null = await fontCaptionLocator.textContent();
        return fontCaptionText ? fontCaptionText.split('/').map(str => parseInt(str.trim(), 10)) : [];
    }

    // Get the help icon text of the input
    getHelpIconText({testId}: {testId: string}): Promise<string | null> {
        return this.fieldLabelComponent.getHelpIconText({testId: testId});
    }

    // Check if the validation appears
    async isValidationAppear({testId}: {testId: string}): Promise<boolean> {
        const wrapperLocator: Locator = await this.getByTestId(getTestId(testId, InputTestIdModifiers.WRAPPER));
        const fieldClasses: string | null = await wrapperLocator.getAttribute('class');
        return fieldClasses ? fieldClasses.includes('variant-error') : false;
    }
}
