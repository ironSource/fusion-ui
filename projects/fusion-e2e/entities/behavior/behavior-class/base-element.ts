import {Locator, Page, test} from '@playwright/test';
import {getTestId, getTestIdSelector} from '../../global/utils';

export class BaseElement {
    readonly page: Page;
    readonly selector: string;
    locator: Locator;

    constructor(page: Page, selector: string) {
        this.page = page;
        this.selector = selector;
        this.locator = this.page.locator(selector);
    }

    async click(): Promise<void> {
        await test.step(`Click on:  ${this.selector}`, async () => {
            await this.page.click(this.selector);
        });
    }

    async count(): Promise<number> {
        let count: number;

        await test.step(`Count: ${this.selector}`, async () => {
            count = await this.page.locator(this.selector).count();
        });

        return count;
    }

    async hover(): Promise<void> {
        await test.step(`Hover on: ${this.selector}`, async () => {
            await this.page.hover(this.selector);
        });
    }

    async isVisible(): Promise<boolean> {
        let isVisible: boolean;

        await test.step(`Is visible: ${this.selector}`, async () => {
            isVisible = await this.page.isVisible(this.selector);
        });

        return isVisible;
    }

    async isHidden(): Promise<boolean> {
        let isHidden: boolean;

        await test.step(`Is hidden: ${this.selector}`, async () => {
            isHidden = await this.page.isHidden(this.selector);
        });

        return isHidden;
    }

    async isDisabled(): Promise<boolean> {
        let isDisabled: boolean;

        await test.step(`Is disabled: ${this.selector}`, async () => {
            isDisabled = await this.page.isDisabled(this.selector);
        });

        return isDisabled;
    }

    async isEnabled(): Promise<boolean> {
        let isEnabled: boolean;

        await test.step(`Is enabled: ${this.selector}`, async () => {
            isEnabled = await this.page.isEnabled(this.selector);
        });

        return isEnabled;
    }

    async isAttached(): Promise<any> {
        let isAttached: any;

        await test.step(`Is attached: ${this.selector}`, async () => {
            isAttached = await this.page.waitForSelector(this.selector, {state: `attached`});
        });

        return isAttached;
    }

    async getSelector(): Promise<string> {
        let selector: string;

        await test.step(`Get selector`, async () => {
            selector = this.selector;
        });

        return selector;
    }

    async getLocator(selector: string): Promise<Locator> {
        let locator: Locator;

        await test.step(`Get locator of: ${this.selector}`, async () => {
            locator = this.page.locator(selector);
        });

        return locator;
    }

    async getAttribute(attributeName: string): Promise<string | null> {
        let attribute: string | null;

        await test.step(`Get attribute of: ${attributeName}`, async () => {
            attribute = await this.page.getAttribute(this.selector, attributeName);
        });
        return attribute;
    }

    async keyPress(key: string, count: number = 1): Promise<void> {
        await test.step(`Press key: ${key}, ${count} times`, async () => {
            for (let i = 0; i < count; i++) {
                await this.page.keyboard.press(key);
            }
        });
    }

    async waitForElementToBeAttached(): Promise<void> {
        await test.step(`Wait for element to be attached: ${this.selector}`, async () => {
            await this.locator.waitFor({state: `attached`});
        });
    }

    async waitForTimeout(timeout: number): Promise<void> {
        await test.step(`Wait for timeout`, async () => {
            await this.page.waitForTimeout(timeout);
        });
    }

    async waitForURL(url: string): Promise<void> {
        await test.step(`Wait for URL: ${url}`, async () => {
            await this.page.waitForURL(url);
        });
    }

    async waitForLoadState(state: `load` | `domcontentloaded` | `networkidle` = `load`) {
        await test.step(`Wait for load state: ${state}`, async () => {
            await this.page.waitForLoadState(state);
        });
    }

    async waitForSelector(selectorName: string): Promise<void> {
        await test.step(`Wait for selector: ${selectorName}`, async () => {
            await this.page.waitForSelector(selectorName);
        });
    }

    async waitForComponent({testId, modifiers}: {testId: string; modifiers?: string}) {
        let loadedPageSelector: string;
        if (!modifiers) {
            loadedPageSelector = getTestIdSelector(testId);
        } else {
            loadedPageSelector = getTestIdSelector(getTestId(testId, modifiers));
        }
        await this.waitForSelector(loadedPageSelector);
    }

    async selectorText(locator: Locator): Promise<string> {
        let text: string;

        await test.step(`Get text of: ${this.selector}`, async () => {
            text = await locator.textContent();
        });

        return text;
    }

    async textContent(): Promise<string> {
        let text: string;

        await test.step(`Get text content of: ${this.selector}`, async () => {
            text = await this.locator.textContent();
        });

        return text;
    }

    async reload(): Promise<void> {
        await test.step(`Reload page`, async () => {
            await this.page.reload();
        });
    }

    async getByTestId(testId: string): Promise<Locator> {
        return test.step(`Get element by test id: ${testId}`, async () => {
            return this.page.getByTestId(testId);
        });
    }

    async waitForEvent(event: any): Promise<any> {
        let eventResponse: any;
        await test.step(`Wait for event ${event}`, async () => {
            eventResponse = this.page.waitForEvent(event);
        });

        return eventResponse;
    }
}
