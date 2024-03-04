import {Page} from '@playwright/test';

import {getTestId} from '../../../global/utils';
import {BaseDropdownComponent} from '../base-dropdown';
import {DropdownTestIdModifiers, SearchTestIdModifiers} from '@ironsource/fusion-ui/entities';

type SearchItem = {
    testId: string;
    searchTerm: string;
};

export class DropdownComponentV3 extends BaseDropdownComponent {
    constructor(page: Page) {
        super(page);
    }

    getDropdownTitle({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, DropdownTestIdModifiers.WRAPPER)).locator('label > span').textContent();
    }

    getSelectedItem({testId}: {testId: string}) {
        return this.page.getByTestId(getTestId(testId, DropdownTestIdModifiers.TRIGGER_BY_INDEX)).locator('button > span').textContent();
    }

    async searchForItem({testId, searchTerm}: SearchItem) {
        await this.openDropdownComponent({testId});
        await this.page.getByTestId(getTestId(testId, SearchTestIdModifiers.FIELD)).fill(searchTerm);
        return this.page
            .getByTestId(getTestId(testId, DropdownTestIdModifiers.LIST_CONTAINER))
            .locator('ul > li span')
            .first()
            .textContent();
    }
}
