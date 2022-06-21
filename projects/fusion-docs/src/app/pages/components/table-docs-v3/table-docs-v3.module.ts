import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableDocsV3Component} from './table-docs-v3.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{path: '', component: TableDocsV3Component}];

@NgModule({
    declarations: [TableDocsV3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TableDocsV3Module {}
