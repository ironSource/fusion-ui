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
var button_page_1 = require("../../pages/button-page");
var buttonPage;
test_1.test.beforeEach(function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    buttonPage = new button_page_1.ButtonPage(page);
                    return [4 /*yield*/, buttonPage.goto()];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
(0, test_1.test)('Verify button functionality', function () { return __awaiter(void 0, void 0, void 0, function () {
    var buttonText;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, buttonPage.waitForComponent()];
            case 1:
                _a.sent();
                return [4 /*yield*/, buttonPage.clickOnButton()];
            case 2:
                _a.sent();
                return [4 /*yield*/, buttonPage.getButtonText()];
            case 3:
                buttonText = _a.sent();
                (0, test_1.expect)(buttonText).toContain(' Default');
                return [2 /*return*/];
        }
    });
}); });
(0, test_1.test)('Verify button loading state', function () { return __awaiter(void 0, void 0, void 0, function () {
    var buttonLoaded;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, buttonPage.isButtonLoading()];
            case 1:
                buttonLoaded = _a.sent();
                (0, test_1.expect)(buttonLoaded).toBe(false);
                return [4 /*yield*/, buttonPage.goto({ additionalComponentParams: { loading: true } })];
            case 2:
                _a.sent();
                return [4 /*yield*/, buttonPage.isButtonLoading()];
            case 3:
                buttonLoaded = _a.sent();
                (0, test_1.expect)(buttonLoaded).toBe(true);
                return [2 /*return*/];
        }
    });
}); });
(0, test_1.test)('Verify button disabled state', function () { return __awaiter(void 0, void 0, void 0, function () {
    var buttonDisabled;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, buttonPage.isButtonDisabled()];
            case 1:
                buttonDisabled = _a.sent();
                (0, test_1.expect)(buttonDisabled).toBe(false);
                return [4 /*yield*/, buttonPage.goto({ additionalComponentParams: { disabled: true } })];
            case 2:
                _a.sent();
                return [4 /*yield*/, buttonPage.isButtonDisabled()];
            case 3:
                buttonDisabled = _a.sent();
                (0, test_1.expect)(buttonDisabled).toBe(true);
                return [2 /*return*/];
        }
    });
}); });
(0, test_1.test)('Verify icon button', function () { return __awaiter(void 0, void 0, void 0, function () {
    var buttonText;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, buttonPage.getButtonText()];
            case 1:
                buttonText = _a.sent();
                (0, test_1.expect)(buttonText).toContain(' Default');
                return [2 /*return*/];
        }
    });
}); });
