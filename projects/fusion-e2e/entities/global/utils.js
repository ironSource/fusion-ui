"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestIdSelector = exports.getTestId = exports.createStoryBookComponentPath = exports.addPropsToUrl = void 0;
var addPropsToUrl = function (props, url) {
    var additionalParams = new URLSearchParams(props).toString();
    return url.includes('?') ? "".concat(url).concat(additionalParams) : "".concat(url, "?").concat(additionalParams);
};
exports.addPropsToUrl = addPropsToUrl;
var createStoryBookComponentPath = function (componentId, componentParams) {
    if (componentParams === void 0) { componentParams = {}; }
    var args = Object.entries(componentParams)
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return "".concat(key, ":").concat(value);
    })
        .join(';');
    var props = {
        id: componentId,
        viewMode: 'story',
        args: args
    };
    var url = 'iframe.html';
    return (0, exports.addPropsToUrl)(props, url);
};
exports.createStoryBookComponentPath = createStoryBookComponentPath;
var getTestId = function (testId, testIdModifier) { return "".concat(testId, "--").concat(testIdModifier); };
exports.getTestId = getTestId;
var getTestIdSelector = function (testId) { return "[data-testid='".concat(testId, "']"); };
exports.getTestIdSelector = getTestIdSelector;
