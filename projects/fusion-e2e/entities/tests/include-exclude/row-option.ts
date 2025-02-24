import test, {Page} from '@playwright/test';
import {StaticText, CheckBox} from '../../elements';
import {SELECTORS} from './constants';
import {BaseComponent} from '../base-component';

export class RowOption extends BaseComponent {
    readonly checkBox: CheckBox;
    readonly optionTitle: StaticText;

    constructor(page: Page, selector: string) {
        super(page, selector);
        this.checkBox = new CheckBox(page, `${selector} ${SELECTORS.FUSION_CHECKBOX}`);
        this.optionTitle = new StaticText(page, `${selector} ${SELECTORS.FUSION_TEXT_CONTENT}`);
    }

    async check(): Promise<void> {
        await test.step('Check option', async () => {
            await this.checkBox.check();
        });
    }

    async uncheck(): Promise<void> {
        await test.step('Check option', async () => {
            await this.checkBox.uncheck();
        });
    }

    async isChecked(): Promise<boolean> {
        let isChecked: boolean;

        await test.step('Is option checked', async () => {
            isChecked = await this.checkBox.isChecked();
        });
        return isChecked;
    }

    async getLabel(): Promise<string> {
        let label: string;

        await test.step('Get label', async () => {
            label = await this.optionTitle.getText();
        });

        return label;
    }

    async isExist(): Promise<boolean> {
        let isExist: boolean;

        await test.step('Check option', async () => {
            isExist = await this.checkBox.isVisible();
        });

        return isExist;
    }
}
