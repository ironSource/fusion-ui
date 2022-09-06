import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClickOutsideDocsComponent} from './click-outside-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {ClickOutsideModule} from '@ironsource/fusion-ui';
import {ToggleModule} from '@ironsource/fusion-ui/components/toggle/v2';

describe('ClickOutsideDocsComponent', () => {
    let component: ClickOutsideDocsComponent;
    let fixture: ComponentFixture<ClickOutsideDocsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ClickOutsideDocsComponent],
            imports: [
                ExampleBlockModule,
                CodeBlockModule,
                DocsMenuModule,
                RouterModule,
                ReactiveFormsModule,
                ClickOutsideModule,
                ToggleModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ClickOutsideDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
