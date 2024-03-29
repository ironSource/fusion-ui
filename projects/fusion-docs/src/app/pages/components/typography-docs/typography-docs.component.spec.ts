import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {TypographyDocsComponent} from './typography-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {TableModule} from '@ironsource/fusion-ui/components/table/v1';

describe('TypographyDocsComponent', () => {
    let component: TypographyDocsComponent;
    let fixture: ComponentFixture<TypographyDocsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [TypographyDocsComponent],
            imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, RouterModule, ReactiveFormsModule, TableModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TypographyDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
