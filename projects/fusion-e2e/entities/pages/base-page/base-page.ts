import {type Page} from '@playwright/test';
import {ComponentProps, GotoParams} from './types';
import {createStoryBookComponentPath, getTestIdSelector} from '../../global/utils';

export class BasePage {
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
        const loadedPageSelector = getTestIdSelector(this.testId);
        await this.page.waitForSelector(loadedPageSelector);
    }
}
