import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderOverlayDocsComponent, DemoFilterComponent} from './header-overlay-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HeaderOverlayModule} from '@ironsource/fusion-ui/components/header-overlay/v1';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

const routes: Routes = [{path: '', component: HeaderOverlayDocsComponent}];

@NgModule({
    declarations: [HeaderOverlayDocsComponent, DemoFilterComponent],
    imports: [
        CommonModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        HeaderOverlayModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        IconModule
    ]
})
export class HeaderOverlayDocsModule {}
