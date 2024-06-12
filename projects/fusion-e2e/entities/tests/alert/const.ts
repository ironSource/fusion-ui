import {AlertTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {getTestId, getTestIdSelector} from '../../global/utils';

export const alertStoryId = 'v4-components-feedback-alert--basic';
export const alertSeveritiesStoryId = 'v4-components-feedback-alert--severities';
export const defaultTestId = 'alert-default';
export const loadedPageSelector = getTestIdSelector(getTestId(defaultTestId, AlertTestIdModifiers.WRAPPER));
