import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {DemoFilterComponent, HeaderOverlayDocsComponent} from './header-overlay-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {HeaderOverlayModule, IconModule} from '@ironsource/fusion-uifusion-ui';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, IconModule],
    declarations: [DemoFilterComponent],
    exports: [DemoFilterComponent]
})
class DemoFilterModule {}

describe('HeaderOverlayDocsComponent', () => {
    let component: HeaderOverlayDocsComponent;
    let fixture: ComponentFixture<HeaderOverlayDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [HeaderOverlayDocsComponent],
                imports: [
                    ExampleBlockModule,
                    CodeBlockModule,
                    DocsMenuModule,
                    HeaderOverlayModule,
                    RouterModule,
                    ReactiveFormsModule,
                    IconModule,
                    DemoFilterModule
                ]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderOverlayDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
