import {expect, test} from '@playwright/test';
import {DropdownPage} from './dropdown-page';
import {chipMultiStoryId, chipSingleStoryId} from './consts';

const preSelectedArr = [2, 4, 5];
let component: DropdownPage;

test.beforeEach(async ({page}) => {
    component = new DropdownPage(page);
});

test('Verify wait for component', async () => {
    await component.waitForComponent();
});

test('Select dropdown item by index', async () => {
    await component.goto();
    await component.selectDropdownOptionByIndex(2);
    const actualItem = await component.getSelectedLabel();
    expect(actualItem).toBe('Option_5');
});

test('Verify drop down title', async () => {
    const title = 'Label';
    await component.goto({
        additionalComponentParams: {triggerLabel: title}
    });
    const dropdownTitle = await component.getDropdownTitle();
    expect(dropdownTitle).toBe(title);
});

test('Select dropdown by item name', async () => {
    await component.goto();
    const optionToSelect = 'Option_5';
    await component.selectDropdownOptionByName(optionToSelect);
    const selectedOption = await component.getSelectedLabel();
    expect(selectedOption).toBe(optionToSelect);
});

test('Verify multi selection dropdown with one item', async () => {
    await component.goto({additionalComponentParams: {multi: 'true'}});
    const selectionArr = [5];
    await component.selectMultipleItems(selectionArr);
    const selectedOption = await component.getSelectedLabel();
    expect(selectedOption).toBe('Option_4');
});

test('Verify Cancel behavior', async () => {
    await component.goto({additionalComponentParams: {multi: 'true'}});
    await component.selectMultipleItems(preSelectedArr);
    const selectedOptions = [5, 7, 9];
    await component.selectMultipleItems(selectedOptions, false);
    await component.clickOnCancel();
    const selectedItemsText = await component.getSelectedLabel();
    expect(selectedItemsText).toBe(`${preSelectedArr.length} selected`);
});

test('Verify clear all behavior', async () => {
    await component.goto({additionalComponentParams: {multi: 'true'}});
    await component.selectMultipleItems(preSelectedArr);
    await component.openDropdownComponent();
    await component.clearAllOptions();
    await component.clickOnCancel();
    let selectedItemsText = await component.getSelectedLabel();
    expect(selectedItemsText).toBe(`${preSelectedArr.length} selected`);
    await component.openDropdownComponent();
    await component.clearAllOptions();
    await component.clickOnApply();
    selectedItemsText = await component.getSelectedLabel();
    expect(selectedItemsText).toBe('Select');
});

test('Verify dropdown with search', async () => {
    await component.goto({additionalComponentParams: {inlineSearch: 'true'}});
    const searchTerm = '933';
    const searchResults = await component.searchForItem(searchTerm);
    expect(searchResults?.includes(searchResults)).toBe(true);
});

test('Verify multi selection dropdown by name', async () => {
    await component.goto({additionalComponentParams: {multi: 'true'}});
    const selectionArr = ['Option_1', 'Option_4', 'Option_7'];
    await component.selectMultipleItemsByName(selectionArr);
    const selectedItem = await component.getSelectedLabel();
    expect(selectedItem).toBe(`${selectionArr.length} selected`);
});

test('Verify error in dropdown', async () => {
    await component.goto({
        additionalComponentParams: {
            triggerFeedbackText: 'Error text',
            triggerFeedbackVariant: 'error'
        }
    });
    const errorStateExists = await component.isErrorState();
    expect(errorStateExists).toBe(true);
});

test('Verify dropdown is disabled', async () => {
    await component.goto({
        additionalComponentParams: {
            disabled: true
        }
    });
    const ddDisabled = await component.isDisabled();
    expect(ddDisabled).toBe(true);
});

test('Verify select all behavior', async () => {
    await component.goto({
        additionalComponentParams: {showSelectAll: 'true', multi: 'true'}
    });
    await component.selectMultipleItems([1, 2, 4]);
    let selectAllChecked = await component.isSelectAllIndeterminate();
    expect(selectAllChecked).toBe(true);
    await component.selectMultipleItems([0]);
    let selectedItems = await component.getSelectedLabel();
    expect(selectedItems).toBe('All selected (100)');
    await component.selectMultipleItems([0]);
    selectedItems = await component.getSelectedLabel();
    expect(selectedItems).toBe('Select');
    await component.openDropdownComponent();
    selectAllChecked = await component.isSelectAllChecked();
    expect(selectAllChecked).toBe(false);
    selectAllChecked = await component.isSelectAllIndeterminate();
    expect(selectAllChecked).toBe(false);
});

test('Verify chip trigger functionality', async () => {
    await component.goto({
        storyId: chipSingleStoryId
    });
    await component.selectDropdownOptionByIndex(1);
    let selectedItem = await component.getSelectedLabel();
    expect(selectedItem).toBe('Select: Hamburger');
    await component.removeChipSelection();
    selectedItem = await component.getSelectedLabel();
    expect(selectedItem).toBe('Select');
});

test('Verify chip trigger multi functionality', async () => {
    await component.goto({
        storyId: chipMultiStoryId
    });
    await component.selectMultipleItems(preSelectedArr);
    const selectedItem = await component.getSelectedLabel();
    expect(selectedItem).toBe('Select: Hamburger, +2');
});
