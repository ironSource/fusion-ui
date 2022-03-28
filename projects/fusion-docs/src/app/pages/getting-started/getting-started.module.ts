import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GettingStartedComponent} from './getting-started.component';
import {Routes, RouterModule} from '@angular/router';
import {CodeBlockModule} from '../../components/code-block/code-block.module';
import {CopyToClipboardModule, IconModule, TooltipModule} from '@ironsource/fusion-ui';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
    {
        path: '',
        component: GettingStartedComponent
    }
];

@NgModule({
    declarations: [GettingStartedComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CodeBlockModule,
        CopyToClipboardModule,
        IconModule,
        HttpClientModule,
        TooltipModule
    ]
})
export class GettingStartedModule {}
