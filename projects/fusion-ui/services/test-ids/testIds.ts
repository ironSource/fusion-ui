import {
    AlertTestIdModifiers,
    DropdownTestIdModifiers,
    InputTestIdModifiers,
    TabsTestIdModifiers,
    TooltipTestIdModifiers
} from '@ironsource/fusion-ui/entities';
import {getTestId, getTestIdSelector} from '@ironsource/fusion-ui/global/utils';

const alertDefault = 'alert-default';
export const AlertConsts = {
    alertStoryId: 'v4-components-feedback-alert--basic',
    alertSeveritiesStoryId: 'v4-components-feedback-alert--severities',
    defaultTestId: alertDefault,
    successTestId: 'success-alert',
    warningTestId: 'warning-alert',
    dangerTestId: 'danger-alert',
    infoTestId: 'info-alert',
    outlinedTestId: 'outlined-alert',
    loadedPageSelector: getTestIdSelector(getTestId(alertDefault, AlertTestIdModifiers.WRAPPER))
};
const buttonDefault = 'buttonTestId';
export const ButtonConsts = {
    buttonStoryId: 'v4-components-buttons-button--basic',
    iconButtonStoryId: 'v4-components-buttons-iconbutton--basic',
    defaultTestId: buttonDefault,
    iconButtonTestId: 'iconButtonTestId',
    loadedPageSelector: getTestIdSelector(buttonDefault)
};
const dropdownDefault = 'dropdownTestId';
export const DropdownConsts = {
    dropdownStoryId: 'v4-components-dropdown-singleselection--basic',
    dropdownMultiSelectionDefaultStoryId: 'v4-components-dropdown-multiselection--basic',
    defaultTestId: dropdownDefault,
    defaultOptionTestId: 'dropdownOptionTestId',
    testIdWithIndex: 'dropdownTestIdWithIndex',
    loadedPageSelector: getTestIdSelector(getTestId(dropdownDefault, DropdownTestIdModifiers.TRIGGER))
};
const inputDefault = 'inputs-default';
export const InputConsts = {
    inputsStoryId: 'v4-components-inputs-textfield--default',
    inputsStoryIdWithHelper: 'v4-components-inputs-textfield--with-helper',
    inputsStoryIdWithPassword: 'v4-components-inputs-textfield--password',
    inputsStoryIdDisabled: 'v4-components-inputs-textfield--disabled',
    inputsStoryIdWithLengthCounter: 'v4-components-inputs-textfield--with-length-counter',
    defaultTestId: inputDefault,
    errorTestId: 'error-inputs',
    successTestId: 'success-inputs',
    warningTestId: 'warning-inputs',
    mediumTestId: 'medium-inputs',
    largeTestId: 'large-inputs',
    XLTestId: 'XL-inputs',
    loadedPageSelector: getTestIdSelector(getTestId(inputDefault, InputTestIdModifiers.WRAPPER))
};
export const ModalConsts = {};
const tabsDefault = 'tabs-default';
export const TabsConsts = {
    tabsStoryId: 'v4-components-tabs--basic',
    defaultTestId: tabsDefault,
    wrapperTestId: getTestId(tabsDefault, TabsTestIdModifiers.WRAPPER),
    tabTestId: getTestId(tabsDefault, TabsTestIdModifiers.TAB),
    firstTestId: getTestId(tabsDefault, TabsTestIdModifiers.TAB) + '1',
    secondTestId: getTestId(tabsDefault, TabsTestIdModifiers.TAB) + '2',
    thirdTestId: getTestId(tabsDefault, TabsTestIdModifiers.TAB) + '3',
    disabledTestId: getTestId(tabsDefault, TabsTestIdModifiers.TAB_DISABLED),
    loadedPageSelector: getTestIdSelector(getTestId(tabsDefault, TabsTestIdModifiers.WRAPPER))
};

const tooltipDefault = 'tooltip-default';

export const TooltipConsts = {
    tooltipStoryId: 'v4-components-tooltip--basic',
    defaultTestId: tooltipDefault,
    triggerTestId: getTestId(tooltipDefault, TooltipTestIdModifiers.TRIGGER),
    loadedPageSelector: getTestIdSelector(getTestId(tooltipDefault, TooltipTestIdModifiers.TRIGGER))
};
