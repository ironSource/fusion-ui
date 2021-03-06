import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IntersectionDocsComponent} from './intersection-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AlertModule} from '@ironsource/fusion-ui/components/alert/v1';
import {InputModule} from '@ironsource/fusion-ui/components/input/v1';
import {IntersectionModule} from '@ironsource/fusion-ui';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

const routes: Routes = [{path: '', component: IntersectionDocsComponent}];

@NgModule({
    declarations: [IntersectionDocsComponent],
    imports: [
        CommonModule,
        ExampleBlockModule,
        AlertModule,
        CodeBlockModule,
        DocsMenuModule,
        InputModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        IntersectionModule,
        IconModule
    ]
})
export class IntersectionDocsModule {}
