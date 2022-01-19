import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {InputDocsComponent} from './input-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {RouterModule} from '@angular/router';
import {AlertModule, ErrorMessageModule, IconModule, InputModule, TextareaModule, TooltipModule} from '@ironsource/fusion-uifusion-ui';
import {ReactiveFormsModule} from '@angular/forms';

describe('InputDocsComponent', () => {
    let component: InputDocsComponent;
    let fixture: ComponentFixture<InputDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [InputDocsComponent],
                imports: [
                    ExampleBlockModule,
                    CodeBlockModule,
                    DocsMenuModule,
                    RouterModule,
                    InputModule,
                    TextareaModule,
                    ReactiveFormsModule,
                    AlertModule,
                    ErrorMessageModule,
                    IconModule,
                    TooltipModule
                ]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(InputDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
