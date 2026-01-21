import {TabsTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {getTestId, getTestIdSelector} from '../../global/utils';

export const tabsStoryId = 'v4-components-tabs--basic';
export const defaultTestId = 'tabs-default';
export const wrapperTestId = getTestId(defaultTestId, TabsTestIdModifiers.WRAPPER);
export const tabTestId = getTestId(defaultTestId, TabsTestIdModifiers.TAB);
export const firstTestId = getTestId(defaultTestId, TabsTestIdModifiers.TAB) + '1';
export const secondTestId = getTestId(defaultTestId, TabsTestIdModifiers.TAB) + '2';
export const thirdTestId = getTestId(defaultTestId, TabsTestIdModifiers.TAB) + '3';
export const disabledTestId = getTestId(defaultTestId, TabsTestIdModifiers.TAB_DISABLED);
export const loadedPageSelector = getTestIdSelector(getTestId(defaultTestId, TabsTestIdModifiers.WRAPPER));

export const SELECTORS = {
    FUSION_TAB: 'fusion-tab',
    FUSION_TABS: 'fusion-tabs'
};

export const ATTRIBUTES = {
    TAB_SELECTED: 'tab-selected'
};
