import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'click-outside',
                loadChildren: () => import('./click-outside-docs/click-outside-docs.module').then(m => m.ClickOutsideDocsModule)
            },
            {
                path: 'copy-to-clipboard',
                loadChildren: () => import('./copy-to-clipboard-docs/copy-to-clipboard-docs.module').then(m => m.CopyToClipboardDocsModule)
            },
            {
                path: 'error-message',
                loadChildren: () => import('./error-message-docs/error-message-docs.module').then(m => m.ErrorMessageDocsModule)
            },
            {
                path: 'scroll-to',
                loadChildren: () => import('./scroll-to-docs/scroll-to-docs.module').then(m => m.ScrollToDocsModule)
            },
            {
                path: 'intersection',
                loadChildren: () => import('./intersection-docs/intersection-docs.module').then(m => m.IntersectionDocsModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingDirectivesModule {}
