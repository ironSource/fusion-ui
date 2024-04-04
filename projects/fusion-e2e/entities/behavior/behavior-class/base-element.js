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
exports.BaseElement = void 0;
var test_1 = require("@playwright/test");
var utils_1 = require("../../global/utils");
var BaseElement = /** @class */ (function () {
    function BaseElement(page, selector) {
        this.page = page;
        this.selector = selector;
        this.locator = this.page.locator(selector);
    }
    BaseElement.prototype.click = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Click on:  ".concat(this.selector), function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.page.click(this.selector)];
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
    BaseElement.prototype.count = function () {
        return __awaiter(this, void 0, void 0, function () {
            var count;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        count = 0;
                        return [4 /*yield*/, test_1.test.step("Count: ".concat(this.selector), function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.page.locator(this.selector).count()];
                                        case 1:
                                            count = _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, count];
                }
            });
        });
    };
    BaseElement.prototype.hover = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Hover on: ".concat(this.selector), function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.page.hover(this.selector)];
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
    BaseElement.prototype.isVisible = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isVisible;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isVisible = false;
                        return [4 /*yield*/, test_1.test.step("Is visible: ".concat(this.selector), function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.page.isVisible(this.selector)];
                                        case 1:
                                            isVisible = _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, isVisible];
                }
            });
        });
    };
    BaseElement.prototype.isHidden = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isHidden;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isHidden = false;
                        return [4 /*yield*/, test_1.test.step("Is hidden: ".concat(this.selector), function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.page.isHidden(this.selector)];
                                        case 1:
                                            isHidden = _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, isHidden];
                }
            });
        });
    };
    BaseElement.prototype.isDisabled = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isDisabled;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isDisabled = false;
                        return [4 /*yield*/, test_1.test.step("Is disabled: ".concat(this.selector), function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.page.isDisabled(this.selector)];
                                        case 1:
                                            isDisabled = _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, isDisabled];
                }
            });
        });
    };
    BaseElement.prototype.isEnabled = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isEnabled;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isEnabled = false;
                        return [4 /*yield*/, test_1.test.step("Is enabled: ".concat(this.selector), function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.page.isEnabled(this.selector)];
                                        case 1:
                                            isEnabled = _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, isEnabled];
                }
            });
        });
    };
    BaseElement.prototype.isAttached = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isAttached;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Is attached: ".concat(this.selector), function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.page.waitForSelector(this.selector, { state: "attached" })];
                                    case 1:
                                        isAttached = _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, isAttached];
                }
            });
        });
    };
    BaseElement.prototype.getSelector = function () {
        return __awaiter(this, void 0, void 0, function () {
            var selector;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selector = "";
                        return [4 /*yield*/, test_1.test.step("Get selector", function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    selector = this.selector;
                                    return [2 /*return*/];
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, selector];
                }
            });
        });
    };
    BaseElement.prototype.getLocator = function (selector) {
        return __awaiter(this, void 0, void 0, function () {
            var locator;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        locator = this.page.locator(selector);
                        return [4 /*yield*/, test_1.test.step("Get locator of: ".concat(this.selector), function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    locator = this.page.locator(selector);
                                    return [2 /*return*/];
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, locator];
                }
            });
        });
    };
    BaseElement.prototype.getAttribute = function (attributeName) {
        return __awaiter(this, void 0, void 0, function () {
            var attribute;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        attribute = null;
                        return [4 /*yield*/, test_1.test.step("Get attribute of: ".concat(attributeName), function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.page.getAttribute(this.selector, attributeName)];
                                        case 1:
                                            attribute = _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, attribute];
                }
            });
        });
    };
    BaseElement.prototype.keyPress = function (key, count) {
        if (count === void 0) { count = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Press key: ".concat(key, ", ").concat(count, " times"), function () { return __awaiter(_this, void 0, void 0, function () {
                            var i;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        i = 0;
                                        _a.label = 1;
                                    case 1:
                                        if (!(i < count)) return [3 /*break*/, 4];
                                        return [4 /*yield*/, this.page.keyboard.press(key)];
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
    BaseElement.prototype.waitForElementToBeAttached = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Wait for element to be attached: ".concat(this.selector), function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.locator.waitFor({ state: "attached" })];
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
    BaseElement.prototype.waitForTimeout = function (timeout) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Wait for timeout", function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.page.waitForTimeout(timeout)];
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
    BaseElement.prototype.waitForURL = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Wait for URL: ".concat(url), function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.page.waitForURL(url)];
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
    BaseElement.prototype.waitForLoadState = function (state) {
        if (state === void 0) { state = "load"; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Wait for load state: ".concat(state), function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.page.waitForLoadState(state)];
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
    BaseElement.prototype.waitForSelector = function (selectorName) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Wait for selector: ".concat(selectorName), function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.page.waitForSelector(selectorName)];
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
    BaseElement.prototype.waitForComponent = function (_a) {
        var testId = _a.testId, modifiers = _a.modifiers;
        return __awaiter(this, void 0, void 0, function () {
            var loadedPageSelector;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!modifiers) {
                            loadedPageSelector = (0, utils_1.getTestIdSelector)(testId);
                        }
                        else {
                            loadedPageSelector = (0, utils_1.getTestIdSelector)((0, utils_1.getTestId)(testId, modifiers));
                        }
                        return [4 /*yield*/, this.waitForSelector(loadedPageSelector)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseElement.prototype.selectorText = function (locator) {
        return __awaiter(this, void 0, void 0, function () {
            var text;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        text = null;
                        return [4 /*yield*/, test_1.test.step("Get text of: ".concat(this.selector), function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, locator.textContent()];
                                        case 1:
                                            text = _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, text];
                }
            });
        });
    };
    BaseElement.prototype.textContent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var text;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        text = null;
                        return [4 /*yield*/, test_1.test.step("Get text content of: ".concat(this.selector), function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.locator.textContent()];
                                        case 1:
                                            text = _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, text];
                }
            });
        });
    };
    BaseElement.prototype.reload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Reload page", function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.page.reload()];
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
    BaseElement.prototype.getByTestId = function (testId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, test_1.test.step("Get element by test id: ".concat(testId), function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, this.page.getByTestId(testId)];
                        });
                    }); })];
            });
        });
    };
    BaseElement.prototype.waitForEvent = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var eventResponse;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_1.test.step("Wait for event ".concat(event), function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                eventResponse = this.page.waitForEvent(event);
                                return [2 /*return*/];
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, eventResponse];
                }
            });
        });
    };
    return BaseElement;
}());
exports.BaseElement = BaseElement;
