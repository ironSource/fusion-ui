import {DropdownTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {getTestId, getTestIdSelector} from '../../../global/utils';

export const dropdownDefaultStoryId = 'v4-components-dropdown-singleselection--basic';
export const dropdownMultiSelectionDefaultStoryId = 'v4-components-dropdown-multiselection--basic';
export const defaultTestId = 'dropdownTestId';
export const loadedPageSelector = getTestIdSelector(getTestId(defaultTestId, DropdownTestIdModifiers.TRIGGER));
