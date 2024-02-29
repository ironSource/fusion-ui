import {ComponentParams} from './types';

export const addPropsToUrl = (props: ComponentParams, url: string): string => {
    const additionalParams = new URLSearchParams(props).toString();
    return url.includes('?') ? `${url}${additionalParams}` : `${url}?${additionalParams}`;
};

export const createStoryBookComponentPath = (componentId: string, componentParams: ComponentParams = {}) => {
    const args = Object.entries(componentParams)
        .map(([key, value]: [string, string]) => `${key}:${value}`)
        .join(';');

    const props = {
        id: componentId,
        viewMode: 'story',
        args
    };

    const url = 'iframe.html';
    return addPropsToUrl(props, url);
};

export const getTestId = (testId: string, testIdModifier: string) => `${testId}--${testIdModifier}`;
