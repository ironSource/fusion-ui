import {Page} from '@playwright/test';
import {chipFilterStoryId, defaultTestId, loadedPageSelector} from './consts';
import {ComponentBasePage} from '../base-page/component-base-page';
import {ComponentProps, GotoParams} from '../base-page/types';
import {ChipFilterComponent} from './chipFilter-component';
import {createStoryBookComponentPath, getTestId} from '../../global/utils';
import {IncludeExcludeTestIdModifiers} from '@ironsource/fusion-ui/entities';

export class ChipFilterPage extends ComponentBasePage {
    readonly component: ChipFilterComponent;

    constructor(page: Page) {
        const chipFilterProps: ComponentProps = {
            page: page,
            testId: defaultTestId,
            componentId: chipFilterStoryId,
            loadedPageSelector: loadedPageSelector
        };

        super(chipFilterProps);
        this.component = new ChipFilterComponent(page);
    }

    async waitForComponent() {
        await this.component.waitForComponent({testId: this.testId});
    }

    async goto(gotoParams: GotoParams = {}) {
        const componentParams = {
            testId: this.testId,
            ...gotoParams.additionalComponentParams
        };

        await this.page.goto(createStoryBookComponentPath(gotoParams.storyId || this.componentId, componentParams));

        await this.page.waitForSelector(this.loadedPageSelector);
    }

    getChipFilterLabel() {
        return this.component.getChipFilterLabel({testId: this.testId});
    }
}
