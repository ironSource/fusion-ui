"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadedPageSelector = exports.triggerTestId = exports.defaultTestId = exports.chipFilterStoryId = void 0;
var entities_1 = require("@ironsource/fusion-ui/entities");
var utils_1 = require("../../global/utils");
exports.chipFilterStoryId = 'v4-components-filterpanel--default';
exports.defaultTestId = 'filterpanel-default';
exports.triggerTestId = (0, utils_1.getTestId)(exports.defaultTestId, entities_1.ChipFilterTestIdModifiers.CHIP_FILTER);
exports.loadedPageSelector = (0, utils_1.getTestIdSelector)((0, utils_1.getTestId)(exports.defaultTestId, entities_1.ChipFilterTestIdModifiers.CHIP_FILTER));
