import {Page} from '@playwright/test';
import {Checkable} from '../../behavior';
import {StaticText} from '../index';
import {SELECTORS} from '../constants';

export class CheckBox extends Checkable {
    protected input: Checkable;
    protected label: StaticText;

    constructor(page: Page, selector: string) {
        super(page, selector);
        this.input = new Checkable(page, `${this.selector}, ${SELECTORS.CHECKBOX.INPUT}`);
        this.label = new StaticText(page, `${this.selector} ${SELECTORS.CHECKBOX.LABEL}`);
    }

    async getText(): Promise<string> {
        return await this.label.getText();
    }

    async check(): Promise<void> {
        await this.input.check();
    }

    async uncheck(): Promise<void> {
        await this.input.uncheck();
    }

    async isChecked(): Promise<boolean> {
        return await this.input.isChecked();
    }
}
