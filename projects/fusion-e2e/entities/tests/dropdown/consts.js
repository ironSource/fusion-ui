"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SELECTORS = exports.loadedPageSelector = exports.testIdWithIndex = exports.defaultOptionTestId = exports.defaultTestId = exports.dropdownStoryId = void 0;
var utils_1 = require("../../global/utils");
exports.dropdownStoryId = 'v4-components-dropdown-singleselection--basic';
exports.defaultTestId = 'dropdownTestId';
exports.defaultOptionTestId = 'dropdownOptionTestId';
exports.testIdWithIndex = 'dropdownTestIdWithIndex';
exports.loadedPageSelector = (0, utils_1.getTestIdSelector)(exports.defaultTestId);
exports.SELECTORS = {
    FUSION_DROPDOWN: 'fusion-dropdown',
    FUSION_DROPDOWN_OPTIONS: 'fusion-dropdown-option',
    SEARCH_INPUT: 'fusion-dropdown-search input',
    SELECTED_OPTION: 'fusion-dropdown-select label',
    FUSION_DROPDOWN_LOADER: 'fusion-dropdown-loader'
};
