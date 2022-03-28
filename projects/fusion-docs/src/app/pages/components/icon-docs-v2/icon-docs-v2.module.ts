import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconDocsV2Component} from './icon-docs-v2.component';
import {RouterModule, Routes} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {ButtonModule, IconModule, InputModule} from '@ironsource/fusion-ui';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [{path: '', component: IconDocsV2Component}];

@NgModule({
    declarations: [IconDocsV2Component],
    imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, InputModule, ExampleBlockModule, IconModule, ButtonModule]
})
export class IconDocsV2Module {}
