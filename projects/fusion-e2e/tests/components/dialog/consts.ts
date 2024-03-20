import {DialogTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {getTestId} from '../../global/utils';

export const dialogStoryId = 'v4-components-feedback-dialog-dialog--basic';
export const dialogDeleteStoryId = 'v4-components-dialog--delete';
export const defaultTestId = 'dialog-default';
export const loadedPageSelector = getTestId(defaultTestId, DialogTestIdModifiers.WRAPPER);
