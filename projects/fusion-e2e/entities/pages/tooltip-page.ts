import {Page} from '@playwright/test';
import {tooltipStoryId, defaultTestId, loadedPageSelector} from '../components/tooltip/consts';
import {BasePage} from './base-page/base-page';
import {ComponentProps, GotoParams} from './base-page/types';
import {TooltipComponent} from '../components/tooltip/tooltip-component';
import {createStoryBookComponentPath, getTestId} from '../global/utils';
import {TooltipTestIdModifiers} from '@ironsource/fusion-ui/entities';

export class TooltipPage extends BasePage {
    readonly tooltip: TooltipComponent;

    constructor(page: Page) {
        const tooltipProps: ComponentProps = {
            page: page,
            testId: defaultTestId,
            componentId: tooltipStoryId,
            loadedPageSelector: loadedPageSelector
        };

        super(tooltipProps);
        this.tooltip = new TooltipComponent(page, this.testId);
    }

    async waitForComponent() {
        await this.tooltip.waitForComponent({testId: this.testId, modifiers: TooltipTestIdModifiers.TRIGGER});
    }

    async goto(gotoParams: GotoParams = {}) {
        const componentParams = {
            testId: this.testId,
            ...gotoParams.additionalComponentParams
        };

        await this.page.goto(createStoryBookComponentPath(gotoParams.storyId || this.componentId, componentParams));

        await this.openTooltip();
        await this.page.waitForSelector(this.loadedPageSelector);
    }

    getTooltipText() {
        return this.tooltip.getTooltipText({testId: this.testId});
    }

    getTooltipHeaderText() {
        return this.tooltip.getTooltipHeaderText({testId: this.testId});
    }

    private async openTooltip() {
        const tooltipTriggerSelector = this.page.getByTestId(getTestId(this.testId, TooltipTestIdModifiers.TRIGGER));
        await tooltipTriggerSelector.hover();
    }
}
