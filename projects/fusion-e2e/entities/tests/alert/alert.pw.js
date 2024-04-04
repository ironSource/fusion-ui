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
var alert_page_1 = require("../../pages/alert-page");
var test_1 = require("@playwright/test");
var const_1 = require("./const");
var component;
test_1.test.beforeEach(function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            component = new alert_page_1.AlertPage(page);
            return [2 /*return*/];
        });
    });
});
(0, test_1.test)('Validate component is loaded', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, component.goto()];
            case 1:
                _a.sent();
                return [4 /*yield*/, component.waitForComponent()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
(0, test_1.test)('Validate alert title', function () { return __awaiter(void 0, void 0, void 0, function () {
    var alertTitle, actualText;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                alertTitle = 'Alert title';
                return [4 /*yield*/, component.goto({ additionalComponentParams: { title: alertTitle } })];
            case 1:
                _a.sent();
                return [4 /*yield*/, component.getAlertTitle()];
            case 2:
                actualText = _a.sent();
                (0, test_1.expect)(actualText).toContain(alertTitle);
                return [2 /*return*/];
        }
    });
}); });
(0, test_1.test)('Validate alert text', function () { return __awaiter(void 0, void 0, void 0, function () {
    var actualText;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, component.goto({
                    additionalComponentParams: { description: 'Alert Description' }
                })];
            case 1:
                _a.sent();
                return [4 /*yield*/, component.getAlertText()];
            case 2:
                actualText = _a.sent();
                (0, test_1.expect)(actualText).toContain('Alert Description');
                return [2 /*return*/];
        }
    });
}); });
(0, test_1.test)('Validate action button text', function () { return __awaiter(void 0, void 0, void 0, function () {
    var actionButtonText, actualText;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                actionButtonText = 'Action Button';
                return [4 /*yield*/, component.goto({
                        additionalComponentParams: { actionText: actionButtonText }
                    })];
            case 1:
                _a.sent();
                return [4 /*yield*/, component.getActionButtonText()];
            case 2:
                actualText = _a.sent();
                (0, test_1.expect)(actualText).toContain(actionButtonText);
                return [2 /*return*/];
        }
    });
}); });
test_1.test.skip('Validate alert type', function () { return __awaiter(void 0, void 0, void 0, function () {
    var successAlertType, iconType, errorAlertType;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                successAlertType = 'success';
                return [4 /*yield*/, component.goto({
                        storyId: const_1.alertSeveritiesStoryId,
                        additionalComponentParams: { variant: successAlertType }
                    })];
            case 1:
                _a.sent();
                return [4 /*yield*/, component.getAlertIconType()];
            case 2:
                iconType = _a.sent();
                (0, test_1.expect)(iconType).toContain(successAlertType);
                errorAlertType = 'danger';
                return [4 /*yield*/, component.goto({
                        additionalComponentParams: { variant: errorAlertType }
                    })];
            case 3:
                _a.sent();
                return [4 /*yield*/, component.getAlertIconType()];
            case 4:
                iconType = _a.sent();
                (0, test_1.expect)(iconType).toContain(errorAlertType);
                return [2 /*return*/];
        }
    });
}); });
