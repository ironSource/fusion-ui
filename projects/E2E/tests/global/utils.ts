import {ComponentParams} from './types';

export const addPropsToUrl = (props: ComponentParams, url: string): string => {
    const additionalParams = new URLSearchParams(props).toString();
    return url.includes('?') ? `${url}${additionalParams}` : `${url}?${additionalParams}`;
};

export const createStoryBookComponentPath = (componentId: string, componentParams: ComponentParams = {}) => {
    const additionalParamsValues: string[] = [];
    Object.entries(componentParams).forEach(([key, value]: [string, string]) => {
        (additionalParamsValues as string[]).push(`${key}:${value}`);
    });
    const props = {
        id: componentId,
        viewMode: 'story',
        args: additionalParamsValues.join(';')
    };
    const url = 'iframe.html';
    return addPropsToUrl(props, url);
};

export const getTestId = (testId: string, testIdModifier: string) => `${testId}-${testIdModifier}`;
