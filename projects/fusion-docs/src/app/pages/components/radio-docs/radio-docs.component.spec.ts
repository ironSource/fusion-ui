import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {RadioDocsComponent} from './radio-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {RadioGroupModule} from '@ironsource/fusion-ui/components/radio-group/v2';
import {RadioModule} from '@ironsource/fusion-ui/components/radio/v2';
import {InputModule} from '@ironsource/fusion-ui/components/input/v2';
import {IconSelectListModule} from '@ironsource/fusion-ui/components/icon-select-list/v1';

describe('RadioDocsComponent', () => {
    let component: RadioDocsComponent;
    let fixture: ComponentFixture<RadioDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [RadioDocsComponent],
                imports: [
                    ExampleBlockModule,
                    CodeBlockModule,
                    DocsMenuModule,
                    RouterModule,
                    ReactiveFormsModule,
                    RadioGroupModule,
                    RadioModule,
                    InputModule,
                    IconSelectListModule
                ]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(RadioDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
