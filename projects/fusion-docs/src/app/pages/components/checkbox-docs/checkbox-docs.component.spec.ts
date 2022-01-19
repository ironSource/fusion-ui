import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {CheckboxDocsComponent} from './checkbox-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ButtonModule, CheckboxModule, IconSelectListModule, InputModule} from '@ironsource/fusion-ui';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

describe('CheckboxDocsComponent', () => {
    let component: CheckboxDocsComponent;
    let fixture: ComponentFixture<CheckboxDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [CheckboxDocsComponent],
                imports: [
                    ExampleBlockModule,
                    CodeBlockModule,
                    DocsMenuModule,
                    ButtonModule,
                    RouterModule,
                    ReactiveFormsModule,
                    CheckboxModule,
                    InputModule,
                    IconSelectListModule
                ]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(CheckboxDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
