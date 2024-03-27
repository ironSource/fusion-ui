import {BaseInputComponent} from '../base-input';
import {FieldLabelComponent} from '../../fieldLabel/field-label-component';
import {FieldHelpTextComponent} from '../../fieldHelpText/field-help-text-component';
import {HasHelpTextTypeParams} from '../../fieldHelpText/types';
import {InputTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {getTestId} from '../../../global/utils';

export class InputsComponent extends BaseInputComponent {
    readonly fieldLabelComponent: FieldLabelComponent;
    readonly fieldHelpTextComponent: FieldHelpTextComponent;

    constructor(page, selector: string) {
        super(page, selector);
        this.fieldLabelComponent = new FieldLabelComponent(page, selector);
        this.fieldHelpTextComponent = new FieldHelpTextComponent(page, selector);
    }

    getInputsLabelText({testId}: {testId: string}) {
        return this.fieldLabelComponent.getLabelText({testId: testId});
    }

    isInputMandatory({testId}: {testId: string}) {
        return this.fieldLabelComponent.isMandatory({testId: testId});
    }

    hasInputExtraText({testId}: {testId: string}) {
        return this.fieldHelpTextComponent.hasExtraText({testId: testId});
    }

    getInputExtraText({testId}: {testId: string}) {
        return this.fieldHelpTextComponent.getExtraText({testId: testId});
    }

    async clickOnApplyButton({testId}: {testId: string}) {
        const applyButtonSelector = await (
            await this.getByTestId(getTestId(testId, InputTestIdModifiers.WRAPPER))
        ).locator('.icon.icon-name--check');
        await applyButtonSelector.click();
    }

    async hasInlineErrorText({testId}: {testId: string}) {
        const element = await this.getByTestId(getTestId(testId, InputTestIdModifiers.TOOLTIP));
        return element.isVisible();
    }

    async getInlineErrorText({testId}: {testId: string}) {
        const inlineErrorSelector = await this.getByTestId(getTestId(testId, InputTestIdModifiers.TOOLTIP));
        await inlineErrorSelector.hover();
        return inlineErrorSelector.getAttribute('text');
    }

    async clickOnShowPassword({testId}: {testId: string}) {
        if (await this.isPasswordHidden({testId})) {
            await this.clickOnPasswordIcon({testId});
        }
    }

    async clickOnPasswordIcon({testId}: {testId: string}) {
        await (await this.getByTestId(getTestId(testId, InputTestIdModifiers.TOGGLE_PASSWORD))).click();
    }

    async clickOnHidePassword({testId}: {testId: string}) {
        if (!(await this.isPasswordHidden({testId}))) {
            await this.clickOnPasswordIcon({testId});
        }
    }

    async isPasswordHidden({testId}: {testId: string}) {
        return (await this.getByTestId(getTestId(testId, InputTestIdModifiers.TOGGLE_PASSWORD)))
            .locator('.fu-show-password-button eye-slash')
            .isVisible();
    }

    async clearInput({testId}: {testId: string}) {
        const inputFieldSelector = await this.getByTestId(getTestId(testId, InputTestIdModifiers.FIELD));
        await inputFieldSelector.clear();
    }

    hasExtraTextIconType({testId, type}: HasHelpTextTypeParams) {
        return this.fieldHelpTextComponent.hasExtraTextIconType({testId, type});
    }

    async isInputDisabled({testId}: {testId: string}) {
        const inputFieldSelector = await this.getByTestId(getTestId(testId, InputTestIdModifiers.FIELD));

        return inputFieldSelector.isDisabled();
    }

    async hasApplyButton({testId}: {testId: string}) {
        return (await this.getByTestId(getTestId(testId, InputTestIdModifiers.WRAPPER))).locator('.icon.icon-name--check').isVisible();
    }

    async getMaxLengthNumber({testId}: {testId: string}) {
        // const fontCaptionText = await this.getFontCaptionText({testId});
        // return fontCaptionText[1];
        const inputFieldSelector = await this.getByTestId(getTestId(testId, InputTestIdModifiers.FIELD));
        return inputFieldSelector.getAttribute('maxlength');
    }

    async getActualNumberLength({testId}: {testId: string}) {
        const inputFieldSelector = await this.getByTestId(getTestId(testId, InputTestIdModifiers.FIELD));
        return inputFieldSelector.getAttribute('value').then(value => value.length);
        // const fontCaptionText = await this.getFontCaptionText({testId});
        // return fontCaptionText[0];
    }

    async getFontCaptionText({testId}: {testId: string}) {
        const fontCaptionText = await (await this.getByTestId(getTestId(testId, InputTestIdModifiers.WRAPPER)))
            .locator('.font-caption')
            .textContent();
        return fontCaptionText.split('/').map(str => parseInt(str.trim(), 10));
    }

    getHelpIconText({testId}: {testId: string}) {
        return this.fieldLabelComponent.getHelpIconText({testId: testId});
    }

    async isValidationAppear({testId}: {testId: string}) {
        const fieldClasses = await (await this.getByTestId(getTestId(testId, InputTestIdModifiers.WRAPPER))).getAttribute('class');
        return fieldClasses.includes('variant-error');
    }
}
