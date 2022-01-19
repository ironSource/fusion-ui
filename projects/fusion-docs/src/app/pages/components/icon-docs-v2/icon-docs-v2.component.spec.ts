import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {IconDocsV2Component} from './icon-docs-v2.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {IconModule} from '@ironsource/fusion-uifusion-ui';

describe('IconDocsV2Component', () => {
    let component: IconDocsV2Component;
    let fixture: ComponentFixture<IconDocsV2Component>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [IconDocsV2Component],
                imports: [ExampleBlockModule, IconModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(IconDocsV2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
