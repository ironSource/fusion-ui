import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {ColorsDocsComponent} from './colors-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ButtonModule} from '@ironsource/fusion-ui';
import {TableModule} from '@ironsource/fusion-ui/components/table/v1';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {ColorsPaletteComponent} from './colors-palette/colors-palette.component';
import {ColorItemsComponent} from './color-items/color-items.component';

describe('ColorsDocsComponent', () => {
    let component: ColorsDocsComponent;
    let fixture: ComponentFixture<ColorsDocsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ColorsDocsComponent, ColorsPaletteComponent, ColorItemsComponent],
            imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, ButtonModule, RouterModule, ReactiveFormsModule, TableModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ColorsDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
