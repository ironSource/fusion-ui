import {Page} from '@playwright/test';
import {ComponentBasePage} from '../base-page/component-base-page';
import {ComponentProps, GotoParams} from '../base-page/types';
import {TooltipComponent} from './tooltip-component';
import {TestIdsService, TooltipConsts, TooltipTestIdModifiers} from '@ironsource/fusion-ui/services/test-ids';

export class TooltipPage extends ComponentBasePage {
    readonly component: TooltipComponent;

    constructor(page: Page) {
        const tooltipProps: ComponentProps = {
            page: page,
            testId: TooltipConsts.defaultTestId,
            componentId: TooltipConsts.tooltipStoryId,
            loadedPageSelector: TooltipConsts.loadedPageSelector
        };

        super(tooltipProps);
        this.component = new TooltipComponent(page);
    }

    async waitForComponent() {
        await this.component.waitForComponent({testId: this.testId});
    }

    async goto(gotoParams: GotoParams = {}) {
        const componentParams = {
            testId: this.testId,
            ...gotoParams.additionalComponentParams
        };

        await this.page.goto(TestIdsService.createStoryBookComponentPath(gotoParams.storyId || this.componentId, componentParams));

        await this.openTooltip();
        await this.page.waitForSelector(this.loadedPageSelector);
    }

    getTooltipText() {
        return this.component.getTooltipText({testId: this.testId});
    }

    getTooltipHeaderText() {
        return this.component.getTooltipHeaderText({testId: this.testId});
    }

    private async openTooltip() {
        const tooltipTriggerSelector = this.page.getByTestId(TestIdsService.getTestId(this.testId, TooltipTestIdModifiers.TRIGGER));
        await tooltipTriggerSelector.hover();
    }
}
