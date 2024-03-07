import {InputTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {getTestId, getTestIdSelector} from '../../../global/utils';

export const inputsStoryId = 'v4-components-inputs-textfield--default';
export const defaultTestId = 'inputs-default';
export const errorTestId = 'error-inputs';
export const successTestId = 'success-inputs';
export const warningTestId = 'warning-inputs';
export const mediumTestId = 'medium-inputs';
export const largeTestId = 'large-inputs';
export const XLTestId = 'XL-inputs';
export const loadedPageSelector = getTestIdSelector(getTestId(defaultTestId, InputTestIdModifiers.WRAPPER));
