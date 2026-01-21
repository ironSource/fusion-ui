import {Page, expect, test} from '@playwright/test';
import {Button, StaticText, Input} from '../../elements';
import {RowOption} from './row-option';
import {RowIncludedOption} from './row-included-option';
import {SELECTORS} from './constants';
import {SELECTORS as elementsSelectors} from '../constants';
import {GLOBAL_DEBOUNCE} from '../../constants';
import {BaseComponent} from '../base-component';

export class IncludeExclude extends BaseComponent {
    readonly clearAllButton: Button;
    readonly searchInput: Input;
    readonly rowOption: RowOption;
    readonly rowIncludedOption: RowIncludedOption;
    readonly selectAllOptions: RowOption;
    readonly typeTitle: StaticText;
    readonly applyButton: Button;
    readonly cancelButton: Button;
    readonly numOfIncludedLabel: StaticText;

    constructor(page: Page, selector: string) {
        super(page, selector);
        this.searchInput = new Input(page, `${this.selector} ${SELECTORS.SEARCH_INPUT}`);
        this.clearAllButton = new Button(page, `${this.selector} ${SELECTORS.CLEAR_ALL_BUTTON}`);
        this.rowOption = new RowOption(page, `${this.selector} ${SELECTORS.OPTION}`);
        this.rowIncludedOption = new RowIncludedOption(page, `${this.selector} ${SELECTORS.SELECTED_OPTION}`);
        this.selectAllOptions = new RowOption(page, `${this.selector} ${SELECTORS.SELECT_ALL}`);
        this.typeTitle = new StaticText(page, `${this.selector} ${SELECTORS.TYPE_TITLE}`);
        this.numOfIncludedLabel = new StaticText(page, `${this.selector} ${SELECTORS.SELECTED_AMOUNT}`);
        this.applyButton = new Button(page, `${this.selector} ${SELECTORS.APPLY_BUTTON}`);
        this.cancelButton = new Button(page, `${this.selector} ${SELECTORS.CANCEL_BUTTON}`);
    }

    async searchOption(option: string) {
        await test.step(`Search option ${option}`, async () => {
            await this.searchInput.fill(option);
        });
    }

    async getTypeTitle(): Promise<string> {
        let typeTitle: string;

        await test.step(`Get type title`, async () => {
            typeTitle = await this.typeTitle.getText();
        });

        return typeTitle;
    }

    async clearAll(): Promise<void> {
        await test.step(`Clear all options`, async () => {
            await this.clearAllButton.click();
        });
    }

    async selectAll(): Promise<void> {
        await test.step(`Select all options`, async () => {
            await this.selectAllOptions.check();
        });
    }

    async selectOptions(optionsToSelect: string[]): Promise<void> {
        await test.step(`Select options`, async () => {
            for (let i = 0; i < optionsToSelect.length; i++) {
                await this.selectOption(optionsToSelect[i]);
            }
        });
    }

    async selectOptionsAndApply(optionsToSelect: string[]): Promise<void> {
        await test.step(`Select options and apply`, async () => {
            await this.selectOptions(optionsToSelect);
            await this.applyButton.click();
        });
    }

    private async selectOption(optionToSelect: string): Promise<void> {
        await test.step(`Select option: ${optionToSelect}`, async () => {
            await this.searchOption(optionToSelect);
            await this.waitForTimeout(GLOBAL_DEBOUNCE);
            await expect(await this.rowOption.optionTitle.locator.nth(0)).toBeVisible();
            await this.rowOption.locator
                .filter({has: this.page.locator(`text="${optionToSelect}"`)})
                .nth(0)
                .locator(elementsSelectors.STATIC_TEXT.LABEL)
                .nth(0)
                .check();
        });
    }

    async getOptionLabel(): Promise<string> {
        return this.rowIncludedOption.getOptionLabel();
    }

    async removeIncludedOption(optionToRemove: string): Promise<void> {
        await test.step(`Remove included option: ${optionToRemove}`, async () => {
            await this.searchOption(optionToRemove);
            await this.waitForTimeout(GLOBAL_DEBOUNCE);
            await this.rowIncludedOption.removeIncludedOption();
        });
    }

    async removeIncludedOptionAndApply(optionToRemove: string): Promise<void> {
        await test.step(`Remove included option and apply: ${optionToRemove}`, async () => {
            await this.removeIncludedOption(optionToRemove);
            await this.clickApplyButton();
        });
    }

    async isOptionIncluded({expectedOption, isExactMatch = true}: {expectedOption: string; isExactMatch?: boolean}): Promise<boolean> {
        let isIncluded = false;

        await test.step(`Is option included: ${expectedOption}`, async () => {
            await this.searchInput.fill(expectedOption);
            const checkedOptionsLength = await this.rowIncludedOption.optionLabel.locator.count();

            if (isExactMatch) {
                for (let i = 0; i < checkedOptionsLength; i++) {
                    const actualOption = await this.rowIncludedOption.optionLabel.locator.nth(i).textContent();
                    if (actualOption?.trim() === expectedOption) {
                        isIncluded = true;
                        break;
                    }
                }
            } else {
                for (let i = 0; i < checkedOptionsLength; i++) {
                    const actualOption = await this.rowIncludedOption.optionLabel.locator.nth(i).textContent();
                    if (actualOption?.trim().includes(expectedOption)) {
                        isIncluded = true;
                        break;
                    }
                }
            }
        });

        return isIncluded;
    }

    async getNumOfIncludedItemsLabel(): Promise<string> {
        let numOfIncludedItemsLabel: string;

        await test.step(`Get num of included items label`, async () => {
            numOfIncludedItemsLabel = await this.numOfIncludedLabel.getText();
        });

        return numOfIncludedItemsLabel;
    }

    async clickCancelButton(): Promise<void> {
        await test.step(`Click on cancel button`, async () => {
            await this.cancelButton.click();
        });
    }

    async clickApplyButton(): Promise<void> {
        await test.step(`Click on apply button`, async () => {
            await this.applyButton.click();
        });
    }
}
