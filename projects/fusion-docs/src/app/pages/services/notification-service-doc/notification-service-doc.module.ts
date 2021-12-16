import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationServiceDocComponent} from './notification-service-doc.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: NotificationServiceDocComponent
    }
];

@NgModule({
    declarations: [NotificationServiceDocComponent],
    imports: [CommonModule, RouterModule.forChild(routes), ExampleBlockModule, CodeBlockModule, DocsMenuModule]
})
export class NotificationServiceDocModule {}
