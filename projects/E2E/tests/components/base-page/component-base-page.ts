import {type Page} from '@playwright/test';
import {ComponentProps, GotoParams} from './types';
import {createStoryBookComponentPath} from '../../global/utils';

export class ComponentBasePage {
    readonly page: Page;
    readonly testId: string;
    readonly componentId: string;
    readonly loadedPageSelector: string;

    constructor(componentProps: ComponentProps) {
        this.page = componentProps.page;
        this.testId = componentProps.testId;
        this.componentId = componentProps.componentId;
        this.loadedPageSelector = componentProps.loadedPageSelector;
    }

    async goto(gotoParams: GotoParams = {}) {
        const componentParams = {
            testId: this.testId,
            ...gotoParams.additionalComponentParams
        };

        await this.page.goto(createStoryBookComponentPath(gotoParams.storyId || this.componentId, componentParams));
        // await this.page.waitForTimeout(2000)
        //console.log('this.loadedPageSelector', this.loadedPageSelector);
        // const x = await this.page.locator("[data-testid='buttonTestId--button']").textContent();
        // console.log('x: ', x);
        await this.page.waitForSelector('.fusion-v4');
    }
}
