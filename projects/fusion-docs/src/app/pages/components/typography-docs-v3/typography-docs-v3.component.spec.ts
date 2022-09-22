import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {TypographyDocV3Component} from './typography-docs-v3.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {TableModule} from '@ironsource/fusion-ui/components/table/v1';

describe('TypographyDocV3Component', () => {
    let component: TypographyDocV3Component;
    let fixture: ComponentFixture<TypographyDocV3Component>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [TypographyDocV3Component],
            imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, RouterModule, ReactiveFormsModule, TableModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TypographyDocV3Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
