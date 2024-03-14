import {Injectable} from '@angular/core';

type ComponentParams = {
    [key: string]: string;
};

@Injectable({
    providedIn: 'root'
})
export class TestIdsService {
    public getTestAttribute(testId: string, testModifier: string): string {
        if (!!testId && testId !== 'undefined') {
            return `${testId}--${testModifier}`;
        }
        return undefined;
    }

    static addPropsToUrl = (props: ComponentParams, url: string): string => {
        const additionalParams = new URLSearchParams(props).toString();
        return url.includes('?') ? `${url}${additionalParams}` : `${url}?${additionalParams}`;
    };

    static createStoryBookComponentPath = (componentId: string, componentParams: ComponentParams = {}) => {
        const args = Object.entries(componentParams)
            .map(([key, value]: [string, string]) => `${key}:${value}`)
            .join(';');

        const props = {
            id: componentId,
            viewMode: 'story',
            args
        };

        const url = 'iframe.html';
        return TestIdsService.addPropsToUrl(props, url);
    };

    static getTestId(testId: string, testIdModifier: string): string {
        return `${testId}--${testIdModifier}`;
    }

    static getTestIdSelector(testId: string) {
        return `[data-testid='${testId}']`;
    }
}
