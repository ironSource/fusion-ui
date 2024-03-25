import {AlertTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {getTestId, getTestIdSelector} from '../../global/utils';
import {BaseComponent} from '../base-component';

export class AlertComponent extends BaseComponent {
    private wrapperComponent: BaseComponent;
    private messageComponent: BaseComponent;
    private titleComponent: BaseComponent;
    private actionButtonComponent: BaseComponent;
    private closeButtonComponent: BaseComponent;

    constructor(page, selector: string) {
        super(page, selector);
        this.wrapperComponent = new BaseComponent(page, getTestIdSelector(getTestId(this.selector, AlertTestIdModifiers.WRAPPER)));
        this.messageComponent = new BaseComponent(page, getTestIdSelector(getTestId(this.selector, AlertTestIdModifiers.MESSAGE)));
        this.titleComponent = new BaseComponent(page, getTestIdSelector(getTestId(this.selector, AlertTestIdModifiers.TITLE)));
        this.actionButtonComponent = new BaseComponent(
            page,
            getTestIdSelector(getTestId(this.selector, AlertTestIdModifiers.ACTION_BUTTON))
        );
        this.closeButtonComponent = new BaseComponent(page, getTestIdSelector(getTestId(this.selector, AlertTestIdModifiers.CLOSE_BUTTON)));
    }

    async waitForComponent({testId}: {testId: string}) {
        const loadedPageSelector = getTestIdSelector(getTestId(testId, AlertTestIdModifiers.WRAPPER));
        await this.waitForSelector(loadedPageSelector);
    }

    async getAlertText() {
        return this.messageComponent.textContent();
    }

    async getAlertTitle() {
        return this.titleComponent.textContent();
    }

    async getActionButtonText() {
        return this.actionButtonComponent.textContent();
    }

    async clickOnActionButton() {
        await this.actionButtonComponent.click();
    }

    async closeAlert() {
        await this.closeButtonComponent.click();
    }

    async isAlertVisible() {
        const alertSelector = await this.wrapperComponent.count();
        return alertSelector > 0;
    }

    async getAlertIconType() {
        return this.wrapperComponent.getAttribute('class');
    }
}
