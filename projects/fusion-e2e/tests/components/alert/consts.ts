import {AlertTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {getTestId, getTestIdSelector} from '../../global/utils';

export const alertStoryId = 'v4-components-feedback-alert--basic';
export const alertSeveritiesStoryId = 'v4-components-feedback-alert--severities';
export const defaultTestId = 'alert-default';
export const successTestId = 'success-alert';
export const warningTestId = 'warning-alert';

export const dangerTestId = 'danger-alert';
export const infoTestId = 'info-alert';
export const outlinedTestId = 'outlined-alert';

export const loadedPageSelector = getTestIdSelector(getTestId(defaultTestId, AlertTestIdModifiers.WRAPPER));
