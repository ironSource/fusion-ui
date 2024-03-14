import {
    AlertTestIdModifiers,
    DropdownTestIdModifiers,
    InputTestIdModifiers,
    TabsTestIdModifiers,
    TooltipTestIdModifiers
} from '@ironsource/fusion-ui/entities';
import {TestIdsService} from '@ironsource/fusion-ui/services';

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
    loadedPageSelector: TestIdsService.getTestIdSelector(TestIdsService.getTestId(alertDefault, AlertTestIdModifiers.WRAPPER))
};
const buttonDefault = 'buttonTestId';
export const ButtonConsts = {
    buttonStoryId: 'v4-components-buttons-button--basic',
    iconButtonStoryId: 'v4-components-buttons-iconbutton--basic',
    defaultTestId: buttonDefault,
    iconButtonTestId: 'iconButtonTestId',
    loadedPageSelector: TestIdsService.getTestIdSelector(buttonDefault)
};
const dropdownDefault = 'dropdownTestId';
export const DropdownConsts = {
    dropdownStoryId: 'v4-components-dropdown-singleselection--basic',
    dropdownMultiSelectionDefaultStoryId: 'v4-components-dropdown-multiselection--basic',
    defaultTestId: dropdownDefault,
    defaultOptionTestId: 'dropdownOptionTestId',
    testIdWithIndex: 'dropdownTestIdWithIndex',
    loadedPageSelector: TestIdsService.getTestIdSelector(TestIdsService.getTestId(dropdownDefault, DropdownTestIdModifiers.TRIGGER))
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
    loadedPageSelector: TestIdsService.getTestIdSelector(TestIdsService.getTestId(inputDefault, InputTestIdModifiers.WRAPPER))
};
export const ModalConsts = {};
const tabsDefault = 'tabs-default';
export const TabsConsts = {
    tabsStoryId: 'v4-components-tabs--basic',
    defaultTestId: tabsDefault,
    wrapperTestId: TestIdsService.getTestId(tabsDefault, TabsTestIdModifiers.WRAPPER),
    tabTestId: TestIdsService.getTestId(tabsDefault, TabsTestIdModifiers.TAB),
    firstTestId: TestIdsService.getTestId(tabsDefault, TabsTestIdModifiers.TAB) + '1',
    secondTestId: TestIdsService.getTestId(tabsDefault, TabsTestIdModifiers.TAB) + '2',
    thirdTestId: TestIdsService.getTestId(tabsDefault, TabsTestIdModifiers.TAB) + '3',
    disabledTestId: TestIdsService.getTestId(tabsDefault, TabsTestIdModifiers.TAB_DISABLED),
    loadedPageSelector: TestIdsService.getTestIdSelector(TestIdsService.getTestId(tabsDefault, TabsTestIdModifiers.WRAPPER))
};

const tooltipDefault = 'tooltip-default';

export const TooltipConsts = {
    tooltipStoryId: 'v4-components-tooltip--basic',
    defaultTestId: tooltipDefault,
    triggerTestId: TestIdsService.getTestId(tooltipDefault, TooltipTestIdModifiers.TRIGGER),
    loadedPageSelector: TestIdsService.getTestIdSelector(TestIdsService.getTestId(tooltipDefault, TooltipTestIdModifiers.TRIGGER))
};
