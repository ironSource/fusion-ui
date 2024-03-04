import {expect, test} from '@playwright/test';
import {DropdownPage} from './dropdown-page';
let component: DropdownPage;

test.beforeEach(async ({page}) => {
    component = new DropdownPage(page);
    await component.goto();
});

test('Verify wait for component', async () => {
    await component.waitForComponent();
});

test('Verify drop down title', async () => {
    const dropdownTitle = await component.getDropdownTitle();
    expect(dropdownTitle).toBe('Label');
});

test('Verify click out of dropdown', async () => {
    await component.verifyClickOutOfFocus();
});

test('Select dropdown item by index', async () => {
    await component.selectDropdownOptionByIndex(5);
    const selectedOption = await component.getSelectedItem();
    expect(selectedOption).toBe('Option_5');
});

test('Select dropdown by item name', async () => {
    const optionToSelect = 'Option_8';
    await component.selectDropdownOptionByName(optionToSelect);
    const selectedOption = await component.getSelectedItem();
    expect(selectedOption).toBe(optionToSelect);
});

test.skip('Verify multi selection dropdown with one item', async () => {
    await component.goto({additionalComponentParams: {multi: 'true'}});
    const selectionArr = [5];
    await component.selectMultipleItems(selectionArr);
    const selectedOption = await component.getSelectedItem();
    expect(selectedOption).toBe(`Option_${selectionArr[0]}`);
});

test.skip('Verify Cancel behavior', async () => {
    await component.goto({additionalComponentParams: {multi: 'true'}});
    const preSelectedArr = [1, 2, 4, 6, 8];
    await component.selectMultipleItems(preSelectedArr);
    const selectedOptions = [5, 7, 9];
    await component.selectMultipleItems(selectedOptions, false);
    await component.clickOnCancel();
    const selectedItemsText = await component.getSelectedItem();
    expect(selectedItemsText).toBe(`${preSelectedArr.length} selected`);
});

test.skip('Verify dropdown with search', async () => {
    await component.goto({additionalComponentParams: {inlineSearch: 'true'}});
    const searchTerm = '933';
    const searchResults = await component.searchForItem(searchTerm);
    expect(searchResults?.includes(searchResults)).toBe(true);
});

test.skip('Verify multi selection dropdown by name', async () => {
    await component.goto({additionalComponentParams: {multi: 'true'}});
    const selectionArr = ['Option_1', 'Option_4', 'Option_7'];
    await component.selectMultipleItemsByName(selectionArr);
    const selectedItem = await component.getSelectedItem();
    expect(selectedItem).toBe(`${selectionArr.length} selected`);
});
