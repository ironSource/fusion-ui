import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {FlagDocsComponent} from './flag-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';

const routes: Routes = [{path: '', component: FlagDocsComponent}];

@NgModule({
    declarations: [FlagDocsComponent],
    imports: [CommonModule, ExampleBlockModule, CodeBlockModule, DocsMenuModule, FlagModule, RouterModule.forChild(routes)]
})
export class FlagDocsModule {}
