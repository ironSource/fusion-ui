import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabsDocsComponent} from './tabs-docs.component';
import {RouterModule, Routes} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {TabsModule} from '@ironsource/fusion-ui/components/tabs/tabs.module';
import {PopupContentExampleModule} from '../../../components/popup-content-example/popup-content-example.module';

const routes: Routes = [{path: '', component: TabsDocsComponent}];

@NgModule({
    declarations: [TabsDocsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        TabsModule,
        PopupContentExampleModule
    ]
})
export class TabsDocsModule {}
