import {Page, test} from '@playwright/test';
import {BaseComponent} from '../../fusion-components/base-component';
import {Button, StaticText} from '../../elements';
import {SELECTORS} from './constants';

export class FloatingToolbar extends BaseComponent {
    counter: StaticText;
    title: StaticText;
    actionButton: Button;
    closeButton: Button;

    constructor(page: Page, selector: string) {
        super(page, selector);
        this.counter = new StaticText(page, SELECTORS.TOOLBAR_COUNTER);
        this.title = new StaticText(page, SELECTORS.TOOLBAR_TEXT);
        this.actionButton = new Button(page, SELECTORS.TOOLBAR_ACTION_BUTTON);
        this.closeButton = new Button(page, SELECTORS.TOOLBAR_CLOSE_BUTTON);
    }

    async closeToolbar() {
        test.step('Close toolbar if open', async () => {
            if (await this.title.locator.isVisible()) {
                await this.click();
            }
        });
    }

    async clickOnActionButton() {
        test.step('Click on button in floating toolbar', async () => {
            await this.actionButton.locator.click();
        });
    }

    async getCounterValue() {
        test.step('Get counter value', async () => {
            return await this.counter.getText();
        });
    }
}
