import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ColorsDocsComponent} from './colors-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ColorsPaletteComponent} from './colors-palette/colors-palette.component';
import {ColorItemsComponent} from './color-items/color-items.component';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v1';
import {TableModule} from '@ironsource/fusion-ui/components/table/v1';

const routes: Routes = [{path: '', component: ColorsDocsComponent}];

@NgModule({
    declarations: [ColorsDocsComponent, ColorsPaletteComponent, ColorItemsComponent],
    imports: [
        CommonModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        ButtonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        TableModule
    ]
})
export class ColorsDocsModule {}
