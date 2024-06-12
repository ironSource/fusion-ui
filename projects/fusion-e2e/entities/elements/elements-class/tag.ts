import {Page} from '@playwright/test';
import {BaseElement} from '../../behavior';
import {StaticText} from '../index';
import {Button} from '../index';
import {SELECTORS} from '../constants';

export class Tag extends BaseElement {
    readonly label: StaticText;
    readonly removeButton: Button;

    constructor(page: Page, selector: string) {
        super(page, selector);
        this.label = new StaticText(page, SELECTORS.TAG.LABEL);
        this.removeButton = new Button(page, SELECTORS.TAG.REMOVE_BUTTON);
    }

    async getText(): Promise<string> {
        return await this.label.getText();
    }

    async remove(): Promise<void> {
        await this.removeButton.click();
    }
}
