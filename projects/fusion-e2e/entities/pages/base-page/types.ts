import {Page} from '@playwright/test';

export type ComponentProps = {
    page: Page;
    testId: string;
    componentId: string;
    loadedPageSelector: string;
};

export type GotoParams = {
    storyId?: string;
    additionalComponentParams?: object;
};
