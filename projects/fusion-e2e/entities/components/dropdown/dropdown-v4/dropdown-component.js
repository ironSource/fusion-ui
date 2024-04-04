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
exports.DropdownComponent = void 0;
var utils_1 = require("../../../global/utils");
var base_dropdown_1 = require("../base-dropdown");
var field_label_component_1 = require("../../fieldLabel/field-label-component");
var field_help_text_component_1 = require("../../fieldHelpText/field-help-text-component");
var entities_1 = require("@ironsource/fusion-ui/entities");
var DropdownComponent = /** @class */ (function (_super) {
    __extends(DropdownComponent, _super);
    function DropdownComponent(page, selector) {
        var _this = _super.call(this, page, selector) || this;
        _this.fieldLabelComponent = new field_label_component_1.FieldLabelComponent(page, _this.selector);
        _this.fieldHelpTextComponent = new field_help_text_component_1.FieldHelpTextComponent(page, _this.selector);
        return _this;
    }
    DropdownComponent.prototype.getDropdownTitle = function (_a) {
        var testId = _a.testId;
        return this.fieldLabelComponent.getLabelText({ testId: testId });
    };
    DropdownComponent.prototype.isMandatory = function (_a) {
        var testId = _a.testId;
        return this.fieldLabelComponent.isMandatory({ testId: testId });
    };
    DropdownComponent.prototype.getHelpIconText = function (_a) {
        var testId = _a.testId;
        return this.fieldLabelComponent.getHelpIconText({ testId: testId });
    };
    DropdownComponent.prototype.hasExtraText = function (_a) {
        var testId = _a.testId;
        return this.fieldHelpTextComponent.hasExtraText({ testId: testId });
    };
    DropdownComponent.prototype.getExtraText = function (_a) {
        var testId = _a.testId;
        return this.fieldHelpTextComponent.getExtraText({ testId: testId });
    };
    DropdownComponent.prototype.hasExtraTextIconType = function (_a) {
        var testId = _a.testId, type = _a.type;
        return this.fieldHelpTextComponent.hasExtraTextIconType({ testId: testId, type: type });
    };
    DropdownComponent.prototype.getSelectedLabel = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.DropdownTestIdModifiers.BUTTON_CONTENT))];
                    case 1:
                        element = _b.sent();
                        return [2 /*return*/, element.textContent()];
                }
            });
        });
    };
    DropdownComponent.prototype.searchForItem = function (_a) {
        var testId = _a.testId, searchTerm = _a.searchTerm;
        return __awaiter(this, void 0, void 0, function () {
            var inputElement, listElement, firstItem;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.openDropdownComponent({ testId: testId })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.InputTestIdModifiers.FIELD))];
                    case 2: return [4 /*yield*/, (_b.sent()).last()];
                    case 3:
                        inputElement = _b.sent();
                        return [4 /*yield*/, inputElement.fill(searchTerm)];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.DropdownTestIdModifiers.LIST_CONTAINER))];
                    case 5:
                        listElement = _b.sent();
                        return [4 /*yield*/, listElement.locator('fusion-dropdown-options-list > li').first()];
                    case 6:
                        firstItem = _b.sent();
                        return [2 /*return*/, firstItem.textContent()];
                }
            });
        });
    };
    DropdownComponent.prototype.isErrorText = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var errorTextLocator, count;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.FieldHelpTextTestIdModifiers.TEXT))];
                    case 1:
                        errorTextLocator = _b.sent();
                        return [4 /*yield*/, errorTextLocator.count()];
                    case 2:
                        count = _b.sent();
                        return [2 /*return*/, count > 0];
                }
            });
        });
    };
    DropdownComponent.prototype.isDropdownDisabled = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var ddTriggerSelector;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.DropdownTestIdModifiers.TRIGGER))];
                    case 1: return [4 /*yield*/, (_b.sent()).locator('.button__container--disabled')];
                    case 2:
                        ddTriggerSelector = _b.sent();
                        return [2 /*return*/, ddTriggerSelector.isVisible()];
                }
            });
        });
    };
    DropdownComponent.prototype.clearAllOptions = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.DropdownTestIdModifiers.ACTION_CLEAR_ALL))];
                    case 1: return [4 /*yield*/, (_b.sent()).click()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DropdownComponent.prototype.isSelectAllChecked = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.DropdownTestIdModifiers.SELECT_ALL))];
                    case 1: return [4 /*yield*/, (_b.sent()).locator('.fu-label-checkbox')];
                    case 2:
                        element = _b.sent();
                        return [2 /*return*/, element.isChecked()];
                }
            });
        });
    };
    DropdownComponent.prototype.isSelectAllIndeterminate = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var locator;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.DropdownTestIdModifiers.SELECT_ALL))];
                    case 1: return [4 /*yield*/, (_b.sent()).locator('fusion-checkbox')];
                    case 2:
                        locator = _b.sent();
                        return [4 /*yield*/, locator.getAttribute('ng-reflect-is-indeterminate')];
                    case 3: return [2 /*return*/, (_b.sent()) === 'true'];
                }
            });
        });
    };
    DropdownComponent.prototype.removeChipSelection = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.DropdownTestIdModifiers.BUTTON_CLEAR))];
                    case 1:
                        element = _b.sent();
                        return [4 /*yield*/, element.click()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DropdownComponent.prototype.getDropdownOptions = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.DropdownTestIdModifiers.LIST_CONTAINER))];
                    case 1: return [4 /*yield*/, (_b.sent()).locator('.list')];
                    case 2:
                        element = _b.sent();
                        return [2 /*return*/, element.allTextContents()];
                }
            });
        });
    };
    return DropdownComponent;
}(base_dropdown_1.BaseDropdownComponent));
exports.DropdownComponent = DropdownComponent;
