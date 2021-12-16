import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverrideStyleDocsComponent} from './override-style-docs.component';
import {Routes, RouterModule} from '@angular/router';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {AlertModule, AlertTheme, ALERT_THEME_TOKEN} from '../../../../../../fusion-ui/src/public-api';

export const alertTheme: AlertTheme = {
    '--alert-info-background-color': '#B0F7F7'
};

export const routes: Routes = [
    {
        path: '',
        component: OverrideStyleDocsComponent
    }
];

@NgModule({
    declarations: [OverrideStyleDocsComponent],
    imports: [CommonModule, RouterModule.forChild(routes), DocsMenuModule, ExampleBlockModule, CodeBlockModule, AlertModule],
    providers: [{provide: ALERT_THEME_TOKEN, useValue: alertTheme}]
})
export class OverrideStyleDocsModule {}
