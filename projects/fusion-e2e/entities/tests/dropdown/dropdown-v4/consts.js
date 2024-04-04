"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadedPageSelector = exports.defaultTestId = exports.dropdownMultiSelectionDefaultStoryId = exports.dropdownDefaultStoryId = void 0;
var entities_1 = require("@ironsource/fusion-ui/entities");
var utils_1 = require("../../../global/utils");
exports.dropdownDefaultStoryId = 'v4-components-dropdown-singleselection--basic';
exports.dropdownMultiSelectionDefaultStoryId = 'v4-components-dropdown-multiselection--basic';
exports.defaultTestId = 'dropdownTestId';
exports.loadedPageSelector = (0, utils_1.getTestIdSelector)((0, utils_1.getTestId)(exports.defaultTestId, entities_1.DropdownTestIdModifiers.TRIGGER));
