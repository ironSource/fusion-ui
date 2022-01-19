import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {Observable, Subject} from 'rxjs';
import {
    LayoutComponentConfiguration,
    LayoutUser,
    SidebarMenuItem,
    StyleVersion,
    TableColumnTypeEnum,
    VersionService
} from '@ironsource/fusion-uifusion-ui';
import {takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';
import {LAYOUT_CONFIGURATION} from './layout-docs-v2.mocking';
import {CSS_VARIABLES} from './layout-docs-v2.data';
import {DocsLayoutService} from '../../docs/docs-layout.service';

@Component({
    selector: 'fusion-layout-docs-v2',
    templateUrl: './layout-docs-v2.component.html',
    styleUrls: ['./layout-docs-v2.component.scss']
})
export class LayoutDocsV2Component implements OnInit, OnDestroy {
    private onDestroy$ = new Subject<void>();
    selectedVersion$: Observable<StyleVersion> = this.versionService.styleVersion$.pipe(takeUntil(this.onDestroy$));

    rightMenu: DocsMenuItem[] = [
        {
            title: 'Type',
            items: [
                {
                    label: 'Basic',
                    scrollTo: '#typeBasic',
                    scrollOffset: 30
                }
            ]
        },
        {
            title: 'Configuration',
            items: [
                {
                    label: 'Parameters',
                    scrollTo: '#params',
                    scrollOffset: 30
                },
                {
                    label: 'CSS Custom Properties',
                    scrollTo: '#customProperties',
                    scrollOffset: 30
                }
            ]
        }
    ];
    customPropertiesTable = {
        columns: [
            {
                key: 'name',
                title: 'Name',
                type: TableColumnTypeEnum.String
            },
            {
                key: 'description',
                title: 'Description',
                type: TableColumnTypeEnum.String
            }
        ],
        rows: CSS_VARIABLES
    };

    layoutConfiguration: LayoutComponentConfiguration = LAYOUT_CONFIGURATION;
    isLightTheme = false;

    constructor(private versionService: VersionService, private router: Router, private docLayoutService: DocsLayoutService) {}

    ngOnInit(): void {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Layout'
        });

        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V1) {
                this.router.navigate(['docs/components/layout']);
            }
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    onHeaderMenuItemClicked(menuItem: SidebarMenuItem) {
        console.log('Header menu item was clicked: ', menuItem);
        if (menuItem.name === 'Theme toggle') {
            this.isLightTheme = !this.isLightTheme;
        }
    }

    onSidebarMenuItemClicked(menuItem: SidebarMenuItem) {
        console.log('Sidebar menu item was clicked: ', menuItem);
    }

    /**
     * For mobile screen size
     * - user
     */
    onUserLogout(user: LayoutUser) {
        console.log('User logout: ', user);
    }
}
