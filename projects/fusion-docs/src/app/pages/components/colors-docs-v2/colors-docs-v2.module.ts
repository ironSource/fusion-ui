import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ColorsDocsV2Component} from './colors-docs-v2.component';
import {RouterModule, Routes} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';

const routes: Routes = [{path: '', component: ColorsDocsV2Component}];

@NgModule({
    declarations: [ColorsDocsV2Component],
    imports: [CommonModule, RouterModule.forChild(routes), ExampleBlockModule]
})
export class ColorsDocsV2Module {}
