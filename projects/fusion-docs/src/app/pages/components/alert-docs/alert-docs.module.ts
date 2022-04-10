import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AlertDocsRoutingModule} from './alert-docs-routing.module';
import {AlertDocsComponent} from './alert-docs.component';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {AlertModule} from '@ironsource/fusion-ui';

@NgModule({
    declarations: [AlertDocsComponent],
    imports: [CommonModule, AlertDocsRoutingModule, DocsMenuModule, ExampleBlockModule, CodeBlockModule, AlertModule]
})
export class AlertDocsModule {}
