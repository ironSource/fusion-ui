import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SwitchersDocsComponent} from './switchers-docs.component';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {SwitcherModule} from '@ironsource/fusion-ui/components/switcher/v1';

const routes: Routes = [{path: '', component: SwitchersDocsComponent}];

@NgModule({
    declarations: [SwitchersDocsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        DocsMenuModule,
        ExampleBlockModule,
        CodeBlockModule,
        SwitcherModule
    ]
})
export class SwitchersDocsModule {}
