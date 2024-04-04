"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.InputsComponent = void 0;
var base_input_1 = require("../base-input");
var field_label_component_1 = require("../../fieldLabel/field-label-component");
var field_help_text_component_1 = require("../../fieldHelpText/field-help-text-component");
var entities_1 = require("@ironsource/fusion-ui/entities");
var utils_1 = require("../../../global/utils");
var InputsComponent = /** @class */ (function (_super) {
    __extends(InputsComponent, _super);
    function InputsComponent(page, selector) {
        var _this = _super.call(this, page, selector) || this;
        _this.fieldLabelComponent = new field_label_component_1.FieldLabelComponent(page, selector);
        _this.fieldHelpTextComponent = new field_help_text_component_1.FieldHelpTextComponent(page, selector);
        return _this;
    }
    // Get the label text of the inputs
    InputsComponent.prototype.getInputsLabelText = function (_a) {
        var testId = _a.testId;
        return this.fieldLabelComponent.getLabelText({ testId: testId });
    };
    // Check if the input is mandatory
    InputsComponent.prototype.isInputMandatory = function (_a) {
        var testId = _a.testId;
        return this.fieldLabelComponent.isMandatory({ testId: testId });
    };
    // Check if the input has extra text
    InputsComponent.prototype.hasInputExtraText = function (_a) {
        var testId = _a.testId;
        return this.fieldHelpTextComponent.hasExtraText({ testId: testId });
    };
    // Get the extra text of the input
    InputsComponent.prototype.getInputExtraText = function (_a) {
        var testId = _a.testId;
        return this.fieldHelpTextComponent.getExtraText({ testId: testId });
    };
    // Click on the apply button
    InputsComponent.prototype.clickOnApplyButton = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var wrapperLocator, applyButtonSelector;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.InputTestIdModifiers.WRAPPER))];
                    case 1:
                        wrapperLocator = _b.sent();
                        return [4 /*yield*/, wrapperLocator.locator('.icon.icon-name--check')];
                    case 2:
                        applyButtonSelector = _b.sent();
                        return [4 /*yield*/, applyButtonSelector.click()];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Check if the inline error text is visible
    InputsComponent.prototype.hasInlineErrorText = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.InputTestIdModifiers.TOOLTIP))];
                    case 1:
                        element = _b.sent();
                        return [2 /*return*/, element.isVisible()];
                }
            });
        });
    };
    // Get the inline error text
    InputsComponent.prototype.getInlineErrorText = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var inlineErrorSelector;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.InputTestIdModifiers.TOOLTIP))];
                    case 1:
                        inlineErrorSelector = _b.sent();
                        return [4 /*yield*/, inlineErrorSelector.hover()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, inlineErrorSelector.getAttribute('text')];
                }
            });
        });
    };
    // Click on the show password button
    InputsComponent.prototype.clickOnShowPassword = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.isPasswordHidden({ testId: testId })];
                    case 1:
                        if (!_b.sent()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.clickOnPasswordIcon({ testId: testId })];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Click on the password icon
    InputsComponent.prototype.clickOnPasswordIcon = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var passwordIcon;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.InputTestIdModifiers.TOGGLE_PASSWORD))];
                    case 1:
                        passwordIcon = _b.sent();
                        return [4 /*yield*/, passwordIcon.click()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Click on the hide password button
    InputsComponent.prototype.clickOnHidePassword = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.isPasswordHidden({ testId: testId })];
                    case 1:
                        if (!!(_b.sent())) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.clickOnPasswordIcon({ testId: testId })];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Check if the password is hidden
    InputsComponent.prototype.isPasswordHidden = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var passwordToggle, hiddenPasswordLocator;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.InputTestIdModifiers.TOGGLE_PASSWORD))];
                    case 1:
                        passwordToggle = _b.sent();
                        hiddenPasswordLocator = passwordToggle.locator('.fu-show-password-button eye-slash');
                        return [2 /*return*/, hiddenPasswordLocator.isVisible()];
                }
            });
        });
    };
    // Clear the input
    InputsComponent.prototype.clearInput = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var inputFieldSelector;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.InputTestIdModifiers.FIELD))];
                    case 1:
                        inputFieldSelector = _b.sent();
                        return [4 /*yield*/, inputFieldSelector.clear()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Check if the extra text icon type is present
    InputsComponent.prototype.hasExtraTextIconType = function (_a) {
        var testId = _a.testId, type = _a.type;
        return this.fieldHelpTextComponent.hasExtraTextIconType({ testId: testId, type: type });
    };
    // Check if the input is disabled
    InputsComponent.prototype.isInputDisabled = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var inputFieldSelector;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.InputTestIdModifiers.FIELD))];
                    case 1:
                        inputFieldSelector = _b.sent();
                        return [2 /*return*/, inputFieldSelector.isDisabled()];
                }
            });
        });
    };
    // Check if the apply button is present
    InputsComponent.prototype.hasApplyButton = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var wrapperLocator, applyButtonLocator;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.InputTestIdModifiers.WRAPPER))];
                    case 1:
                        wrapperLocator = _b.sent();
                        applyButtonLocator = wrapperLocator.locator('.icon.icon-name--check');
                        return [2 /*return*/, applyButtonLocator.isVisible()];
                }
            });
        });
    };
    // Get the maximum length number of the input
    InputsComponent.prototype.getMaxLengthNumber = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var inputFieldSelector;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.InputTestIdModifiers.FIELD))];
                    case 1:
                        inputFieldSelector = _b.sent();
                        return [2 /*return*/, inputFieldSelector.getAttribute('maxlength')];
                }
            });
        });
    };
    // Get the actual number length of the input
    InputsComponent.prototype.getActualNumberLength = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var inputFieldSelector, value;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.InputTestIdModifiers.FIELD))];
                    case 1:
                        inputFieldSelector = _b.sent();
                        return [4 /*yield*/, inputFieldSelector.getAttribute('value')];
                    case 2:
                        value = _b.sent();
                        return [2 /*return*/, value ? value.length : 0];
                }
            });
        });
    };
    // Get the font caption text of the input
    InputsComponent.prototype.getFontCaptionText = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var wrapperLocator, fontCaptionLocator, fontCaptionText;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.InputTestIdModifiers.WRAPPER))];
                    case 1:
                        wrapperLocator = _b.sent();
                        fontCaptionLocator = wrapperLocator.locator('.font-caption');
                        return [4 /*yield*/, fontCaptionLocator.textContent()];
                    case 2:
                        fontCaptionText = _b.sent();
                        return [2 /*return*/, fontCaptionText ? fontCaptionText.split('/').map(function (str) { return parseInt(str.trim(), 10); }) : []];
                }
            });
        });
    };
    // Get the help icon text of the input
    InputsComponent.prototype.getHelpIconText = function (_a) {
        var testId = _a.testId;
        return this.fieldLabelComponent.getHelpIconText({ testId: testId });
    };
    // Check if the validation appears
    InputsComponent.prototype.isValidationAppear = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var wrapperLocator, fieldClasses;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.InputTestIdModifiers.WRAPPER))];
                    case 1:
                        wrapperLocator = _b.sent();
                        return [4 /*yield*/, wrapperLocator.getAttribute('class')];
                    case 2:
                        fieldClasses = _b.sent();
                        return [2 /*return*/, fieldClasses ? fieldClasses.includes('variant-error') : false];
                }
            });
        });
    };
    return InputsComponent;
}(base_input_1.BaseInputComponent));
exports.InputsComponent = InputsComponent;
