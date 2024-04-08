import {getTestId} from '../../global/utils';
import {SelectionByIndex, SelectionByName, SelectMultiple, SelectMultipleByName} from './types';
import {DropdownTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {BaseComponent} from '../base-component';
import {expect, Page, test} from '@playwright/test';
import {SELECTORS} from './consts';
import {GLOBAL_DEBOUNCE} from '../../constants';
import {StaticText} from '../static-text';
import {BaseInputComponent} from '../inputs/base-input';
import {ButtonComponent} from '../../components/button/button-component';

export class BaseDropdownComponent extends BaseComponent {
    searchInput: BaseInputComponent;
    option: ButtonComponent;
    selectedOptionLabel: StaticText;

    constructor(page: Page, selector: string) {
        super(page, selector);
        this.searchInput = new BaseInputComponent(page, `${selector} ${SELECTORS.SEARCH_INPUT}`);
        this.option = new ButtonComponent(page, `${selector} ${SELECTORS.FUSION_DROPDOWN_OPTIONS}`);
        this.selectedOptionLabel = new StaticText(page, `${selector} ${SELECTORS.SELECTED_OPTION}`);
    }

    async waitForComponent({testId}: {testId: string}) {
        await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.WRAPPER));
    }

    async selectDropdownOptionByIndex({testId, index}: SelectionByIndex) {
        await this.openDropdownComponent({testId: testId});
        const element = await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.LIST_CONTAINER));
        const locator = element.locator('fusion-dropdown-options-list > li').nth(index);
        await locator.click();
    }

    async getDropdownButtonContent(testId: string) {
        const element = await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.BUTTON_CONTENT));
        return element.textContent();
    }

    async openDropdownComponent({testId}: {testId: string}) {
        const element = await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.TRIGGER));
        await element.click({
            position: {
                x: 15,
                y: 15
            }
        });
    }

    async selectDropdownOptionByName({testId, name, shouldOpen = true}: SelectionByName) {
        if (shouldOpen) await this.openDropdownComponent({testId: testId});
        const element = await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.LIST_CONTAINER));
        const locator = element.locator('fusion-dropdown-options-list > li', {hasText: name});
        await locator.click();
    }

    async selectMultipleItemsByIndex({testId, itemsToSelect}: SelectMultiple) {
        await this.openDropdownComponent({testId: testId});
        for (const i of itemsToSelect) {
            const element = await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.LIST_CONTAINER));
            const locator = element.locator('ul > li').nth(i);
            await locator.click();
        }
    }

    async selectMultipleItemsByName({testId, itemsToSelect}: SelectMultipleByName) {
        await this.openDropdownComponent({testId: testId});
        for (const name of itemsToSelect) {
            const element = await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.LIST_CONTAINER));
            const locator = element.locator('ul > li', {hasText: name}).first();
            await locator.click();
        }
    }

    async clickOnApply({testId}: {testId: string}) {
        const element = await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.ACTION_APPLY));
        await element.click();
    }

    async clickOnCancel({testId}: {testId: string}) {
        const element = await this.getByTestId(getTestId(testId, DropdownTestIdModifiers.ACTION_CANCEL));
        await element.click();
    }

    async scrollToTheLastOption(): Promise<void> {
        await test.step('Scroll to the last option', async () => {
            let numOfItemsBeforeScrolling: number;
            let numOfItemsAfterScrolling: number;

            do {
                numOfItemsBeforeScrolling = await this.page.locator(`${this.selector} ${SELECTORS.FUSION_DROPDOWN_OPTIONS}`).count();
                await this.page
                    .locator(`${this.selector} ${SELECTORS.FUSION_DROPDOWN_OPTIONS}`)
                    .nth(numOfItemsBeforeScrolling - 1)
                    .scrollIntoViewIfNeeded();
                await this.page.waitForTimeout(GLOBAL_DEBOUNCE);
                await this.page.waitForLoadState('domcontentloaded');
                numOfItemsAfterScrolling = await this.page.locator(`${this.selector} ${SELECTORS.FUSION_DROPDOWN_OPTIONS}`).count();
            } while (numOfItemsBeforeScrolling < numOfItemsAfterScrolling);
        });
    }

    async searchOption(searchTerm: string): Promise<void> {
        await test.step(`Search option: ${searchTerm}`, async () => {
            await this.searchInput.fill(searchTerm);
            await this.waitForTimeout(GLOBAL_DEBOUNCE);
        });
    }

    async selectOption(optionToSelect: string): Promise<void> {
        await expect(this.page.locator(SELECTORS.FUSION_DROPDOWN_LOADER)).not.toBeVisible();
        await test.step(`Select option: ${optionToSelect}`, async () => {
            if ((await this.selectedOptionLabel.locator.isVisible()) && (await this.selectedOptionLabel.getText()) === optionToSelect) {
                await this.closeDropdownIfOpen();
                return;
            }
            if (!(await this.option.locator.nth(0).isVisible())) {
                await this.click();
            }
            await this.scrollToTheLastOption();
            const optionToClick = this.option.locator.filter({has: this.page.locator(`text="${optionToSelect}"`)});
            await optionToClick.click();
        });
    }

    async getSelectedOption(): Promise<string> {
        let selectedOption: string;

        await test.step(`Get selected option`, async () => {
            selectedOption = await this.selectedOptionLabel.getText();
        });

        return selectedOption;
    }

    async selectOptionBySearchInput(optionToSelect: string): Promise<void> {
        await test.step('Select option by search input', async () => {
            await this.openDropdownIfClosed();
            await this.searchOption(optionToSelect);
            await this.selectOption(optionToSelect);
        });
    }

    async openDropdownIfClosed(): Promise<void> {
        await test.step('Open dropdown if needed', async () => {
            if (!(await this.option.locator.nth(0).isVisible())) {
                await this.click();
            }
        });
    }

    async closeDropdownIfOpen(): Promise<void> {
        await test.step('Close dropdown if needed', async () => {
            if (await this.option.locator.nth(0).isVisible()) {
                await this.click();
            }
        });
    }

    async isDropdownOptionsExists({expectedOptions, isByOrder}: {expectedOptions: string[]; isByOrder: boolean}): Promise<boolean> {
        const actualOptions = [];
        let isExists = true;

        await this.openDropdownIfClosed();
        await this.scrollToTheLastOption();
        for (let i = 0; i < (await this.option.locator.count()); i++) {
            const option = await this.option.locator.nth(i).textContent();
            actualOptions.push(option.trim());
        }

        if (isByOrder) {
            for (let i = 0; i < expectedOptions.length; i++) {
                if (!actualOptions.includes(expectedOptions[i])) {
                    console.log(`The option ${expectedOptions[i]} is not found in the dropdown items`);
                    isExists = false;
                    break;
                }
            }
        } else {
            for (let i = 0; i < expectedOptions.length; i++) {
                if (actualOptions[i] !== expectedOptions[i]) {
                    console.log(`Expected: ${expectedOptions[i]}, actual: ${actualOptions[i]}`);
                    isExists = false;
                    break;
                }
            }
        }

        if (!isExists) {
            console.log(`Expected options: ${expectedOptions}`);
            console.log(`Actual options: ${actualOptions}`);
        }
        await this.closeDropdownIfOpen();
        return isExists;
    }

    async getAllPossibleOptions(): Promise<string[]> {
        const options = [];
        await this.openDropdownIfClosed();
        await this.scrollToTheLastOption();

        for (let i = 0; i < (await this.option.locator.count()); i++) {
            const option = await this.option.locator.nth(i).textContent();
            options.push(option.trim());
        }

        return options;
    }
}
