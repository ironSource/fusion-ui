import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ComponentsComponent} from './components.component';

const routes: Routes = [
    {
        path: '',
        component: ComponentsComponent,
        children: [
            {
                path: '',
                redirectTo: 'alert',
                pathMatch: 'full'
            },
            {
                path: 'accordion',
                loadChildren: () => import('./accordion-docs/accordion-docs.module').then(m => m.AccordionDocsModule)
            },
            {
                path: 'modal',
                loadChildren: () => import('./modal-docs/modal-docs.module').then(m => m.ModalDocsModule)
            },
            {
                path: 'v2/modal',
                loadChildren: () => import('./modal-docs-v2/modal-docs-v2.module').then(m => m.ModalDocsV2Module)
            },
            {
                path: 'datepicker',
                loadChildren: () => import('./datepicker-docs/datepicker-docs.module').then(m => m.DatepickerDocsModule)
            },
            {
                path: 'alert',
                loadChildren: () => import('./alert-docs/alert-docs.module').then(m => m.AlertDocsModule)
            },
            {
                path: 'v2/alert',
                loadChildren: () => import('./alert-docs-v2/alert-docs-v2.module').then(m => m.AlertDocsV2Module)
            },
            {
                path: 'popup',
                loadChildren: () => import('./popup-docs/popup-docs.module').then(m => m.PopupDocsModule)
            },
            {
                path: 'v2/popup',
                loadChildren: () => import('./popup-docs-v2/popup-docs-v2.module').then(m => m.PopupDocsV2Module)
            },
            {
                path: 'button',
                loadChildren: () => import('./button-docs/button-docs.module').then(m => m.ButtonDocsModule)
            },
            {
                path: 'checkbox',
                loadChildren: () => import('./checkbox-docs/checkbox-docs.module').then(m => m.CheckboxDocsModule)
            },
            {
                path: 'dropdown',
                loadChildren: () => import('./dropdown-docs/dropdown-docs.module').then(m => m.DropdownDocsModule)
            },
            {
                path: 'v2/dropdown',
                loadChildren: () => import('./dropdown-docs-v2/dropdown-docs-v2.module').then(m => m.DropdownDocsV2Module)
            },
            {
                path: 'v2/dropdown-dual-multi-select',
                loadChildren: () =>
                    import('./dropdown-dual-multi-select-docs/dropdown-dual-multi-select-docs.module').then(
                        m => m.DropdownDualMultiSelectDocsModule
                    )
            },
            {
                path: 'flag',
                loadChildren: () => import('./flag-docs/flag-docs.module').then(m => m.FlagDocsModule)
            },
            {
                path: 'header-overlay',
                loadChildren: () => import('./header-overlay-docs/header-overlay-docs.module').then(m => m.HeaderOverlayDocsModule)
            },
            {
                path: 'icon',
                loadChildren: () => import('./icon-docs/icon-docs.module').then(m => m.IconDocsModule)
            },
            {
                path: 'v2/icon',
                loadChildren: () => import('./icon-docs-v2/icon-docs-v2.module').then(m => m.IconDocsV2Module)
            },
            {
                path: 'input',
                loadChildren: () => import('./input-docs/input-docs.module').then(m => m.InputDocsModule)
            },
            {
                path: 'layout',
                loadChildren: () => import('./layout-docs/layout-docs.module').then(m => m.LayoutDocsModule)
            },
            {
                path: 'v2/layout',
                loadChildren: () => import('./layout-docs-v2/layout-docs-v2.module').then(m => m.LayoutDocsV2Module)
            },
            {
                path: 'list-box',
                loadChildren: () => import('./list-box-docs/list-box-docs.module').then(m => m.ListBoxDocsModule)
            },
            {
                path: 'v2/list-box',
                loadChildren: () => import('./list-box-docs-v2/list-box-docs-v2.module').then(m => m.ListBoxDocsV2Module)
            },
            {
                path: 'loader',
                loadChildren: () => import('./loader-docs/loader-docs.module').then(m => m.LoaderDocsModule)
            },
            {
                path: 'radio',
                loadChildren: () => import('./radio-docs/radio-docs.module').then(m => m.RadioDocsModule)
            },
            {
                path: 'table',
                loadChildren: () => import('./table-docs/table-docs.module').then(m => m.TableDocsModule)
            },
            {
                path: 'v2/table',
                loadChildren: () => import('./table-docs-v2/table-docs-v2.module').then(m => m.TableDocsV2Module)
            },
            {
                path: 'tag',
                loadChildren: () => import('./tag-docs/tag-docs.module').then(m => m.TagDocsModule)
            },
            {
                path: 'v2/tag',
                loadChildren: () => import('./tag-docs-v2/tag-docs-v2.module').then(m => m.TagDocsV2Module)
            },
            {
                path: 'tabs',
                loadChildren: () => import('./tabs-docs/tabs-docs.module').then(m => m.TabsDocsModule)
            },
            {
                path: 'toast',
                loadChildren: () => import('./toast-docs/toast-docs.module').then(m => m.ToastDocsModule)
            },
            {
                path: 'toggle',
                loadChildren: () => import('./toggle-docs/toggle-docs.module').then(m => m.ToggleDocsModule)
            },
            {
                path: 'tooltip',
                loadChildren: () => import('./tooltip-docs/tooltip-docs.module').then(m => m.TooltipDocsModule)
            },
            {
                path: 'typography',
                loadChildren: () => import('./typography-docs/typography-docs.module').then(m => m.TypographyDocsModule)
            },
            {
                path: 'v2/typography',
                loadChildren: () => import('./typography-docs-v2/typography-docs-v2.module').then(m => m.TypographyDocsV2Module)
            },
            {
                path: 'colors',
                loadChildren: () => import('./colors-docs/colors-docs.module').then(m => m.ColorsDocsModule)
            },
            {
                path: 'v2/colors',
                loadChildren: () => import('./colors-docs-v2/colors-docs-v2.module').then(m => m.ColorsDocsV2Module)
            },
            {
                path: 'video-player',
                loadChildren: () => import('./video-player-docs/video-player-docs.module').then(m => m.VideoPlayerDocsModule)
            },
            {
                path: 'v2/video-player',
                loadChildren: () => import('./video-player-docs-v2/video-player-docs-v2.module').then(m => m.VideoPlayerDocsV2Module)
            },
            {
                path: 'charts',
                loadChildren: () => import('./chart-docs/chart-docs.module').then(m => m.ChartDocsModule)
            },
            {
                path: 'v2/charts',
                loadChildren: () => import('./chart-docs-v2/chart-docs-v2.module').then(m => m.ChartDocsV2Module)
            },
            {
                path: 'icon-status',
                loadChildren: () => import('./icon-status-docs/icon-status-docs.module').then(m => m.IconStatusDocsModule)
            },
            {
                path: 'switchers',
                loadChildren: () => import('./switchers-docs/switchers-docs.module').then(m => m.SwitchersDocsModule)
            },
            {
                path: 'v2/switchers',
                loadChildren: () => import('./switchers-docs-v2/switchers-docs-v2.module').then(m => m.SwitchersDocsV2Module)
            },
            {
                path: 'daterange',
                loadChildren: () => import('./daterange-docs/daterange-docs.module').then(m => m.DaterangeDocsModule)
            },
            {
                path: 'override-style',
                loadChildren: () => import('./override-style-docs/override-style-docs.module').then(m => m.OverrideStyleDocsModule)
            },
            {
                path: 'mobile-previewer',
                loadChildren: () => import('./mobile-previewer-docs/mobile-previewer-docs.module').then(m => m.MobilePreviewerDocsModule)
            },
            {
                path: 'v2/mobile-previewer',
                loadChildren: () =>
                    import('./mobile-previewer-docs-v2/mobile-previewer-docs-v2.module').then(m => m.MobilePreviewerDocsV2Module)
            },
            {
                path: 'status-label',
                loadChildren: () => import('./status-label-docs/status-label-docs.module').then(m => m.StatusLabelDocsModule)
            },
            {
                path: 'month-picker',
                loadChildren: () => import('./month-picker-docs/month-picker-docs.module').then(m => m.MonthPickerDocsModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule {}
