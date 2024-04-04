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
exports.IncludeExclude = void 0;
var test_1 = require("@playwright/test");
var elements_1 = require("../../elements");
var row_option_1 = require("./row-option");
var row_included_option_1 = require("./row-included-option");
var constants_1 = require("./constants");
var constants_2 = require("../constants");
var constants_3 = require("../../constants");
var base_component_1 = require("../base-component");
var IncludeExclude = /** @class */ (function (_super) {
    __extends(IncludeExclude, _super);
    function IncludeExclude(page, selector) {
        var _this = _super.call(this, page, selector) || this;
        _this.searchInput = new elements_1.Input(page, "".concat(_this.selector, " ").concat(constants_1.SELECTORS.SEARCH_INPUT));
        _this.clearAllButton = new elements_1.Button(page, "".concat(_this.selector, " ").concat(constants_1.SELECTORS.CLEAR_ALL_BUTTON));
        _this.rowOption = new row_option_1.RowOption(page, "".concat(_this.selector, " ").concat(constants_1.SELECTORS.OPTION));
        _this.rowIncludedOption = new row_included_option_1.RowIncludedOption(page, "".concat(_this.selector, " ").concat(constants_1.SELECTORS.SELECTED_OPTION));
        _this.selectAllOptions = new row_option_1.RowOption(page, "".concat(_this.selector, " ").concat(constants_1.SELECTORS.SELECT_ALL));
        _this.typeTitle = new elements_1.StaticText(page, "".concat(_this.selector, " ").concat(constants_1.SELECTORS.TYPE_TITLE));
        _this.numOfIncludedLabel = new elements_1.StaticText(page, "".concat(_this.selector, " ").concat(constants_1.SELECTORS.SELECTED_AMOUNT));
        _this.applyButton = new elements_1.Button(page, "".concat(_this.selector, " ").concat(constants_1.SELECTORS.APPLY_BUTTON));
        _this.cancelButton = new elements_1.Button(page, "".concat(_this.selector, " ").concat(constants_1.SELECTORS.CANCEL_BUTTON));
        return _this;
    }
    IncludeExclude.prototype.searchOption = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Search option ".concat(option), function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.searchInput.fill(option)];
                                    case 1:
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
    IncludeExclude.prototype.getTypeTitle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var typeTitle;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        typeTitle = '';
                        return [4 /*yield*/, test_1.test.step("Get type title", function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.typeTitle.getText()];
                                        case 1:
                                            typeTitle = _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, typeTitle];
                }
            });
        });
    };
    IncludeExclude.prototype.clearAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Clear all options", function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.clearAllButton.click()];
                                    case 1:
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
    IncludeExclude.prototype.selectAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Select all options", function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.selectAllOptions.check()];
                                    case 1:
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
    IncludeExclude.prototype.selectOptions = function (optionsToSelect) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Select options", function () { return __awaiter(_this, void 0, void 0, function () {
                            var i;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        i = 0;
                                        _a.label = 1;
                                    case 1:
                                        if (!(i < optionsToSelect.length)) return [3 /*break*/, 4];
                                        return [4 /*yield*/, this.selectOption(optionsToSelect[i])];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3:
                                        i++;
                                        return [3 /*break*/, 1];
                                    case 4: return [2 /*return*/];
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
    IncludeExclude.prototype.selectOptionsAndApply = function (optionsToSelect) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Select options and apply", function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.selectOptions(optionsToSelect)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.applyButton.click()];
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
    IncludeExclude.prototype.selectOption = function (optionToSelect) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Select option: ".concat(optionToSelect), function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, this.searchOption(optionToSelect)];
                                    case 1:
                                        _b.sent();
                                        return [4 /*yield*/, this.waitForTimeout(constants_3.GLOBAL_DEBOUNCE)];
                                    case 2:
                                        _b.sent();
                                        _a = test_1.expect;
                                        return [4 /*yield*/, this.rowOption.optionTitle.locator.nth(0)];
                                    case 3: return [4 /*yield*/, _a.apply(void 0, [_b.sent()]).toBeVisible()];
                                    case 4:
                                        _b.sent();
                                        return [4 /*yield*/, this.rowOption.locator
                                                .filter({ has: this.page.locator("text=\"".concat(optionToSelect, "\"")) })
                                                .nth(0)
                                                .locator(constants_2.SELECTORS.STATIC_TEXT.LABEL)
                                                .nth(0)
                                                .check()];
                                    case 5:
                                        _b.sent();
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
    IncludeExclude.prototype.getOptionLabel = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.rowIncludedOption.getOptionLabel()];
            });
        });
    };
    IncludeExclude.prototype.removeIncludedOption = function (optionToRemove) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Remove included option: ".concat(optionToRemove), function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.searchOption(optionToRemove)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.waitForTimeout(constants_3.GLOBAL_DEBOUNCE)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, this.rowIncludedOption.removeIncludedOption()];
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
    IncludeExclude.prototype.removeIncludedOptionAndApply = function (optionToRemove) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Remove included option and apply: ".concat(optionToRemove), function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.removeIncludedOption(optionToRemove)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.clickApplyButton()];
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
    IncludeExclude.prototype.isOptionIncluded = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var isIncluded;
            var _this = this;
            var expectedOption = _b.expectedOption, _c = _b.isExactMatch, isExactMatch = _c === void 0 ? true : _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        isIncluded = false;
                        return [4 /*yield*/, test_1.test.step("Is option included: ".concat(expectedOption), function () { return __awaiter(_this, void 0, void 0, function () {
                                var checkedOptionsLength, i, actualOption, i, actualOption;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.searchInput.fill(expectedOption)];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, this.rowIncludedOption.optionLabel.locator.count()];
                                        case 2:
                                            checkedOptionsLength = _a.sent();
                                            if (!isExactMatch) return [3 /*break*/, 7];
                                            i = 0;
                                            _a.label = 3;
                                        case 3:
                                            if (!(i < checkedOptionsLength)) return [3 /*break*/, 6];
                                            return [4 /*yield*/, this.rowIncludedOption.optionLabel.locator.nth(i).textContent()];
                                        case 4:
                                            actualOption = _a.sent();
                                            if ((actualOption === null || actualOption === void 0 ? void 0 : actualOption.trim()) === expectedOption) {
                                                isIncluded = true;
                                                return [3 /*break*/, 6];
                                            }
                                            _a.label = 5;
                                        case 5:
                                            i++;
                                            return [3 /*break*/, 3];
                                        case 6: return [3 /*break*/, 11];
                                        case 7:
                                            i = 0;
                                            _a.label = 8;
                                        case 8:
                                            if (!(i < checkedOptionsLength)) return [3 /*break*/, 11];
                                            return [4 /*yield*/, this.rowIncludedOption.optionLabel.locator.nth(i).textContent()];
                                        case 9:
                                            actualOption = _a.sent();
                                            if (actualOption === null || actualOption === void 0 ? void 0 : actualOption.trim().includes(expectedOption)) {
                                                isIncluded = true;
                                                return [3 /*break*/, 11];
                                            }
                                            _a.label = 10;
                                        case 10:
                                            i++;
                                            return [3 /*break*/, 8];
                                        case 11: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _d.sent();
                        return [2 /*return*/, isIncluded];
                }
            });
        });
    };
    IncludeExclude.prototype.getNumOfIncludedItemsLabel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var numOfIncludedItemsLabel;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        numOfIncludedItemsLabel = '';
                        return [4 /*yield*/, test_1.test.step("Get num of included items label", function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.numOfIncludedLabel.getText()];
                                        case 1:
                                            numOfIncludedItemsLabel = _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, numOfIncludedItemsLabel];
                }
            });
        });
    };
    IncludeExclude.prototype.clickCancelButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Click on cancel button", function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.cancelButton.click()];
                                    case 1:
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
    IncludeExclude.prototype.clickApplyButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Click on apply button", function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.applyButton.click()];
                                    case 1:
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
    return IncludeExclude;
}(base_component_1.BaseComponent));
exports.IncludeExclude = IncludeExclude;
