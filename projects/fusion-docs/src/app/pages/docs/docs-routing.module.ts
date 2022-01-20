import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DocsComponent} from './docs.component';

const routes: Routes = [
    {
        path: '',
        component: DocsComponent,
        children: [
            {
                path: '',
                redirectTo: 'getting-started',
                pathMatch: 'full'
            },
            {
                path: 'components',
                loadChildren: () => import('../components/components.module').then(m => m.ComponentsModule)
            },
            {
                path: 'playground',
                loadChildren: () => import('../playground/playground.module').then(m => m.PlaygroundModule)
            },
            {
                path: 'services',
                loadChildren: () => import('../services/services.module').then(m => m.ServicesModule)
            },
            {
                path: 'directives',
                loadChildren: () => import('../directives/directives.module').then(m => m.DirectivesModule)
            },
            {
                path: 'getting-started',
                loadChildren: () => import('../getting-started/getting-started.module').then(m => m.GettingStartedModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DocsRoutingModule {}
