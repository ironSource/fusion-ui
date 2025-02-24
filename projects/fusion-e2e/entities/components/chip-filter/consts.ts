import {ChipFilterTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {getTestId, getTestIdSelector} from '../../global/utils';

export const chipFilterStoryId = 'v4-components-filterpanel--default';
export const defaultTestId = 'filterpanel-default';

export const triggerTestId = getTestId(defaultTestId, ChipFilterTestIdModifiers.CHIP_FILTER);

export const loadedPageSelector = getTestIdSelector(getTestId(defaultTestId, ChipFilterTestIdModifiers.CHIP_FILTER));
