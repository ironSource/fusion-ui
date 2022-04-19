import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ColorsDocsV3Component} from './colors-docs-v3.component';
import {RouterModule, Routes} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';

const routes: Routes = [{path: '', component: ColorsDocsV3Component}];

@NgModule({
    declarations: [ColorsDocsV3Component],
    imports: [CommonModule, RouterModule.forChild(routes), ExampleBlockModule]
})
export class ColorsDocsV3Module {}
