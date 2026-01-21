import {AlertPage} from '../../pages/alert-page';
import {expect, test} from '@playwright/test';
import {alertSeveritiesStoryId} from './const';

let component: AlertPage;

test.beforeEach(async ({page}) => {
    component = new AlertPage(page);
});

test('Validate component is loaded', async () => {
    await component.goto();
    await component.waitForComponent();
});

test('Validate alert title', async () => {
    const alertTitle = 'Alert title';
    await component.goto({additionalComponentParams: {title: alertTitle}});
    const actualText = await component.getAlertTitle();
    expect(actualText).toContain(alertTitle);
});

test('Validate alert text', async () => {
    await component.goto({
        additionalComponentParams: {description: 'Alert Description'}
    });
    const actualText = await component.getAlertText();
    expect(actualText).toContain('Alert Description');
});

test('Validate action button text', async () => {
    const actionButtonText = 'Action Button';
    await component.goto({
        additionalComponentParams: {actionText: actionButtonText}
    });
    const actualText = await component.getActionButtonText();
    expect(actualText).toContain(actionButtonText);
});

test.skip('Validate alert type', async () => {
    const successAlertType = 'success';
    await component.goto({
        storyId: alertSeveritiesStoryId,
        additionalComponentParams: {variant: successAlertType}
    });
    let iconType = await component.getAlertIconType();
    expect(iconType).toContain(successAlertType);
    const errorAlertType = 'danger';
    await component.goto({
        additionalComponentParams: {variant: errorAlertType}
    });
    iconType = await component.getAlertIconType();
    expect(iconType).toContain(errorAlertType);
});
