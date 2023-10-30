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
}
