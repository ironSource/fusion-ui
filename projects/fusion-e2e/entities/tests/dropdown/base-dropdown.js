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
exports.BaseDropdownComponent = void 0;
var utils_1 = require("../../global/utils");
var entities_1 = require("@ironsource/fusion-ui/entities");
var base_component_1 = require("../base-component");
var test_1 = require("@playwright/test");
var consts_1 = require("./consts");
var constants_1 = require("../../constants");
var static_text_1 = require("../static-text");
var base_input_1 = require("../inputs/base-input");
var button_component_1 = require("../../components/button/button-component");
var BaseDropdownComponent = /** @class */ (function (_super) {
    __extends(BaseDropdownComponent, _super);
    function BaseDropdownComponent(page, selector) {
        var _this = _super.call(this, page, selector) || this;
        _this.searchInput = new base_input_1.BaseInputComponent(page, "".concat(selector, " ").concat(consts_1.SELECTORS.SEARCH_INPUT));
        _this.option = new button_component_1.ButtonComponent(page, "".concat(selector, " ").concat(consts_1.SELECTORS.FUSION_DROPDOWN_OPTIONS));
        _this.selectedOptionLabel = new static_text_1.StaticText(page, "".concat(selector, " ").concat(consts_1.SELECTORS.SELECTED_OPTION));
        return _this;
    }
    BaseDropdownComponent.prototype.waitForComponent = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var testId = _b.testId;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.DropdownTestIdModifiers.WRAPPER))];
                    case 1:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseDropdownComponent.prototype.selectDropdownOptionByIndex = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var element, locator;
            var testId = _b.testId, index = _b.index;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.openDropdownComponent({ testId: testId })];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.DropdownTestIdModifiers.LIST_CONTAINER))];
                    case 2:
                        element = _c.sent();
                        locator = element.locator('fusion-dropdown-options-list > li').nth(index);
                        return [4 /*yield*/, locator.click()];
                    case 3:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseDropdownComponent.prototype.getDropdownButtonContent = function (testId) {
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.DropdownTestIdModifiers.BUTTON_CONTENT))];
                    case 1:
                        element = _a.sent();
                        return [2 /*return*/, element.textContent()];
                }
            });
        });
    };
    BaseDropdownComponent.prototype.openDropdownComponent = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var element;
            var testId = _b.testId;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.DropdownTestIdModifiers.TRIGGER))];
                    case 1:
                        element = _c.sent();
                        return [4 /*yield*/, element.click({
                                position: {
                                    x: 15,
                                    y: 15
                                }
                            })];
                    case 2:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseDropdownComponent.prototype.selectDropdownOptionByName = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var element, locator;
            var testId = _b.testId, name = _b.name, _c = _b.shouldOpen, shouldOpen = _c === void 0 ? true : _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!shouldOpen) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.openDropdownComponent({ testId: testId })];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.DropdownTestIdModifiers.LIST_CONTAINER))];
                    case 3:
                        element = _d.sent();
                        locator = element.locator('fusion-dropdown-options-list > li', { hasText: name });
                        return [4 /*yield*/, locator.click()];
                    case 4:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseDropdownComponent.prototype.selectMultipleItemsByIndex = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var _i, itemsToSelect_1, i, element, locator;
            var testId = _b.testId, itemsToSelect = _b.itemsToSelect;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.openDropdownComponent({ testId: testId })];
                    case 1:
                        _c.sent();
                        _i = 0, itemsToSelect_1 = itemsToSelect;
                        _c.label = 2;
                    case 2:
                        if (!(_i < itemsToSelect_1.length)) return [3 /*break*/, 6];
                        i = itemsToSelect_1[_i];
                        return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.DropdownTestIdModifiers.LIST_CONTAINER))];
                    case 3:
                        element = _c.sent();
                        locator = element.locator('ul > li').nth(i);
                        return [4 /*yield*/, locator.click()];
                    case 4:
                        _c.sent();
                        _c.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 2];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    BaseDropdownComponent.prototype.selectMultipleItemsByName = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var _i, itemsToSelect_2, name_1, element, locator;
            var testId = _b.testId, itemsToSelect = _b.itemsToSelect;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.openDropdownComponent({ testId: testId })];
                    case 1:
                        _c.sent();
                        _i = 0, itemsToSelect_2 = itemsToSelect;
                        _c.label = 2;
                    case 2:
                        if (!(_i < itemsToSelect_2.length)) return [3 /*break*/, 6];
                        name_1 = itemsToSelect_2[_i];
                        return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.DropdownTestIdModifiers.LIST_CONTAINER))];
                    case 3:
                        element = _c.sent();
                        locator = element.locator('ul > li', { hasText: name_1 }).first();
                        return [4 /*yield*/, locator.click()];
                    case 4:
                        _c.sent();
                        _c.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 2];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    BaseDropdownComponent.prototype.clickOnApply = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var element;
            var testId = _b.testId;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.DropdownTestIdModifiers.ACTION_APPLY))];
                    case 1:
                        element = _c.sent();
                        return [4 /*yield*/, element.click()];
                    case 2:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseDropdownComponent.prototype.clickOnCancel = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var element;
            var testId = _b.testId;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.getByTestId((0, utils_1.getTestId)(testId, entities_1.DropdownTestIdModifiers.ACTION_CANCEL))];
                    case 1:
                        element = _c.sent();
                        return [4 /*yield*/, element.click()];
                    case 2:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseDropdownComponent.prototype.scrollToTheLastOption = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step('Scroll to the last option', function () { return __awaiter(_this, void 0, void 0, function () {
                            var numOfItemsBeforeScrolling, numOfItemsAfterScrolling;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.page.locator("".concat(this.selector, " ").concat(consts_1.SELECTORS.FUSION_DROPDOWN_OPTIONS)).count()];
                                    case 1:
                                        numOfItemsBeforeScrolling = _a.sent();
                                        return [4 /*yield*/, this.page
                                                .locator("".concat(this.selector, " ").concat(consts_1.SELECTORS.FUSION_DROPDOWN_OPTIONS))
                                                .nth(numOfItemsBeforeScrolling - 1)
                                                .scrollIntoViewIfNeeded()];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, this.page.waitForTimeout(constants_1.GLOBAL_DEBOUNCE)];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, this.page.waitForLoadState('domcontentloaded')];
                                    case 4:
                                        _a.sent();
                                        return [4 /*yield*/, this.page.locator("".concat(this.selector, " ").concat(consts_1.SELECTORS.FUSION_DROPDOWN_OPTIONS)).count()];
                                    case 5:
                                        numOfItemsAfterScrolling = _a.sent();
                                        _a.label = 6;
                                    case 6:
                                        if (numOfItemsBeforeScrolling < numOfItemsAfterScrolling) return [3 /*break*/, 0];
                                        _a.label = 7;
                                    case 7: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseDropdownComponent.prototype.searchOption = function (searchTerm) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Search option: ".concat(searchTerm), function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.searchInput.fill(searchTerm)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.waitForTimeout(constants_1.GLOBAL_DEBOUNCE)];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseDropdownComponent.prototype.selectOption = function (optionToSelect) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, test_1.expect)(this.page.locator(consts_1.SELECTORS.FUSION_DROPDOWN_LOADER)).not.toBeVisible()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, test_1.test.step("Select option: ".concat(optionToSelect), function () { return __awaiter(_this, void 0, void 0, function () {
                                var _a, optionToClick;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, this.selectedOptionLabel.locator.isVisible()];
                                        case 1:
                                            _a = (_b.sent());
                                            if (!_a) return [3 /*break*/, 3];
                                            return [4 /*yield*/, this.selectedOptionLabel.getText()];
                                        case 2:
                                            _a = (_b.sent()) === optionToSelect;
                                            _b.label = 3;
                                        case 3:
                                            if (!_a) return [3 /*break*/, 5];
                                            return [4 /*yield*/, this.closeDropdownIfOpen()];
                                        case 4:
                                            _b.sent();
                                            return [2 /*return*/];
                                        case 5: return [4 /*yield*/, this.option.locator.nth(0).isVisible()];
                                        case 6:
                                            if (!!(_b.sent())) return [3 /*break*/, 8];
                                            return [4 /*yield*/, this.click()];
                                        case 7:
                                            _b.sent();
                                            _b.label = 8;
                                        case 8: return [4 /*yield*/, this.scrollToTheLastOption()];
                                        case 9:
                                            _b.sent();
                                            optionToClick = this.option.locator.filter({ has: this.page.locator("text=\"".concat(optionToSelect, "\"")) });
                                            return [4 /*yield*/, optionToClick.click()];
                                        case 10:
                                            _b.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseDropdownComponent.prototype.getSelectedOption = function () {
        return __awaiter(this, void 0, void 0, function () {
            var selectedOption;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectedOption = '';
                        return [4 /*yield*/, test_1.test.step("Get selected option", function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.selectedOptionLabel.getText()];
                                        case 1:
                                            selectedOption = _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, selectedOption];
                }
            });
        });
    };
    BaseDropdownComponent.prototype.selectOptionBySearchInput = function (optionToSelect) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step('Select option by search input', function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.openDropdownIfClosed()];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.searchOption(optionToSelect)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, this.selectOption(optionToSelect)];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseDropdownComponent.prototype.openDropdownIfClosed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step('Open dropdown if needed', function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.option.locator.nth(0).isVisible()];
                                    case 1:
                                        if (!!(_a.sent())) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.click()];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseDropdownComponent.prototype.closeDropdownIfOpen = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step('Close dropdown if needed', function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.option.locator.nth(0).isVisible()];
                                    case 1:
                                        if (!_a.sent()) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.click()];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseDropdownComponent.prototype.isDropdownOptionsExists = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var actualOptions, isExists, i, _c, option, i, i;
            var expectedOptions = _b.expectedOptions, isByOrder = _b.isByOrder;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        actualOptions = [];
                        isExists = true;
                        return [4 /*yield*/, this.openDropdownIfClosed()];
                    case 1:
                        _d.sent();
                        return [4 /*yield*/, this.scrollToTheLastOption()];
                    case 2:
                        _d.sent();
                        if (!(this.option && this.option.locator)) return [3 /*break*/, 7];
                        i = 0;
                        _d.label = 3;
                    case 3:
                        _c = i;
                        return [4 /*yield*/, this.option.locator.count()];
                    case 4:
                        if (!(_c < (_d.sent()))) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.option.locator.nth(i).textContent()];
                    case 5:
                        option = _d.sent();
                        actualOptions.push(option ? option.trim() : '');
                        _d.label = 6;
                    case 6:
                        i++;
                        return [3 /*break*/, 3];
                    case 7:
                        if (isByOrder) {
                            for (i = 0; i < expectedOptions.length; i++) {
                                if (!actualOptions.includes(expectedOptions[i])) {
                                    console.log("The option ".concat(expectedOptions[i], " is not found in the dropdown items"));
                                    isExists = false;
                                    break;
                                }
                            }
                        }
                        else {
                            for (i = 0; i < expectedOptions.length; i++) {
                                if (actualOptions[i] !== expectedOptions[i]) {
                                    console.log("Expected: ".concat(expectedOptions[i], ", actual: ").concat(actualOptions[i]));
                                    isExists = false;
                                    break;
                                }
                            }
                        }
                        if (!isExists) {
                            console.log("Expected options: ".concat(expectedOptions));
                            console.log("Actual options: ".concat(actualOptions));
                        }
                        return [4 /*yield*/, this.closeDropdownIfOpen()];
                    case 8:
                        _d.sent();
                        return [2 /*return*/, isExists];
                }
            });
        });
    };
    BaseDropdownComponent.prototype.getAllPossibleOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, i, _a, option;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        options = [];
                        return [4 /*yield*/, this.openDropdownIfClosed()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.scrollToTheLastOption()];
                    case 2:
                        _b.sent();
                        i = 0;
                        _b.label = 3;
                    case 3:
                        _a = i;
                        return [4 /*yield*/, this.option.locator.count()];
                    case 4:
                        if (!(_a < (_b.sent()))) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.option.locator.nth(i).textContent()];
                    case 5:
                        option = _b.sent();
                        options.push(option ? option.trim() : '');
                        _b.label = 6;
                    case 6:
                        i++;
                        return [3 /*break*/, 3];
                    case 7: return [2 /*return*/, options];
                }
            });
        });
    };
    return BaseDropdownComponent;
}(base_component_1.BaseComponent));
exports.BaseDropdownComponent = BaseDropdownComponent;
