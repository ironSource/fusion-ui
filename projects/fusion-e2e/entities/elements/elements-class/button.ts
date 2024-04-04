import {Page, test} from '@playwright/test';
import {Clickable, BaseElement} from '../../behavior';
import {StaticText} from '../index';

export class Button extends BaseElement {
    protected button: Clickable;
    protected label: StaticText;

    constructor(page: Page, selector: string) {
        super(page, selector);
        this.button = new Clickable(page, selector);
        this.label = new StaticText(page, selector);
    }

    async isIconExist(selector: string): Promise<boolean> {
        let numOfIcons: number = 0;

        await test.step(`Is icon exist: ${selector}`, async () => {
            const isButtonWithIcon = await this.getLocator(selector);
            numOfIcons = await isButtonWithIcon.count();
        });

        return numOfIcons > 0;
    }

    async getButtonLabel(): Promise<string> {
        let labelSelector: string = '';

        await test.step(`Get button label`, async () => {
            labelSelector = await this.label.getText();
            if (labelSelector === null) {
                throw new Error(`Couldn't get text for the button: ${this.selector}`);
            }
        });

        return labelSelector;
    }
}
