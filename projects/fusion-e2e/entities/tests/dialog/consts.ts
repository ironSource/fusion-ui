import {DialogTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {getTestId, getTestIdSelector} from '../../global/utils';

export const dialogStoryId = 'v4-components-feedback-dialog-dialog--basic';
export const dialogDeleteStoryId = 'v4-components-dialog--delete';
export const defaultTestId = 'dialog-default';

export const wrapperTestId = getTestId(defaultTestId, DialogTestIdModifiers.WRAPPER);

export const loadedPageSelector = getTestIdSelector(wrapperTestId);

export const SELECTORS = {
    MODAL: '.modal',
    SUBMIT_BUTTON: '.fu-primary-button',
    CANCEL_BUTTON: 'fusion-modal-footer .fu-secondary-button',
    MODAL_CONTENT: 'fusion-modal-content',
    HEADER_TITLE: 'fusion-modal-header .modal-header-title',
    CLOSE_BUTTON: 'fusion-modal-header .fu-close'
};
