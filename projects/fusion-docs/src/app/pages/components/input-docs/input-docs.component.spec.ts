import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {InputDocsComponent} from './input-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {InputModule} from '@ironsource/fusion-ui/components/input/v2';
import {TextareaModule} from '@ironsource/fusion-ui/components/textarea/v2';
import {AlertModule} from '@ironsource/fusion-ui/components/alert/v2';
import {ErrorMessageModule} from '@ironsource/fusion-ui/components/error-message/v2';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';

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
