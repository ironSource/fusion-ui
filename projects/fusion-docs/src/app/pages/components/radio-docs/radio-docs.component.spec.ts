import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {RadioDocsComponent} from './radio-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {IconSelectListModule, InputModule, RadioGroupModule, RadioModule} from '@ironource/fusion-ui';

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
