import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CacheDocsComponent} from './cache-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';

const routes: Routes = [
    {
        path: '',
        component: CacheDocsComponent
    }
];

@NgModule({
    declarations: [CacheDocsComponent],
    imports: [CommonModule, RouterModule.forChild(routes), ExampleBlockModule, CodeBlockModule, DocsMenuModule]
})
export class CacheDocsModule {}
