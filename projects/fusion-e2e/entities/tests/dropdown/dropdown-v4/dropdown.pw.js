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
var dropdown_page_1 = require("../../../pages/dropdown-page");
var consts_1 = require("./consts");
var preSelectedArr = [2, 4, 5];
var component;
test_1.test.beforeEach(function (_a) {
    var page = _a.page;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            component = new dropdown_page_1.DropdownPage(page);
            return [2 /*return*/];
        });
    });
});
(0, test_1.test)('Verify wait for component', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, component.waitForComponent()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
(0, test_1.test)('Select dropdown item by index', function () { return __awaiter(void 0, void 0, void 0, function () {
    var actualItem;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, component.goto()];
            case 1:
                _a.sent();
                return [4 /*yield*/, component.selectDropdownOptionByIndex(5)];
            case 2:
                _a.sent();
                return [4 /*yield*/, component.getSelectedLabel()];
            case 3:
                actualItem = _a.sent();
                (0, test_1.expect)(actualItem).toBe('Option_5');
                return [2 /*return*/];
        }
    });
}); });
// test('Verify drop down title', async () => {
//     const title = 'Label';
//     await component.goto({
//         additionalComponentParams: {triggerLabel: title}
//     });
//     const dropdownTitle = await component.getDropdownTitle();
//     expect(dropdownTitle).toBe(title);
// });
(0, test_1.test)('Select dropdown by item name', function () { return __awaiter(void 0, void 0, void 0, function () {
    var optionToSelect, selectedOption;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, component.goto()];
            case 1:
                _a.sent();
                optionToSelect = 'Option_5';
                return [4 /*yield*/, component.selectDropdownOptionByName(optionToSelect)];
            case 2:
                _a.sent();
                return [4 /*yield*/, component.getSelectedLabel()];
            case 3:
                selectedOption = _a.sent();
                (0, test_1.expect)(selectedOption).toBe(optionToSelect);
                return [2 /*return*/];
        }
    });
}); });
(0, test_1.test)('Verify multi selection dropdown with one item', function () { return __awaiter(void 0, void 0, void 0, function () {
    var selectionArr, selectedOption;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, component.goto({ storyId: consts_1.dropdownMultiSelectionDefaultStoryId })];
            case 1:
                _a.sent();
                selectionArr = [5];
                return [4 /*yield*/, component.selectMultipleItems(selectionArr)];
            case 2:
                _a.sent();
                return [4 /*yield*/, component.getSelectedLabel()];
            case 3:
                selectedOption = _a.sent();
                (0, test_1.expect)(selectedOption).toBe('Option_4');
                return [2 /*return*/];
        }
    });
}); });
(0, test_1.test)('Verify Cancel behavior', function () { return __awaiter(void 0, void 0, void 0, function () {
    var selectedOptions, selectedItemsText;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, component.goto({ storyId: consts_1.dropdownMultiSelectionDefaultStoryId })];
            case 1:
                _a.sent();
                return [4 /*yield*/, component.selectMultipleItems(preSelectedArr)];
            case 2:
                _a.sent();
                selectedOptions = [5, 7, 9];
                return [4 /*yield*/, component.selectMultipleItems(selectedOptions, false)];
            case 3:
                _a.sent();
                return [4 /*yield*/, component.clickOnCancel()];
            case 4:
                _a.sent();
                return [4 /*yield*/, component.getSelectedLabel()];
            case 5:
                selectedItemsText = _a.sent();
                (0, test_1.expect)(selectedItemsText).toBe("".concat(preSelectedArr.length, " selected"));
                return [2 /*return*/];
        }
    });
}); });
(0, test_1.test)('Verify clear all behavior', function () { return __awaiter(void 0, void 0, void 0, function () {
    var selectedItemsText;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, component.goto({ storyId: consts_1.dropdownMultiSelectionDefaultStoryId })];
            case 1:
                _a.sent();
                return [4 /*yield*/, component.selectMultipleItems(preSelectedArr)];
            case 2:
                _a.sent();
                return [4 /*yield*/, component.openDropdownComponent()];
            case 3:
                _a.sent();
                return [4 /*yield*/, component.clearAllOptions()];
            case 4:
                _a.sent();
                return [4 /*yield*/, component.clickOnCancel()];
            case 5:
                _a.sent();
                return [4 /*yield*/, component.getSelectedLabel()];
            case 6:
                selectedItemsText = _a.sent();
                (0, test_1.expect)(selectedItemsText).toBe("".concat(preSelectedArr.length, " selected"));
                return [4 /*yield*/, component.openDropdownComponent()];
            case 7:
                _a.sent();
                return [4 /*yield*/, component.clearAllOptions()];
            case 8:
                _a.sent();
                return [4 /*yield*/, component.clickOnApply()];
            case 9:
                _a.sent();
                return [4 /*yield*/, component.getSelectedLabel()];
            case 10:
                selectedItemsText = _a.sent();
                (0, test_1.expect)(selectedItemsText).toBe('Select');
                return [2 /*return*/];
        }
    });
}); });
(0, test_1.test)('Verify dropdown with search', function () { return __awaiter(void 0, void 0, void 0, function () {
    var searchTerm, searchResults;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, component.goto({ storyId: 'v4-components-dropdown-singleselection--with-search' })];
            case 1:
                _a.sent();
                searchTerm = '933';
                return [4 /*yield*/, component.searchForItem(searchTerm)];
            case 2:
                searchResults = _a.sent();
                (0, test_1.expect)(searchResults === null || searchResults === void 0 ? void 0 : searchResults.includes(searchResults)).toBe(true);
                return [2 /*return*/];
        }
    });
}); });
(0, test_1.test)('Verify multi selection dropdown by name', function () { return __awaiter(void 0, void 0, void 0, function () {
    var selectionArr, selectedItem;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, component.goto({ storyId: consts_1.dropdownMultiSelectionDefaultStoryId })];
            case 1:
                _a.sent();
                selectionArr = ['Option_1', 'Option_4', 'Option_7'];
                return [4 /*yield*/, component.selectMultipleItemsByName(selectionArr)];
            case 2:
                _a.sent();
                return [4 /*yield*/, component.getSelectedLabel()];
            case 3:
                selectedItem = _a.sent();
                (0, test_1.expect)(selectedItem).toBe("".concat(selectionArr.length, " selected"));
                return [2 /*return*/];
        }
    });
}); });
// test('Verify error in dropdown', async () => {
//     await component.goto({
//         additionalComponentParams: {
//             triggerFeedbackText: 'Error text',
//             triggerFeedbackVariant: 'error'
//         }
//     });
//     const errorStateExists = await component.isErrorState();
//     expect(errorStateExists).toBe(true);
// });
//
// test('Verify dropdown is disabled', async () => {
//     await component.goto({
//         additionalComponentParams: {
//             disabled: true
//         }
//     });
//     const ddDisabled = await component.isDisabled();
//     expect(ddDisabled).toBe(true);
// });
(0, test_1.test)('Verify select all behavior', function () { return __awaiter(void 0, void 0, void 0, function () {
    var selectAllChecked, selectedItems;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, component.goto({
                    storyId: consts_1.dropdownMultiSelectionDefaultStoryId,
                    additionalComponentParams: { showSelectAll: 'true' }
                })];
            case 1:
                _a.sent();
                return [4 /*yield*/, component.goto({
                        storyId: consts_1.dropdownMultiSelectionDefaultStoryId,
                        additionalComponentParams: { showSelectAll: 'true' }
                    })];
            case 2:
                _a.sent();
                return [4 /*yield*/, component.selectMultipleItems([1, 2, 4])];
            case 3:
                _a.sent();
                return [4 /*yield*/, component.isSelectAllIndeterminate()];
            case 4:
                selectAllChecked = _a.sent();
                (0, test_1.expect)(selectAllChecked).toBe(true);
                return [4 /*yield*/, component.selectMultipleItems([0])];
            case 5:
                _a.sent();
                return [4 /*yield*/, component.getSelectedLabel()];
            case 6:
                selectedItems = _a.sent();
                (0, test_1.expect)(selectedItems).toBe('100 selected');
                return [4 /*yield*/, component.selectMultipleItems([0])];
            case 7:
                _a.sent();
                return [4 /*yield*/, component.getSelectedLabel()];
            case 8:
                selectedItems = _a.sent();
                (0, test_1.expect)(selectedItems).toBe('Select');
                return [4 /*yield*/, component.openDropdownComponent()];
            case 9:
                _a.sent();
                return [4 /*yield*/, component.isSelectAllChecked()];
            case 10:
                selectAllChecked = _a.sent();
                (0, test_1.expect)(selectAllChecked).toBe(false);
                return [4 /*yield*/, component.isSelectAllIndeterminate()];
            case 11:
                selectAllChecked = _a.sent();
                (0, test_1.expect)(selectAllChecked).toBe(false);
                return [2 /*return*/];
        }
    });
}); });
// test('Verify chip trigger functionality', async () => {
//     await component.goto({
//         storyId: chipSingleStoryId
//     });
//     await component.selectDropdownOptionByIndex(1);
//     let selectedItem = await component.getSelectedLabel();
//     expect(selectedItem).toBe('Select: Hamburger');
//     await component.removeChipSelection();
//     selectedItem = await component.getSelectedLabel();
//     expect(selectedItem).toBe('Select');
// });
//
// test('Verify chip trigger multi functionality', async () => {
//     await component.goto({
//         storyId: chipMultiStoryId
//     });
//     await component.selectMultipleItems(preSelectedArr);
//     const selectedItem = await component.getSelectedLabel();
//     expect(selectedItem).toBe('Select: Hamburger, +2');
// });
