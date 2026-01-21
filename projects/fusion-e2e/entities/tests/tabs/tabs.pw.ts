import {expect, test} from '@playwright/test';
import {TabsPage} from '../../pages/tabs-page';

let tabsPage: TabsPage;

test.beforeEach(async ({page}) => {
    tabsPage = new TabsPage(page);
});

test('Validate component is loaded', async () => {
    await tabsPage.goto();
    await tabsPage.waitForComponent();
});

test.skip('Validate tabs functionality', async () => {
    await tabsPage.goto();
    let selectedTab = await tabsPage.getSelectedTabText();
    expect(selectedTab).toBe('First');
    const tabName = 'Second';
    await tabsPage.selectTab({tabName: tabName});
    selectedTab = await tabsPage.getSelectedTabText();
    expect(selectedTab).toBe(tabName);
});

test('Validate disabled tab', async () => {
    await tabsPage.goto();
    const tabDisabled = tabsPage.isTabDisabled();
    expect(tabDisabled).toBeTruthy();
});
