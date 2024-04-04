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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.DialogPage = void 0;
var dialog_component_1 = require("../components/dialog/dialog-component");
var consts_1 = require("../components/dialog/consts");
var utils_1 = require("../global/utils");
var base_page_1 = require("./base-page/base-page");
var entities_1 = require("@ironsource/fusion-ui/entities");
var DialogPage = /** @class */ (function (_super) {
    __extends(DialogPage, _super);
    function DialogPage(page) {
        var _this = this;
        var dialogProps = {
            page: page,
            testId: consts_1.defaultTestId,
            componentId: consts_1.dialogStoryId,
            loadedPageSelector: consts_1.loadedPageSelector
        };
        _this = _super.call(this, dialogProps) || this;
        _this.dialog = new dialog_component_1.DialogComponent(page, _this.testId);
        return _this;
    }
    DialogPage.prototype.goto = function (gotoParams) {
        if (gotoParams === void 0) { gotoParams = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var componentParams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        componentParams = __assign({ testId: this.testId }, gotoParams.additionalComponentParams);
                        return [4 /*yield*/, this.page.goto((0, utils_1.createStoryBookComponentPath)(gotoParams.storyId || this.componentId, componentParams))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.openDialog()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.page.waitForSelector(this.loadedPageSelector)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DialogPage.prototype.getDialogTitle = function () {
        return this.dialog.getDialogTitle({ testId: this.testId });
    };
    DialogPage.prototype.openDialog = function () {
        return this.dialog.openDialog({ testId: this.testId });
    };
    DialogPage.prototype.getDialogText = function () {
        return this.dialog.getDialogText({ testId: this.testId });
    };
    DialogPage.prototype.getDialogSubtitle = function () {
        return this.dialog.getDialogSubtitle({ testId: this.testId });
    };
    DialogPage.prototype.closeDialog = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialog.closeDialog({ testId: this.testId })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DialogPage.prototype.clickOnPrimaryButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialog.clickOnPrimaryButton({ testId: this.testId })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DialogPage.prototype.clickOnDefaultButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialog.clickOnDefaultButton({ testId: this.testId })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DialogPage.prototype.clickOnDeleteButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialog.clickOnDeleteButton({ testId: this.testId })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DialogPage.prototype.waitForComponent = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // const loadedPageSelector = getTestIdSelector(getTestId(testId, DialogTestIdModifiers.WRAPPER));
                    return [4 /*yield*/, this.dialog.waitForComponent({ testId: this.testId, modifiers: entities_1.DialogTestIdModifiers.WRAPPER })];
                    case 1:
                        // const loadedPageSelector = getTestIdSelector(getTestId(testId, DialogTestIdModifiers.WRAPPER));
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DialogPage.prototype.isDialogVisible = function () {
        return this.dialog.isDialogVisible({ testId: this.testId });
    };
    return DialogPage;
}(base_page_1.BasePage));
exports.DialogPage = DialogPage;
