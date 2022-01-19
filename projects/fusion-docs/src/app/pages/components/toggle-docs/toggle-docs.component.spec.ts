import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {ToggleDocsComponent} from './toggle-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {ToggleModule} from '@ironsource/fusion-ui';

describe('ToggleDocsComponent', () => {
    let component: ToggleDocsComponent;
    let fixture: ComponentFixture<ToggleDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ToggleDocsComponent],
                imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, RouterModule, ReactiveFormsModule, ToggleModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ToggleDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
