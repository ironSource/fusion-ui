import {ChipFilterTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {getTestId, getTestIdSelector} from '../../global/utils';

export const chipFilterStoryId = 'v4-components-filterpanel--default';
export const defaultTestId = 'filterpanel-default';

export const triggerTestId = getTestId(defaultTestId, ChipFilterTestIdModifiers.CHIP_FILTER);

export const loadedPageSelector = getTestIdSelector(getTestId(defaultTestId, ChipFilterTestIdModifiers.CHIP_FILTER));

export const SELECTORS = {
    CHIP_TEXT: '.fu-chip-text',
    CHIP_LEFT_ICON: '.fu-chip-left-icon',
    CHIP_RIGHT_ICON: '.fu-chip-right-icon',
    ICON_CLOSE: '.fu-icon-close',
    CHIP_CONTENT: '.fu-chip-content'
};
