import {AlertTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {getTestId, getTestIdSelector} from '../../global/utils';
import {BaseComponent} from '../base-component';
import {BaseElement} from '../../behavior';
import {ButtonComponent} from '../button/button-component';

export class AlertComponent extends BaseComponent {
    private wrapperElement: BaseElement;
    private messageElement: BaseElement;
    private titleElement: BaseElement;
    private actionButtonElement: ButtonComponent;
    private closeButtonElement: ButtonComponent;

    constructor(page, selector: string) {
        super(page, selector);
        this.wrapperElement = new BaseElement(page, getTestIdSelector(getTestId(this.selector, AlertTestIdModifiers.WRAPPER)));
        this.messageElement = new BaseElement(page, getTestIdSelector(getTestId(this.selector, AlertTestIdModifiers.MESSAGE)));
        this.titleElement = new BaseElement(page, getTestIdSelector(getTestId(this.selector, AlertTestIdModifiers.TITLE)));
        this.actionButtonElement = new ButtonComponent(
            page,
            getTestIdSelector(getTestId(this.selector, AlertTestIdModifiers.ACTION_BUTTON))
        );
        this.closeButtonElement = new ButtonComponent(page, getTestIdSelector(getTestId(this.selector, AlertTestIdModifiers.CLOSE_BUTTON)));
    }

    async waitForComponent({testId}: {testId: string}) {
        const loadedPageSelector = getTestIdSelector(getTestId(testId, AlertTestIdModifiers.WRAPPER));
        await this.waitForSelector(loadedPageSelector);
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
