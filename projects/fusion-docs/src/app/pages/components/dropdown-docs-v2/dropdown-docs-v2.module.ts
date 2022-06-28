import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownDocsV2Component} from './dropdown-docs-v2.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {DropdownCustomPlaceholderModule} from '../../../components/dropdown-custom-placeholder/dropdown-custom-placeholder.module';
import {DropdownModule} from '@ironsource/fusion-ui/components/dropdown';
import {MultiDropdownModule} from '@ironsource/fusion-ui/components/multi-dropdown/v2';
import {ErrorMessageModule} from '@ironsource/fusion-ui/components/error-message';

const routes: Routes = [{path: '', component: DropdownDocsV2Component}];

@NgModule({
    declarations: [DropdownDocsV2Component],
    imports: [
        CommonModule,
        ExampleBlockModule,
        CodeBlockModule,
        DocsMenuModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        DropdownModule,
        MultiDropdownModule,
        ErrorMessageModule,
        DropdownCustomPlaceholderModule
    ]
})
export class DropdownDocsV2Module {}
