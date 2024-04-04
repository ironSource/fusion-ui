"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("@playwright/test");
var inputs_page_1 = require("../../../pages/inputs-page");
var consts_1 = require("./consts");
// import {FormControl} from "@angular/forms";
var inputsPage;
test_1.test.beforeEach(function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var page = _b.page;
    return __generator(this, function (_c) {
        inputsPage = new inputs_page_1.InputsPage(page);
        return [2 /*return*/];
    });
}); });
(0, test_1.test)('Verify inputs text', function () { return __awaiter(void 0, void 0, void 0, function () {
    var expectedText, actualText;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inputsPage.goto()];
            case 1:
                _a.sent();
                return [4 /*yield*/, inputsPage.waitForComponent()];
            case 2:
                _a.sent();
                expectedText = 'testing input text';
                return [4 /*yield*/, inputsPage.addInput({ textInput: expectedText })];
            case 3:
                _a.sent();
                return [4 /*yield*/, inputsPage.getInputsFieldText()];
            case 4:
                actualText = _a.sent();
                (0, test_1.expect)(actualText).toContain(expectedText);
                return [2 /*return*/];
        }
    });
}); });
test_1.test.skip('Verify inputs label', function () { return __awaiter(void 0, void 0, void 0, function () {
    var expectedText, actualText;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                expectedText = 'Label';
                return [4 /*yield*/, inputsPage.goto({ additionalComponentParams: { label: expectedText } })];
            case 1:
                _a.sent();
                return [4 /*yield*/, inputsPage.getInputsLabelText()];
            case 2:
                actualText = _a.sent();
                (0, test_1.expect)(actualText).toContain(expectedText);
                return [2 /*return*/];
        }
    });
}); });
test_1.test.skip('Verify input is mandatory', function () { return __awaiter(void 0, void 0, void 0, function () {
    var inputMandatory;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inputsPage.goto({ additionalComponentParams: { label: '123' } })];
            case 1:
                _a.sent();
                return [4 /*yield*/, inputsPage.isInputMandatory()];
            case 2:
                inputMandatory = _a.sent();
                (0, test_1.expect)(inputMandatory).toBe(true);
                return [2 /*return*/];
        }
    });
}); });
(0, test_1.test)('Verify inputs placeholder', function () { return __awaiter(void 0, void 0, void 0, function () {
    var expectedText, actualText;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                expectedText = 'Placeholder text';
                return [4 /*yield*/, inputsPage.goto({
                        additionalComponentParams: { placeholder: expectedText }
                    })];
            case 1:
                _a.sent();
                return [4 /*yield*/, inputsPage.getPlaceholderText()];
            case 2:
                actualText = _a.sent();
                (0, test_1.expect)(actualText).toContain(expectedText);
                return [2 /*return*/];
        }
    });
}); });
(0, test_1.test)('Verify helper text', function () { return __awaiter(void 0, void 0, void 0, function () {
    var expectedText, helperTextExists, actualText;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                expectedText = 'Helper text';
                return [4 /*yield*/, inputsPage.goto({
                        storyId: consts_1.inputsStoryIdWithHelper,
                        additionalComponentParams: { feedbackText: expectedText }
                    })];
            case 1:
                _a.sent();
                return [4 /*yield*/, inputsPage.hasInputExtraText()];
            case 2:
                helperTextExists = _a.sent();
                (0, test_1.expect)(helperTextExists).toBe(true);
                return [4 /*yield*/, inputsPage.getInputExtraText()];
            case 3:
                actualText = _a.sent();
                (0, test_1.expect)(actualText).toContain(expectedText);
                return [2 /*return*/];
        }
    });
}); });
(0, test_1.test)('Verify input type is text', function () { return __awaiter(void 0, void 0, void 0, function () {
    var expectedType, actualType;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inputsPage.goto()];
            case 1:
                _a.sent();
                expectedType = 'text';
                return [4 /*yield*/, inputsPage.getInputsType()];
            case 2:
                actualType = _a.sent();
                (0, test_1.expect)(actualType).toBe(expectedType);
                return [2 /*return*/];
        }
    });
}); });
(0, test_1.test)('Verify input type is number', function () { return __awaiter(void 0, void 0, void 0, function () {
    var expectedType, actualType;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                expectedType = 'number';
                return [4 /*yield*/, inputsPage.goto({ additionalComponentParams: { type: expectedType } })];
            case 1:
                _a.sent();
                return [4 /*yield*/, inputsPage.getInputsType()];
            case 2:
                actualType = _a.sent();
                (0, test_1.expect)(actualType).toBe(expectedType);
                return [2 /*return*/];
        }
    });
}); });
test_1.test.skip('Verify error type text', function () { return __awaiter(void 0, void 0, void 0, function () {
    var expectedText, inlineErrorExists, actualText;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                expectedText = 'Error text';
                return [4 /*yield*/, inputsPage.goto({
                        additionalComponentParams: {
                            inlineError: true,
                            inlineErrorText: expectedText
                        }
                    })];
            case 1:
                _a.sent();
                return [4 /*yield*/, inputsPage.hasInlineErrorText()];
            case 2:
                inlineErrorExists = _a.sent();
                (0, test_1.expect)(inlineErrorExists).toBe(true);
                return [4 /*yield*/, inputsPage.getInlineErrorText()];
            case 3:
                actualText = _a.sent();
                (0, test_1.expect)(actualText).toContain(expectedText);
                return [2 /*return*/];
        }
    });
}); });
test_1.test.skip('Verify apply button does not disappear after clicking', function () { return __awaiter(void 0, void 0, void 0, function () {
    var applyButtonAppears;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inputsPage.goto({ additionalComponentParams: { showApply: true } })];
            case 1:
                _a.sent();
                return [4 /*yield*/, inputsPage.clickOnApplyButton()];
            case 2:
                _a.sent();
                return [4 /*yield*/, inputsPage.hasApplyButton()];
            case 3:
                applyButtonAppears = _a.sent();
                (0, test_1.expect)(applyButtonAppears).toBe(true);
                return [2 /*return*/];
        }
    });
}); });
test_1.test.skip('Verify feedback variants appear', function () { return __awaiter(void 0, void 0, void 0, function () {
    var helperText, typeExists;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                helperText = 'Helper Text';
                return [4 /*yield*/, inputsPage.goto({
                        additionalComponentParams: {
                            feedbackVariant: 'success',
                            feedbackText: helperText,
                            showFeedbackTextIcon: true
                        }
                    })];
            case 1:
                _a.sent();
                return [4 /*yield*/, inputsPage.hasExtraTextIconType({
                        type: 'check-circle'
                    })];
            case 2:
                typeExists = _a.sent();
                (0, test_1.expect)(typeExists).toBe(true);
                return [4 /*yield*/, inputsPage.goto({
                        additionalComponentParams: {
                            feedbackVariant: 'warning',
                            feedbackText: helperText,
                            showFeedbackTextIcon: true
                        }
                    })];
            case 3:
                _a.sent();
                return [4 /*yield*/, inputsPage.hasExtraTextIconType({
                        type: 'warning-v4'
                    })];
            case 4:
                typeExists = _a.sent();
                (0, test_1.expect)(typeExists).toBe(true);
                return [4 /*yield*/, inputsPage.goto({
                        additionalComponentParams: {
                            feedbackVariant: 'error',
                            feedbackText: helperText,
                            showFeedbackTextIcon: true
                        }
                    })];
            case 5:
                _a.sent();
                return [4 /*yield*/, inputsPage.hasExtraTextIconType({
                        type: 'warning-octagon'
                    })];
            case 6:
                typeExists = _a.sent();
                (0, test_1.expect)(typeExists).toBe(true);
                return [2 /*return*/];
        }
    });
}); });
test_1.test.skip('Verify inputs disabled', function () { return __awaiter(void 0, void 0, void 0, function () {
    var inputsDisabled;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inputsPage.goto({ storyId: consts_1.inputsStoryIdDisabled })];
            case 1:
                _a.sent();
                return [4 /*yield*/, inputsPage.isInputDisabled()];
            case 2:
                inputsDisabled = _a.sent();
                (0, test_1.expect)(inputsDisabled).toBe(true);
                return [2 /*return*/];
        }
    });
}); });
(0, test_1.test)('Verify inputs max length number', function () { return __awaiter(void 0, void 0, void 0, function () {
    var maxLengthNumber;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inputsPage.goto({
                    storyId: consts_1.inputsStoryIdWithLengthCounter,
                    additionalComponentParams: { maxLength: 10 }
                })];
            case 1:
                _a.sent();
                return [4 /*yield*/, inputsPage.getMaxLengthNumber()];
            case 2:
                maxLengthNumber = _a.sent();
                if (typeof maxLengthNumber === 'string') {
                    (0, test_1.expect)(parseInt(maxLengthNumber)).toBe(10);
                }
                return [2 /*return*/];
        }
    });
}); });
test_1.test.skip('Verify inputs actual length number', function () { return __awaiter(void 0, void 0, void 0, function () {
    var actualNumberLength;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inputsPage.goto({ additionalComponentParams: { maxLength: 32 } })];
            case 1:
                _a.sent();
                return [4 /*yield*/, inputsPage.addInput({ textInput: '123' })];
            case 2:
                _a.sent();
                return [4 /*yield*/, inputsPage.getActualNumberLength()];
            case 3:
                actualNumberLength = _a.sent();
                (0, test_1.expect)(actualNumberLength).toBe(3);
                return [2 /*return*/];
        }
    });
}); });
test_1.test.skip('Verify inputs help icon text', function () { return __awaiter(void 0, void 0, void 0, function () {
    var expectedText, actualText;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inputsPage.goto({ additionalComponentParams: { label: '123' } })];
            case 1:
                _a.sent();
                expectedText = 'Hover help text';
                return [4 /*yield*/, inputsPage.getHelpIconText()];
            case 2:
                actualText = _a.sent();
                (0, test_1.expect)(actualText).toContain(expectedText);
                return [2 /*return*/];
        }
    });
}); });
test_1.test.skip('Verify inputs password', function () { return __awaiter(void 0, void 0, void 0, function () {
    var expectedText, passwordShown, actualText;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                expectedText = 'qwerty123456';
                return [4 /*yield*/, inputsPage.goto({
                        storyId: consts_1.inputsStoryIdWithPassword,
                        additionalComponentParams: {
                            type: 'password',
                            formControl: 'qwerty123456'
                        }
                    })];
            case 1:
                _a.sent();
                return [4 /*yield*/, inputsPage.clickOnShowPassword()];
            case 2:
                _a.sent();
                return [4 /*yield*/, inputsPage.isPasswordHidden()];
            case 3:
                passwordShown = _a.sent();
                (0, test_1.expect)(passwordShown).toBe(false);
                return [4 /*yield*/, inputsPage.isPasswordHidden()];
            case 4:
                _a.sent();
                (0, test_1.expect)(passwordShown).toBe(true);
                return [4 /*yield*/, inputsPage.getInputsFieldText()];
            case 5:
                actualText = _a.sent();
                (0, test_1.expect)(actualText).toContain(expectedText);
                return [4 /*yield*/, inputsPage.clickOnHidePassword()];
            case 6:
                _a.sent();
                return [4 /*yield*/, inputsPage.isPasswordHidden()];
            case 7:
                passwordShown = _a.sent();
                (0, test_1.expect)(passwordShown).toBe(true);
                return [2 /*return*/];
        }
    });
}); });
(0, test_1.test)('Verify clear', function () { return __awaiter(void 0, void 0, void 0, function () {
    var inputValue, actualInputValue;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                inputValue = 'hello';
                return [4 /*yield*/, inputsPage.goto({ additionalComponentParams: { label: 'Test Input' } })];
            case 1:
                _a.sent();
                return [4 /*yield*/, inputsPage.getInputsFieldText()];
            case 2:
                actualInputValue = _a.sent();
                (0, test_1.expect)(actualInputValue).toBeFalsy();
                return [4 /*yield*/, inputsPage.addInput({ textInput: inputValue })];
            case 3:
                _a.sent();
                return [4 /*yield*/, inputsPage.getInputsFieldText()];
            case 4:
                actualInputValue = _a.sent();
                (0, test_1.expect)(actualInputValue).toBe(inputValue);
                return [4 /*yield*/, inputsPage.clearInput()];
            case 5:
                _a.sent();
                return [4 /*yield*/, inputsPage.getInputsFieldText()];
            case 6:
                // verify clear is working
                actualInputValue = _a.sent();
                (0, test_1.expect)(actualInputValue).toBeFalsy();
                return [2 /*return*/];
        }
    });
}); });
