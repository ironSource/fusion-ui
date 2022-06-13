import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutDocsRoutingModule} from './layout-docs-routing.module';
import {LayoutDocsComponent} from './layout-docs.component';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {TableModule} from '@ironsource/fusion-ui/components/table/v1';
import {LayoutModule} from '@ironsource/fusion-ui/components/layout/v1';
import {MenuItemExampleModule} from '../../../components/menu-item-example/menu-item-example.module';

@NgModule({
    declarations: [LayoutDocsComponent],
    imports: [
        CommonModule,
        LayoutDocsRoutingModule,
        DocsMenuModule,
        ExampleBlockModule,
        CodeBlockModule,
        LayoutModule,
        TableModule,
        MenuItemExampleModule
    ]
})
export class LayoutDocsModule {}
