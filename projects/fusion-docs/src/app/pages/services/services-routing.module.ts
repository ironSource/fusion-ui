import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'api',
                loadChildren: () => import('./api-docs/api-docs.module').then(m => m.ApiDocsModule)
            },
            {
                path: 'cache',
                loadChildren: () => import('./cache-docs/cache-docs.module').then(m => m.CacheDocsModule)
            },
            {
                path: 'log',
                loadChildren: () => import('./log-docs/log-docs.module').then(m => m.LogDocsModule)
            },
            {
                path: 'modal',
                loadChildren: () => import('./modal-service-doc/modal-service-doc.module').then(m => m.ModalServiceDocModule)
            },
            {
                path: 'notification',
                loadChildren: () =>
                    import('./notification-service-doc/notification-service-doc.module').then(m => m.NotificationServiceDocModule)
            },
            {
                path: 'toast',
                loadChildren: () => import('./toast-service-doc/toast-service-doc.module').then(m => m.ToastServiceDocModule)
            },
            {
                path: 'colors',
                loadChildren: () => import('./colors-service-docs/colors-service-docs.module').then(m => m.ColorsServiceDocsModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingServicesModule {}
