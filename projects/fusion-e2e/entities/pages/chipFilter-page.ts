import {Page} from '@playwright/test';
import {chipFilterStoryId, defaultTestId, loadedPageSelector} from '../components/chip-filter/consts';
import {BasePage} from './base-page/base-page';
import {ComponentProps, GotoParams} from './base-page/types';
import {ChipFilterComponent} from '../components/chip-filter/chipFilter-component';
import {createStoryBookComponentPath} from '../global/utils';

export class ChipFilterPage extends BasePage {
    readonly chipFilter: ChipFilterComponent;

    constructor(page: Page) {
        const chipFilterProps: ComponentProps = {
            page: page,
            testId: defaultTestId,
            componentId: chipFilterStoryId,
            loadedPageSelector: loadedPageSelector
        };

        super(chipFilterProps);
        this.chipFilter = new ChipFilterComponent(page, this.testId);
    }

    async waitForComponent() {
        await this.chipFilter.waitForComponent({testId: this.testId});
    }

    async goto(gotoParams: GotoParams = {}) {
        const componentParams = {
            testId: this.testId,
            ...gotoParams.additionalComponentParams
        };

        await this.page.goto(createStoryBookComponentPath(gotoParams.storyId || this.componentId, componentParams));

        await this.page.waitForSelector(this.loadedPageSelector);
    }

    clickChipFilter() {
        return this.chipFilter.clickChipFilter();
    }

    getChipFilterLabel() {
        return this.chipFilter.getChipFilterLabel();
    }
}
