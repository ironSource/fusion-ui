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
        console.log('testid in goto', this.testId);
        const loadedPageSelector = `[data-testid='${this.testId}']`;
        await this.page.waitForSelector(loadedPageSelector);
    }
}
