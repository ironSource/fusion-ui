import {RepositionDirective} from "./reposition.directive";
import {ElementRef} from "@angular/core";

class MockElementRef implements ElementRef {
    nativeElement = {};
}

describe('RepositionDirective', () => {
    it('should create an instance', () => {
        const directive = new RepositionDirective(new MockElementRef());
        expect(directive).toBeTruthy();
    });
});
