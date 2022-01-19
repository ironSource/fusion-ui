import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {ButtonDocsComponent} from './button-docs.component';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ButtonModule} from '@ironsource/fusion-ui';
import {RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';

describe('ButtonDocsComponent', () => {
    let component: ButtonDocsComponent;
    let fixture: ComponentFixture<ButtonDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ButtonDocsComponent],
                imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, ButtonModule, RouterModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
