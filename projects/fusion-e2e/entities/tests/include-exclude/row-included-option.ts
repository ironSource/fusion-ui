import {Page, expect, test} from '@playwright/test';
import {Button, StaticText} from '../../elements';
import {SELECTORS} from './constants';
import {BaseComponent} from '../base-component';

export class RowIncludedOption extends BaseComponent {
    readonly testId: string;
    readonly optionLabel: StaticText;
    readonly clearOptionButton: Button;

    constructor(page: Page, testId: string) {
        super(page, testId);
        this.optionLabel = new StaticText(page, `${testId} ${SELECTORS.OPTION_TITLE}`);
        this.clearOptionButton = new Button(page, `${testId} ${SELECTORS.ICON_CLEAR}`);
    }

    async getOptionLabel(): Promise<string> {
        let optionLabel: string;

        await test.step(`Get option label`, async () => {
            optionLabel = await this.optionLabel.getText();
        });

        return optionLabel;
    }

    async removeIncludedOption(): Promise<void> {
        await test.step(`Remove included option`, async () => {
            await this.clearOptionButton.click();
            await expect(this.optionLabel.locator).not.toBeVisible();
        });
    }

    async isIncluded(): Promise<boolean> {
        let isIncluded: boolean;

        await test.step(`Is included`, async () => {
            isIncluded = await this.optionLabel.isVisible();
        });

        return isIncluded;
    }
}
