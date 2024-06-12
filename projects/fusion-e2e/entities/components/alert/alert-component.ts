import {AlertTestIdModifiers} from '@ironsource/fusion-ui/entities/test-ids-modifiers';
import {getTestId, getTestIdSelector} from '../../global/utils';
import {BaseComponent} from '../base-component';
import {ButtonComponent} from '../button/button-component';
import {StaticText} from '../../elements';
import {Page} from '@playwright/test';

export class AlertComponent extends BaseComponent {
    wrapperElement: StaticText;
    messageElement: StaticText;
    titleElement: StaticText;
    actionButtonElement: ButtonComponent;
    closeButtonElement: ButtonComponent;

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

    async getAlertText(): Promise<string> {
        return this.messageElement.textContent();
    }

    async getAlertTitle(): Promise<string> {
        return this.titleElement.textContent();
    }

    async getActionButtonText(): Promise<string> {
        return this.actionButtonElement.textContent();
    }

    async clickOnActionButton(): Promise<void> {
        await this.actionButtonElement.click();
    }

    async closeAlert(): Promise<void> {
        await this.closeButtonElement.click();
    }

    async isAlertVisible(): Promise<boolean> {
        const alertSelector = await this.wrapperElement.count();
        return alertSelector > 0;
    }

    async getAlertIconType(): Promise<string> {
        return this.wrapperElement.getAttribute('class');
    }
}
