"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadedPageSelector = exports.triggerTestId = exports.defaultTestId = exports.tooltipStoryId = void 0;
var entities_1 = require("@ironsource/fusion-ui/entities");
var utils_1 = require("../../global/utils");
exports.tooltipStoryId = 'v4-components-tooltip--basic';
exports.defaultTestId = 'tooltip-default';
exports.triggerTestId = (0, utils_1.getTestId)(exports.defaultTestId, entities_1.TooltipTestIdModifiers.TRIGGER);
exports.loadedPageSelector = (0, utils_1.getTestIdSelector)((0, utils_1.getTestId)(exports.defaultTestId, entities_1.TooltipTestIdModifiers.TRIGGER));
