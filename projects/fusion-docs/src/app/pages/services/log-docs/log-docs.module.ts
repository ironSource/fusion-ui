import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogDocsComponent} from './log-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';

const routes: Routes = [
    {
        path: '',
        component: LogDocsComponent
    }
];

@NgModule({
    declarations: [LogDocsComponent],
    imports: [CommonModule, RouterModule.forChild(routes), ExampleBlockModule, CodeBlockModule, DocsMenuModule]
})
export class LogDocsModule {}
