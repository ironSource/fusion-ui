import {InputTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {getTestId, getTestIdSelector} from '../../../global/utils';

export const inputsStoryId = 'v4-components-inputs-textfield--default';
export const inputsStoryIdWithHelper = 'v4-components-inputs-textfield--with-helper';
export const inputsStoryIdWithPassword = 'v4-components-inputs-textfield--password';

export const inputsStoryIdDisabled = 'v4-components-inputs-textfield--disabled';
export const inputsStoryIdWithLengthCounter = 'v4-components-inputs-textfield--with-length-counter';
export const defaultTestId = 'inputs-default';
export const errorTestId = 'error-inputs';
export const successTestId = 'success-inputs';
export const warningTestId = 'warning-inputs';
export const mediumTestId = 'medium-inputs';
export const largeTestId = 'large-inputs';
export const XLTestId = 'XL-inputs';
export const loadedPageSelector = getTestIdSelector(getTestId(defaultTestId, InputTestIdModifiers.WRAPPER));
