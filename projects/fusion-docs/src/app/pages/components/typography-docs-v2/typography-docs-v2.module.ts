import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypographyDocsV2Component} from './typography-docs-v2.component';
import {RouterModule, Routes} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';

const routes: Routes = [{path: '', component: TypographyDocsV2Component}];

@NgModule({
    declarations: [TypographyDocsV2Component],
    imports: [CommonModule, RouterModule.forChild(routes), ExampleBlockModule]
})
export class TypographyDocsV2Module {}
