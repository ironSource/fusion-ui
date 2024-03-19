import {TooltipTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {getTestId, getTestIdSelector} from '../../global/utils';

export const tooltipStoryId = 'v4-components-tooltip--basic';
export const defaultTestId = 'tooltip-default';

export const triggerTestId = getTestId(defaultTestId, TooltipTestIdModifiers.TRIGGER);

export const loadedPageSelector = getTestIdSelector(getTestId(defaultTestId, TooltipTestIdModifiers.TRIGGER));
