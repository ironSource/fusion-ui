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
exports.DialogComponent = void 0;
var entities_1 = require("@ironsource/fusion-ui/entities");
var utils_1 = require("../../global/utils");
var base_component_1 = require("../base-component");
var DialogComponent = /** @class */ (function (_super) {
    __extends(DialogComponent, _super);
    function DialogComponent(page, selector) {
        return _super.call(this, page, selector) || this;
    }
    // Get the title of the dialog
    DialogComponent.prototype.getDialogTitle = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var testIdSelector, element;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        testIdSelector = (0, utils_1.getTestIdSelector)((0, utils_1.getTestId)(testId, entities_1.DialogTestIdModifiers.HEADER));
                        return [4 /*yield*/, this.getLocator(testIdSelector)];
                    case 1:
                        element = _b.sent();
                        return [2 /*return*/, element.textContent()];
                }
            });
        });
    };
    // Get the text of the dialog
    DialogComponent.prototype.getDialogText = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var testIdSelector, element;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        testIdSelector = (0, utils_1.getTestIdSelector)((0, utils_1.getTestId)(testId, entities_1.DialogTestIdModifiers.MODAL_CONTENT));
                        return [4 /*yield*/, this.getLocator(testIdSelector)];
                    case 1:
                        element = _b.sent();
                        return [2 /*return*/, element.textContent()];
                }
            });
        });
    };
    // Open the dialog
    DialogComponent.prototype.openDialog = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var selector, testIdSelector, dialogButton;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        selector = (0, utils_1.getTestId)(testId, entities_1.DialogTestIdModifiers.WRAPPER);
                        testIdSelector = (0, utils_1.getTestIdSelector)(selector);
                        return [4 /*yield*/, this.waitForSelector(testIdSelector)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.getLocator(testIdSelector)];
                    case 2:
                        dialogButton = _b.sent();
                        return [4 /*yield*/, dialogButton.click()];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Close the dialog
    DialogComponent.prototype.closeDialog = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var testIdSelector, closeButton;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        testIdSelector = (0, utils_1.getTestIdSelector)((0, utils_1.getTestId)(testId, entities_1.DialogTestIdModifiers.ACTION_CLOSE));
                        return [4 /*yield*/, this.getLocator(testIdSelector)];
                    case 1:
                        closeButton = _b.sent();
                        return [4 /*yield*/, closeButton.click()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Click on the primary button of the dialog
    DialogComponent.prototype.clickOnPrimaryButton = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var testIdSelector, primaryButton;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        testIdSelector = (0, utils_1.getTestIdSelector)((0, utils_1.getTestId)(testId, entities_1.DialogTestIdModifiers.SAVE_BUTTON));
                        return [4 /*yield*/, this.getLocator(testIdSelector)];
                    case 1:
                        primaryButton = _b.sent();
                        return [4 /*yield*/, primaryButton.click()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Click on the default button of the dialog
    DialogComponent.prototype.clickOnDefaultButton = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var testIdSelector, defaultButton;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        testIdSelector = (0, utils_1.getTestIdSelector)((0, utils_1.getTestId)(testId, entities_1.DialogTestIdModifiers.CANCEL_BUTTON));
                        return [4 /*yield*/, this.getLocator(testIdSelector)];
                    case 1:
                        defaultButton = _b.sent();
                        return [4 /*yield*/, defaultButton.click()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Click on the delete button of the dialog
    DialogComponent.prototype.clickOnDeleteButton = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var testIdSelector, wrapperLocator, deleteButton;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        testIdSelector = (0, utils_1.getTestIdSelector)((0, utils_1.getTestId)(testId, entities_1.DialogTestIdModifiers.ACTION_BUTTONS_WRAPPER));
                        return [4 /*yield*/, this.getLocator(testIdSelector)];
                    case 1:
                        wrapperLocator = _b.sent();
                        return [4 /*yield*/, wrapperLocator.locator('.danger')];
                    case 2:
                        deleteButton = _b.sent();
                        return [4 /*yield*/, deleteButton.click()];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Get the subtitle of the dialog
    DialogComponent.prototype.getDialogSubtitle = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var testIdSelector, element, locator;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        testIdSelector = (0, utils_1.getTestIdSelector)((0, utils_1.getTestId)(testId, entities_1.DialogTestIdModifiers.HEADER_SECONDARY));
                        return [4 /*yield*/, this.getLocator(testIdSelector)];
                    case 1:
                        element = _b.sent();
                        return [4 /*yield*/, element.locator('.subtitle')];
                    case 2:
                        locator = _b.sent();
                        return [2 /*return*/, locator.textContent()];
                }
            });
        });
    };
    // Check if the dialog is visible
    DialogComponent.prototype.isDialogVisible = function (_a) {
        var testId = _a.testId;
        return __awaiter(this, void 0, void 0, function () {
            var testIdSelector, dialog;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.waitForTimeout(1000)];
                    case 1:
                        _b.sent();
                        testIdSelector = (0, utils_1.getTestIdSelector)((0, utils_1.getTestId)(testId, entities_1.DialogTestIdModifiers.MODAL_WRAPPER));
                        return [4 /*yield*/, this.getLocator(testIdSelector)];
                    case 2:
                        dialog = _b.sent();
                        return [2 /*return*/, dialog.isVisible()];
                }
            });
        });
    };
    return DialogComponent;
}(base_component_1.BaseComponent));
exports.DialogComponent = DialogComponent;
