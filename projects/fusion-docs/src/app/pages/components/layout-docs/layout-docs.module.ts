import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutDocsRoutingModule} from './layout-docs-routing.module';
import {LayoutDocsComponent} from './layout-docs.component';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {LayoutV1Module, TableModule} from '../../../../../../fusion-ui/src/public-api';
import {MenuItemExampleModule} from '../../../components/menu-item-example/menu-item-example.module';

@NgModule({
    declarations: [LayoutDocsComponent],
    imports: [
        CommonModule,
        LayoutDocsRoutingModule,
        DocsMenuModule,
        ExampleBlockModule,
        CodeBlockModule,
        LayoutV1Module,
        TableModule,
        MenuItemExampleModule
    ]
})
export class LayoutDocsModule {}
