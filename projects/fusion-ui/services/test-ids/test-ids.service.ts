import {Injectable} from '@angular/core';

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

    static getTestId = (testId: string, testIdModifier: string) => `${testId}--${testIdModifier}`;

    static getTestIdSelector = (testId: string) => `[data-testid='${testId}']`;
}
