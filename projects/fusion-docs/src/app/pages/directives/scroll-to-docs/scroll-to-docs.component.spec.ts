import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {ScrollToDocsComponent} from './scroll-to-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {ScrollToModule} from '@ironsource/fusion-ui';
import {InputModule} from '@ironsource/fusion-ui/components/input/v2';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';

describe('ScrollToDocsComponent', () => {
    let component: ScrollToDocsComponent;
    let fixture: ComponentFixture<ScrollToDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ScrollToDocsComponent],
                imports: [
                    ExampleBlockModule,
                    CodeBlockModule,
                    DocsMenuModule,
                    RouterModule,
                    ReactiveFormsModule,
                    ScrollToModule,
                    InputModule,
                    ButtonModule
                ]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ScrollToDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
