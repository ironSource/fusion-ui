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
var consts_1 = require("./consts");
var dialog_page_1 = require("../../pages/dialog-page");
var test_1 = require("@playwright/test");
var dialogPage;
test_1.test.beforeEach(function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var page = _b.page;
    return __generator(this, function (_c) {
        dialogPage = new dialog_page_1.DialogPage(page);
        return [2 /*return*/];
    });
}); });
(0, test_1.test)('Validate component is loaded', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dialogPage.goto()];
            case 1:
                _a.sent();
                return [4 /*yield*/, dialogPage.waitForComponent()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
(0, test_1.test)('Validate dialog text', function () { return __awaiter(void 0, void 0, void 0, function () {
    var dialogTitle, dialogText, expectedText;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // const subtitleText = 'Description'; TODO there is no test id for the subtitle check if it can be seperated
            return [4 /*yield*/, dialogPage.goto()];
            case 1:
                // const subtitleText = 'Description'; TODO there is no test id for the subtitle check if it can be seperated
                _a.sent();
                return [4 /*yield*/, dialogPage.getDialogTitle()];
            case 2:
                dialogTitle = _a.sent();
                (0, test_1.expect)(dialogTitle).toContain('Title');
                return [4 /*yield*/, dialogPage.getDialogText()];
            case 3:
                dialogText = _a.sent();
                expectedText = 'This is a dialog that demonstrates the usage of the DialogTitle and DialogActions components!';
                (0, test_1.expect)(dialogText).toContain(expectedText);
                return [2 /*return*/];
        }
    });
}); });
(0, test_1.test)('Validate dialog buttons close the dialog', function () { return __awaiter(void 0, void 0, void 0, function () {
    var dialogIsVisible;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dialogPage.goto()];
            case 1:
                _a.sent();
                return [4 /*yield*/, dialogPage.isDialogVisible()];
            case 2:
                dialogIsVisible = _a.sent();
                (0, test_1.expect)(dialogIsVisible).toBe(true);
                return [4 /*yield*/, dialogPage.closeDialog()];
            case 3:
                _a.sent();
                return [4 /*yield*/, dialogPage.isDialogVisible()];
            case 4:
                dialogIsVisible = _a.sent();
                (0, test_1.expect)(dialogIsVisible).toBe(false);
                return [4 /*yield*/, dialogPage.openDialog()];
            case 5:
                _a.sent();
                return [4 /*yield*/, dialogPage.clickOnDefaultButton()];
            case 6:
                _a.sent();
                return [4 /*yield*/, dialogPage.isDialogVisible()];
            case 7:
                dialogIsVisible = _a.sent();
                (0, test_1.expect)(dialogIsVisible).toBe(false);
                return [4 /*yield*/, dialogPage.openDialog()];
            case 8:
                _a.sent();
                return [4 /*yield*/, dialogPage.clickOnPrimaryButton()];
            case 9:
                _a.sent();
                return [4 /*yield*/, dialogPage.isDialogVisible()];
            case 10:
                dialogIsVisible = _a.sent();
                (0, test_1.expect)(dialogIsVisible).toBe(false);
                return [2 /*return*/];
        }
    });
}); });
test_1.test.skip('Validate delete button closes dialog', function () { return __awaiter(void 0, void 0, void 0, function () {
    var dialogVisible;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dialogPage.goto({ storyId: consts_1.dialogDeleteStoryId })];
            case 1:
                _a.sent();
                return [4 /*yield*/, dialogPage.clickOnDeleteButton()];
            case 2:
                _a.sent();
                return [4 /*yield*/, dialogPage.isDialogVisible()];
            case 3:
                dialogVisible = _a.sent();
                (0, test_1.expect)(dialogVisible).toBe(false);
                return [2 /*return*/];
        }
    });
}); });
