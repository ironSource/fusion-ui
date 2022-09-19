import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {IconStatusDocsComponent} from './icon-status-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {IconStatusModule} from '@ironsource/fusion-ui/components/icon-status/v1';

describe('IconStatusDocsComponent', () => {
    let component: IconStatusDocsComponent;
    let fixture: ComponentFixture<IconStatusDocsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [IconStatusDocsComponent],
            imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, IconStatusModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IconStatusDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
