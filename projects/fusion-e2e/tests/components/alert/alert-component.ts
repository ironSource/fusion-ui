import {AlertTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {getTestId, getTestIdSelector} from '../../global/utils';
import {BaseComponent} from '../base-component';
import {ButtonComponent} from '../button/button-component';
import {StaticText} from '../../elements';
import {Page} from '@playwright/test';

export class AlertComponent extends BaseComponent {
    private wrapperElement: StaticText;
    private messageElement: StaticText;
    private titleElement: StaticText;
    private actionButtonElement: ButtonComponent;
    private closeButtonElement: ButtonComponent;

    constructor(page: Page, selector: string) {
        super(page, selector);
        this.wrapperElement = new StaticText(page, getTestIdSelector(getTestId(this.selector, AlertTestIdModifiers.WRAPPER)));
        this.messageElement = new StaticText(page, getTestIdSelector(getTestId(this.selector, AlertTestIdModifiers.MESSAGE)));
        this.titleElement = new StaticText(page, getTestIdSelector(getTestId(this.selector, AlertTestIdModifiers.TITLE)));
        this.actionButtonElement = new ButtonComponent(
            page,
            getTestIdSelector(getTestId(this.selector, AlertTestIdModifiers.ACTION_BUTTON))
        );
        this.closeButtonElement = new ButtonComponent(page, getTestIdSelector(getTestId(this.selector, AlertTestIdModifiers.CLOSE_BUTTON)));
    }

    async getAlertText() {
        return this.messageElement.textContent();
    }

    async getAlertTitle() {
        return this.titleElement.textContent();
    }

    async getActionButtonText() {
        return this.actionButtonElement.textContent();
    }

    async clickOnActionButton() {
        await this.actionButtonElement.click();
    }

    async closeAlert() {
        await this.closeButtonElement.click();
    }

    async isAlertVisible() {
        const alertSelector = await this.wrapperElement.count();
        return alertSelector > 0;
    }

    async getAlertIconType() {
        return this.wrapperElement.getAttribute('class');
    }
}
