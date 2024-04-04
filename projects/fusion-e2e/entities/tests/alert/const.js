"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadedPageSelector = exports.defaultTestId = exports.alertSeveritiesStoryId = exports.alertStoryId = void 0;
var entities_1 = require("@ironsource/fusion-ui/entities");
var utils_1 = require("../../global/utils");
exports.alertStoryId = 'v4-components-feedback-alert--basic';
exports.alertSeveritiesStoryId = 'v4-components-feedback-alert--severities';
exports.defaultTestId = 'alert-default';
exports.loadedPageSelector = (0, utils_1.getTestIdSelector)((0, utils_1.getTestId)(exports.defaultTestId, entities_1.AlertTestIdModifiers.WRAPPER));
