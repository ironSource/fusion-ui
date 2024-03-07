import {expect, test} from '@playwright/test';
import {InputsPage} from './inputs-page';
import {inputsStoryIdDisabled, inputsStoryIdWithHelper, inputsStoryIdWithLengthCounter, inputsStoryIdWithPassword} from './consts';
// import {FormControl} from "@angular/forms";

let inputsPage: InputsPage;

test.beforeEach(async ({page}) => {
    inputsPage = new InputsPage(page);
});

test('Verify inputs text', async () => {
    await inputsPage.goto();
    await inputsPage.waitForComponent();
    const expectedText = 'testing input text';
    await inputsPage.addInput({textInput: expectedText});
    const actualText = await inputsPage.getInputsFieldText();
    expect(actualText).toContain(expectedText);
});

test.skip('Verify inputs label', async () => {
    const expectedText = 'Label';
    await inputsPage.goto({additionalComponentParams: {label: expectedText}});
    const actualText = await inputsPage.getInputsLabelText();
    expect(actualText).toContain(expectedText);
});

test.skip('Verify input is mandatory', async () => {
    await inputsPage.goto({additionalComponentParams: {label: '123'}});
    const inputMandatory = await inputsPage.isInputMandatory();
    expect(inputMandatory).toBe(true);
});

test('Verify inputs placeholder', async () => {
    const expectedText = 'Placeholder text';
    await inputsPage.goto({
        additionalComponentParams: {placeholder: expectedText}
    });
    const actualText = await inputsPage.getPlaceholderText();
    expect(actualText).toContain(expectedText);
});

test('Verify helper text', async () => {
    const expectedText = 'Helper text';
    await inputsPage.goto({
        storyId: inputsStoryIdWithHelper,
        additionalComponentParams: {feedbackText: expectedText}
    });
    const helperTextExists = await inputsPage.hasInputExtraText();
    expect(helperTextExists).toBe(true);
    const actualText = await inputsPage.getInputExtraText();
    expect(actualText).toContain(expectedText);
});

test('Verify input type is text', async () => {
    await inputsPage.goto();
    const expectedType = 'text';
    const actualType = await inputsPage.getInputsType();
    expect(actualType).toBe(expectedType);
});

test('Verify input type is number', async () => {
    const expectedType = 'number';
    await inputsPage.goto({additionalComponentParams: {type: expectedType}});
    const actualType = await inputsPage.getInputsType();
    expect(actualType).toBe(expectedType);
});

test.skip('Verify error type text', async () => {
    const expectedText = 'Error text';
    await inputsPage.goto({
        additionalComponentParams: {
            inlineError: true,
            inlineErrorText: expectedText
        }
    });
    const inlineErrorExists = await inputsPage.hasInlineErrorText();
    expect(inlineErrorExists).toBe(true);
    const actualText = await inputsPage.getInlineErrorText();
    expect(actualText).toContain(expectedText);
});

test.skip('Verify apply button does not disappear after clicking', async () => {
    await inputsPage.goto({additionalComponentParams: {showApply: true}});
    await inputsPage.clickOnApplyButton();
    const applyButtonAppears = await inputsPage.hasApplyButton();
    expect(applyButtonAppears).toBe(true);
});

test.skip('Verify feedback variants appear', async () => {
    const helperText = 'Helper Text';
    await inputsPage.goto({
        additionalComponentParams: {
            feedbackVariant: 'success',
            feedbackText: helperText,
            showFeedbackTextIcon: true
        }
    });
    let typeExists = await inputsPage.hasExtraTextIconType({
        type: 'check-circle'
    });
    expect(typeExists).toBe(true);

    await inputsPage.goto({
        additionalComponentParams: {
            feedbackVariant: 'warning',
            feedbackText: helperText,
            showFeedbackTextIcon: true
        }
    });
    typeExists = await inputsPage.hasExtraTextIconType({
        type: 'warning-v4'
    });
    expect(typeExists).toBe(true);

    await inputsPage.goto({
        additionalComponentParams: {
            feedbackVariant: 'error',
            feedbackText: helperText,
            showFeedbackTextIcon: true
        }
    });
    typeExists = await inputsPage.hasExtraTextIconType({
        type: 'warning-octagon'
    });
    expect(typeExists).toBe(true);
});

test('Verify inputs disabled', async () => {
    await inputsPage.goto({storyId: inputsStoryIdDisabled});
    const inputsDisabled = await inputsPage.isDisabled();
    expect(inputsDisabled).toBe(true);
});

test('Verify inputs max length number', async () => {
    await inputsPage.goto({
        storyId: inputsStoryIdWithLengthCounter,
        additionalComponentParams: {maxLength: 10}
    });
    const maxLengthNumber = await inputsPage.getMaxLengthNumber();
    expect(parseInt(maxLengthNumber)).toBe(10);
});

test.skip('Verify inputs actual length number', async () => {
    await inputsPage.goto({additionalComponentParams: {maxLength: 32}});
    await inputsPage.addInput({textInput: '123'});
    const actualNumberLength = await inputsPage.getActualNumberLength();
    expect(actualNumberLength).toBe(3);
});

test.skip('Verify inputs help icon text', async () => {
    await inputsPage.goto({additionalComponentParams: {label: '123'}});
    const expectedText = 'Hover help text';
    const actualText = await inputsPage.getHelpIconText();
    expect(actualText).toContain(expectedText);
});

test('Verify inputs password', async () => {
    // const formControlPassword = new FormControl('qwerty123456');

    const expectedText = 'qwerty123456';
    await inputsPage.goto({
        storyId: inputsStoryIdWithPassword,
        additionalComponentParams: {
            type: 'password',
            formControl: 'qwerty123456'
        }
    });
    await inputsPage.clickOnShowPassword();
    let passwordShown = await inputsPage.isPasswordHidden();
    expect(passwordShown).toBe(false);
    await inputsPage.isPasswordHidden();
    expect(passwordShown).toBe(true);
    const actualText = await inputsPage.getInputsFieldText();
    expect(actualText).toContain(expectedText);
    await inputsPage.clickOnHidePassword();
    passwordShown = await inputsPage.isPasswordHidden();
    expect(passwordShown).toBe(true);
});

test('Verify clear', async () => {
    const inputValue = 'hello';
    await inputsPage.goto({additionalComponentParams: {label: 'Test Input'}});
    // Verify that the input field is empty
    let actualInputValue = await inputsPage.getInputsFieldText();
    expect(actualInputValue).toBeFalsy();
    await inputsPage.addInput({textInput: inputValue});
    actualInputValue = await inputsPage.getInputsFieldText();
    expect(actualInputValue).toBe(inputValue);
    await inputsPage.clearInput();
    // verify clear is working
    actualInputValue = await inputsPage.getInputsFieldText();
    expect(actualInputValue).toBeFalsy();
});
