import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastServiceDocComponent} from './toast-service-doc.component';
import {RouterModule, Routes} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';

const routes: Routes = [
    {
        path: '',
        component: ToastServiceDocComponent
    }
];

@NgModule({
    declarations: [ToastServiceDocComponent],
    imports: [CommonModule, RouterModule.forChild(routes), ExampleBlockModule, CodeBlockModule, DocsMenuModule]
})
export class ToastServiceDocModule {}
