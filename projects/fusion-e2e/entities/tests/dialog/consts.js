"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SELECTORS = exports.loadedPageSelector = exports.wrapperTestId = exports.defaultTestId = exports.dialogDeleteStoryId = exports.dialogStoryId = void 0;
var entities_1 = require("@ironsource/fusion-ui/entities");
var utils_1 = require("../../global/utils");
exports.dialogStoryId = 'v4-components-feedback-dialog-dialog--basic';
exports.dialogDeleteStoryId = 'v4-components-dialog--delete';
exports.defaultTestId = 'dialog-default';
exports.wrapperTestId = (0, utils_1.getTestId)(exports.defaultTestId, entities_1.DialogTestIdModifiers.WRAPPER);
exports.loadedPageSelector = (0, utils_1.getTestIdSelector)(exports.wrapperTestId);
exports.SELECTORS = {
    MODAL: '.modal',
    SUBMIT_BUTTON: '.fu-primary-button',
    CANCEL_BUTTON: 'fusion-modal-footer .fu-secondary-button',
    MODAL_CONTENT: 'fusion-modal-content',
    HEADER_TITLE: 'fusion-modal-header .modal-header-title',
    CLOSE_BUTTON: 'fusion-modal-header .fu-close'
};
