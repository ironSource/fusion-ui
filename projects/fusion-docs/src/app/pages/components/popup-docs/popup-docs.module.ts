import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopupDocsComponent} from './popup-docs.component';
import {PopupDocsRoutingModule} from './popup-docs-routing.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {PopupModule} from '@ironsource/fusion-ui/components/popup/v2';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v1';

@NgModule({
    declarations: [PopupDocsComponent],
    imports: [CommonModule, PopupDocsRoutingModule, ExampleBlockModule, CodeBlockModule, DocsMenuModule, ButtonModule, PopupModule]
})
export class PopupDocsModule {}
