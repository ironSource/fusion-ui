"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadedPageSelector = exports.labelTestId = exports.defaultTestId = exports.chartStoryId = void 0;
var entities_1 = require("@ironsource/fusion-ui/entities");
var utils_1 = require("../../global/utils");
exports.chartStoryId = 'v4-components-datavisualization-charts-barchart--basic';
exports.defaultTestId = 'charts-default';
exports.labelTestId = (0, utils_1.getTestId)(exports.defaultTestId, entities_1.ChartLabelTestIdModifiers.LABEL);
exports.loadedPageSelector = (0, utils_1.getTestIdSelector)(exports.labelTestId);
