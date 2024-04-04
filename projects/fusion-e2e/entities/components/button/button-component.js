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
exports.ButtonComponent = void 0;
var utils_1 = require("../../global/utils");
var entities_1 = require("@ironsource/fusion-ui/entities");
var behavior_1 = require("../../behavior");
var elements_1 = require("../../elements");
var test_1 = require("@playwright/test");
var base_component_1 = require("../base-component");
var ButtonComponent = /** @class */ (function (_super) {
    __extends(ButtonComponent, _super);
    function ButtonComponent(page, selector) {
        var _this = _super.call(this, page, selector) || this;
        _this.contentElement = new behavior_1.BaseElement(page, (0, utils_1.getTestIdSelector)((0, utils_1.getTestId)(_this.selector, entities_1.ButtonTestIdModifiers.CONTENT)));
        _this.buttonModifierElement = new behavior_1.BaseElement(page, (0, utils_1.getTestIdSelector)((0, utils_1.getTestId)(_this.selector, entities_1.ButtonTestIdModifiers.BUTTON)));
        _this.buttonElement = new behavior_1.BaseElement(page, (0, utils_1.getTestIdSelector)(_this.selector));
        _this.button = new behavior_1.Clickable(page, selector);
        _this.label = new elements_1.StaticText(page, selector);
        return _this;
    }
    ButtonComponent.prototype.waitForToggleButtonComponent = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var loadedPageSelector;
            var testId = _b.testId;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        loadedPageSelector = (0, utils_1.getTestIdSelector)(testId);
                        return [4 /*yield*/, this.waitForSelector(loadedPageSelector)];
                    case 1:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ButtonComponent.prototype.clickOnButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.buttonModifierElement.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ButtonComponent.prototype.hoverOnButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.buttonModifierElement.hover()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ButtonComponent.prototype.isButtonLoading = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var buttonLocator, buttonElement, buttonClass;
            var testId = _b.testId;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.getLocator((0, utils_1.getTestIdSelector)(testId))];
                    case 1:
                        buttonLocator = _c.sent();
                        return [4 /*yield*/, buttonLocator.elementHandle()];
                    case 2:
                        buttonElement = _c.sent();
                        if (!buttonElement) return [3 /*break*/, 4];
                        return [4 /*yield*/, buttonElement.getAttribute('class')];
                    case 3:
                        buttonClass = _c.sent();
                        return [2 /*return*/, buttonClass ? buttonClass.includes('loading') : false];
                    case 4: return [2 /*return*/, false];
                }
            });
        });
    };
    ButtonComponent.prototype.getButtonText = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.contentElement.textContent()];
            });
        });
    };
    ButtonComponent.prototype.getIconButtonText = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var button, textSelector;
            var testId = _b.testId;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.getLocator((0, utils_1.getTestIdSelector)(testId))];
                    case 1:
                        button = _c.sent();
                        return [4 /*yield*/, button.last().locator('span')];
                    case 2:
                        textSelector = _c.sent();
                        return [2 /*return*/, this.selectorText(textSelector)];
                }
            });
        });
    };
    ButtonComponent.prototype.isButtonDisabled = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.buttonElement.isDisabled()];
            });
        });
    };
    ButtonComponent.prototype.getToggleButtonFirstLabel = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.buttonElement.textContent()];
            });
        });
    };
    ButtonComponent.prototype.isIconExist = function (selector) {
        return __awaiter(this, void 0, void 0, function () {
            var numOfIcons;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        numOfIcons = 0;
                        return [4 /*yield*/, test_1.test.step("Is icon exist: ".concat(selector), function () { return __awaiter(_this, void 0, void 0, function () {
                                var isButtonWithIcon;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.getLocator(selector)];
                                        case 1:
                                            isButtonWithIcon = _a.sent();
                                            return [4 /*yield*/, isButtonWithIcon.count()];
                                        case 2:
                                            numOfIcons = _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, numOfIcons > 0];
                }
            });
        });
    };
    ButtonComponent.prototype.getButtonLabel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var labelSelector;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        labelSelector = '';
                        return [4 /*yield*/, test_1.test.step("Get button label", function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.label.getText()];
                                        case 1:
                                            labelSelector = _a.sent();
                                            if (labelSelector === null) {
                                                throw new Error("Couldn't get text for the button: ".concat(this.selector));
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, labelSelector];
                }
            });
        });
    };
    return ButtonComponent;
}(base_component_1.BaseComponent));
exports.ButtonComponent = ButtonComponent;
