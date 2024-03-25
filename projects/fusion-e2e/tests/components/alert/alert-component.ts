import {AlertTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {getTestId, getTestIdSelector} from '../../global/utils';
import {BaseComponent} from '../base-component';

export class AlertComponent extends BaseComponent {
    constructor(page, selector: string) {
        super(page, selector);
    }

    async waitForComponent({testId}: {testId: string}) {
        const loadedPageSelector = getTestIdSelector(getTestId(testId, AlertTestIdModifiers.WRAPPER));
        await this.waitForSelector(loadedPageSelector);
    }

    async getAlertText({testId}: {testId: string}) {
        const element = await this.getByTestId(getTestId(testId, AlertTestIdModifiers.MESSAGE));
        return element.textContent();
    }

    async getAlertTitle({testId}: {testId: string}) {
        const element = await this.getByTestId(getTestId(testId, AlertTestIdModifiers.TITLE));
        return element.textContent();
    }

    async getActionButtonText({testId}: {testId: string}) {
        const button = await this.getByTestId(getTestId(testId, AlertTestIdModifiers.ACTION_BUTTON));
        return button.textContent();
    }

    async clickOnActionButton({testId}: {testId: string}) {
        const button = await this.getByTestId(getTestId(testId, AlertTestIdModifiers.ACTION_BUTTON));
        await button.click();
    }

    async closeAlert({testId}: {testId: string}) {
        const element = await this.getByTestId(getTestId(testId, AlertTestIdModifiers.CLOSE_BUTTON));
        await element.click();
    }

    async isAlertVisible({testId}: {testId: string}) {
        const element = await this.getByTestId(getTestId(testId, AlertTestIdModifiers.WRAPPER));
        const alertSelector = await element.count();
        return alertSelector > 0;
    }

    async getAlertIconType({testId}: {testId: string}) {
        const element = await this.getByTestId(getTestId(testId, AlertTestIdModifiers.WRAPPER));
        return element.getAttribute('class');
    }
}
