"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ATTRIBUTES = exports.SELECTORS = exports.loadedPageSelector = exports.disabledTestId = exports.thirdTestId = exports.secondTestId = exports.firstTestId = exports.tabTestId = exports.wrapperTestId = exports.defaultTestId = exports.tabsStoryId = void 0;
var entities_1 = require("@ironsource/fusion-ui/entities");
var utils_1 = require("../../global/utils");
exports.tabsStoryId = 'v4-components-tabs--basic';
exports.defaultTestId = 'tabs-default';
exports.wrapperTestId = (0, utils_1.getTestId)(exports.defaultTestId, entities_1.TabsTestIdModifiers.WRAPPER);
exports.tabTestId = (0, utils_1.getTestId)(exports.defaultTestId, entities_1.TabsTestIdModifiers.TAB);
exports.firstTestId = (0, utils_1.getTestId)(exports.defaultTestId, entities_1.TabsTestIdModifiers.TAB) + '1';
exports.secondTestId = (0, utils_1.getTestId)(exports.defaultTestId, entities_1.TabsTestIdModifiers.TAB) + '2';
exports.thirdTestId = (0, utils_1.getTestId)(exports.defaultTestId, entities_1.TabsTestIdModifiers.TAB) + '3';
exports.disabledTestId = (0, utils_1.getTestId)(exports.defaultTestId, entities_1.TabsTestIdModifiers.TAB_DISABLED);
exports.loadedPageSelector = (0, utils_1.getTestIdSelector)((0, utils_1.getTestId)(exports.defaultTestId, entities_1.TabsTestIdModifiers.WRAPPER));
exports.SELECTORS = {
    FUSION_TAB: 'fusion-tab',
    FUSION_TABS: 'fusion-tabs'
};
exports.ATTRIBUTES = {
    TAB_SELECTED: 'tab-selected'
};
