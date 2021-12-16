import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {ErrorMessageDocsComponent} from './error-message-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {ErrorMessageModule, InputModule} from '@ironsrc/fusion-ui';

describe('ErrorMessageDocsComponent', () => {
    let component: ErrorMessageDocsComponent;
    let fixture: ComponentFixture<ErrorMessageDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ErrorMessageDocsComponent],
                imports: [
                    ExampleBlockModule,
                    CodeBlockModule,
                    DocsMenuModule,
                    RouterModule,
                    ReactiveFormsModule,
                    ErrorMessageModule,
                    InputModule
                ]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ErrorMessageDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
