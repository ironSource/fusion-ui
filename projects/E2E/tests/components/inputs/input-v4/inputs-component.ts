import {Page} from '@playwright/test';
import {BaseInputComponent} from '../base-input';
import {FieldLabelComponent} from '../../fieldLabel/field-label-component';
import {FieldHelpTextComponent} from '../../fieldHelpText/field-help-text-component';
import {HasHelpTextTypeParams} from '../../fieldHelpText/types';
import {InputTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {getTestId, getTestIdSelector} from '../../../global/utils';

export class InputsComponent extends BaseInputComponent {
    private readonly fieldLabelComponent: FieldLabelComponent;
    private readonly fieldHelpTextComponent: FieldHelpTextComponent;

    constructor(page: Page) {
        super(page);
        this.fieldLabelComponent = new FieldLabelComponent(page);
        this.fieldHelpTextComponent = new FieldHelpTextComponent(page);
    }

    getInputsLabelText({testId}: {testId: string}) {
        return this.fieldLabelComponent.getLabelText({testId: testId});
    }

    async waitForComponent({testId}: {testId: string}) {
        const loadedPageSelector = getTestIdSelector(getTestId(testId, InputTestIdModifiers.WRAPPER));

        await this.page.waitForSelector(loadedPageSelector);
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
        const applyButtonSelector = await this.page
            .getByTestId(getTestId(testId, InputTestIdModifiers.WRAPPER))
            .locator('.icon.icon-name--check');
        await applyButtonSelector.click();
    }

    hasInlineErrorText({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, InputTestIdModifiers.TOOLTIP)).isVisible();
    }

    async getInlineErrorText({testId}: {testId: string}) {
        const inlineErrorSelector = await this.page.getByTestId(getTestId(testId, InputTestIdModifiers.TOOLTIP));
        await inlineErrorSelector.hover();
        return inlineErrorSelector.getAttribute('text');
    }

    async clickOnShowPassword({testId}: {testId: string}) {
        if (await this.isPasswordHidden({testId})) {
            await this.clickOnPasswordIcon({testId});
        }
    }

    async clickOnPasswordIcon({testId}: {testId: string}) {
        await this.page.getByTestId(getTestId(testId, InputTestIdModifiers.TOGGLE_PASSWORD)).click();
    }

    async clickOnHidePassword({testId}: {testId: string}) {
        if (!(await this.isPasswordHidden({testId}))) {
            await this.clickOnPasswordIcon({testId});
        }
    }

    isPasswordHidden({testId}: {testId: string}) {
        return this.page
            .getByTestId(getTestId(testId, InputTestIdModifiers.TOGGLE_PASSWORD))
            .locator('.icon.icon-name--eye-slash')
            .isVisible();
    }

    async clearInput({testId}: {testId: string}) {
        const inputFieldSelector = await this.page.getByTestId(getTestId(testId, InputTestIdModifiers.FIELD));
        await inputFieldSelector.clear();
    }

    hasExtraTextIconType({testId, type}: HasHelpTextTypeParams) {
        return this.fieldHelpTextComponent.hasExtraTextIconType({testId, type});
    }

    async isDisabled({testId}: {testId: string}) {
        const inputFieldSelector = await this.page.getByTestId(getTestId(testId, InputTestIdModifiers.FIELD));

        return inputFieldSelector.isDisabled();
    }

    hasApplyButton({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, InputTestIdModifiers.WRAPPER)).locator('.icon.icon-name--check').isVisible();
    }

    async getMaxLengthNumber({testId}: {testId: string}) {
        const fontCaptionText = await this.getFontCaptionText({testId});
        return fontCaptionText[1];
    }

    async getActualNumberLength({testId}: {testId: string}) {
        const fontCaptionText = await this.getFontCaptionText({testId});
        return fontCaptionText[0];
    }

    async getFontCaptionText({testId}: {testId: string}) {
        const fontCaptionText = await this.page
            .getByTestId(getTestId(testId, InputTestIdModifiers.WRAPPER))
            .locator('.font-caption')
            .textContent();
        return fontCaptionText.split('/').map(str => parseInt(str.trim(), 10));
    }

    getHelpIconText({testId}: {testId: string}) {
        return this.fieldLabelComponent.getHelpIconText({testId: testId});
    }

    async isValidationAppear({testId}: {testId: string}) {
        const fieldClasses = await this.page.getByTestId(getTestId(testId, InputTestIdModifiers.WRAPPER)).getAttribute('class');
        return fieldClasses.includes('variant-error');
    }
}
