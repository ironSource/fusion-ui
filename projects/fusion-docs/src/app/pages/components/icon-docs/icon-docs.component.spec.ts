import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {IconDocsComponent} from './icon-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {RouterModule} from '@angular/router';
import {FlagModule, IconModule, SvgModule} from '@ironource/fusion-ui';

describe('IconDocsComponent', () => {
    let component: IconDocsComponent;
    let fixture: ComponentFixture<IconDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [IconDocsComponent],
                imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, RouterModule, SvgModule, IconModule, FlagModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(IconDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
