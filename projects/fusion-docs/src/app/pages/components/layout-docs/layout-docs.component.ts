import {Component, OnDestroy, OnInit, Type} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HeaderState, StyleVersion} from '@ironsource/fusion-ui';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {TableColumnTypeEnum} from '@ironsource/fusion-ui';
import {MenuItemExampleComponent} from '../../../components/menu-item-example/menu-item-example.component';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';
import {VersionService} from '../../../services/version/version.service';

const KNOWLEDGE_CENTER_URL = `${environment.developersReference}/sdk-repository`;
const SUBMIT_REQUEST_URL = `${environment.developersReference}/submit-a-request`;
const DOWNLOAD_SDK_URL = `${environment.developersReference}/sdk-repository`;

@Component({
    selector: 'fusion-layout-docs',
    templateUrl: './layout-docs.component.html',
    styleUrls: ['./layout-docs.component.scss']
})
export class LayoutDocsComponent implements OnInit, OnDestroy {
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

    userName = 'Fusion User';

    headerState: HeaderState = {
        title: '',
        actionComponent: null,
        actionData: null
    };

    headerPrimaryMenuItems = [
        {
            name: 'IronSource',
            cssClass: 'is-user-menu-item',
            redirect: 'http://ironsrc.com'
        },
        {
            name: 'test html snippet',
            content: {
                htmlSnippet: `<div style="color:red; padding: 5px 20px;">HTML Snippet</div>`
            }
        },
        {
            name: 'test component',
            content: {
                component: {
                    type: MenuItemExampleComponent as Type<Component>,
                    data: {
                        state: true
                    }
                }
            }
        },
        {
            name: 'test element',
            content: {
                element: (() => {
                    const element = document.createElement('div');
                    element.style.cssText = `color:green; padding: 5px 20px;`;
                    element.appendChild(document.createTextNode('HTML Element'));
                    return element;
                })()
            }
        }
    ];

    headerSecondaryMenuItems = [
        {
            name: 'Knowledge Center',
            cssClass: 'is-user-menu-item',
            redirect: KNOWLEDGE_CENTER_URL
        },
        {
            name: 'Download SDK',
            cssClass: 'is-user-menu-item',
            redirect: DOWNLOAD_SDK_URL,
            permissions: ['isAdvertiserLongTail']
        },
        {
            name: 'Contact Us',
            cssClass: 'is-user-menu-item',
            redirect: SUBMIT_REQUEST_URL
        }
    ];

    mainMenuItems = [
        {
            icon: {iconName: 'dashboard', iconVersion: 'v1'},
            name: 'Google',
            redirect: 'http://google.com'
        },
        {
            icon: {iconName: 'spaceship', iconVersion: 'v1'},
            name: 'Web Sites',
            children: [
                {
                    name: 'Yahoo',
                    redirect: `http://yahoo.com/`,
                    cssClass: 'is-user-menu-last-child-item',
                    additionalAction: {
                        name: '+ Email',
                        redirect: 'http://mail.yahoo.com'
                    }
                },
                {
                    name: 'Ynet',
                    redirect: 'http://ynet.co.il',
                    cssClass: 'is-user-menu-last-child-item is-link-as-regular-item',
                    target: '_blank'
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
        rows: [
            {
                name: '--header-logo-background-image',
                description: 'Logo Background Image'
            },
            {
                name: '--header-collapse-logo-background-image',
                description: 'Collapse Logo Background Image'
            },
            {
                name: '--header-panel-height',
                description: 'Layout Header Height'
            },
            {
                name: '--menu-header-height',
                description: 'Layout Menu Header Height'
            },
            {
                name: '--logo-width',
                description: 'Logo Width'
            },
            {
                name: '--logo-height',
                description: 'Logo Height'
            },
            {
                name: '--logo-bottom-position',
                description: 'Logo Bottom Position'
            },
            {
                name: '--logo-left-position',
                description: 'Logo Left Position'
            },
            {
                name: '--collapse-logo-width',
                description: 'Collapse Logo Width'
            },
            {
                name: '--collapse-logo-heighth',
                description: 'Collapse Logo Height'
            },
            {
                name: '--collapse-logo-bottom-position',
                description: 'Collapse Logo Bottom Position'
            },
            {
                name: '--collapse-logo-left-position',
                description: 'Collapse Logo Left Position'
            },
            {
                name: '--layout-background-color',
                description: 'Layout Background Color'
            },
            {
                name: '--layout-menu-item-open-background-color',
                description: 'Layout Menu Item Open Background Color'
            },
            {
                name: '--layout-menu-item-color',
                description: 'Layout Menu Item Color'
            },
            {
                name: '--layout-menu-item-active-color',
                description: 'Layout Menu Item Active Color'
            },
            {
                name: '--layout-menu-item-active-border-left-color',
                description: 'Layout Menu Item Active Border Left Color'
            },
            {
                name: '--layout-header-menu-border-color',
                description: 'Layout Header Menu Border Color'
            }
        ]
    };

    tsCodeExample = `userName = 'Fusion User';

headerState = {
    title: '',
    actionComponent: null,
    actionData: null
};

headerPrimaryMenuItems = [
    {
        name: 'IronSource',
        cssClass: 'is-user-menu-item',
        redirect: 'http://ironsrc.com'
    },
    {
        name: 'test html snippet',
        content: {
            htmlSnippet: '<div style="color:red; padding: 5px 20px;">HTML Snippet</div>'
        }
    },
    {
        name: 'test component',
        content: {
            component: {
                type: MenuItemExampleComponent as Type<Component>,
                data: {
                    state: true
                }
            }
        }
    },
    {
        name: 'test element',
        content: {
            element: (() => {
                const element = document.createElement('div');
                element.style.cssText = 'color:green; padding: 5px 20px;';
                element.appendChild(document.createTextNode('HTML Element'));
                return element;
            })()
        }
    }
];

headerSecondaryMenuItems = [
    {
        name: 'Knowledge Center',
        cssClass: 'is-user-menu-item',
        redirect: KNOWLEDGE_CENTER_URL
    },
    {
        name: 'Download SDK',
        cssClass: 'is-user-menu-item',
        redirect: DOWNLOAD_SDK_URL,
        permissions: ['isAdvertiserLongTail']
    },
    {
        name: 'Contact Us',
        cssClass: 'is-user-menu-item',
        redirect: SUBMIT_REQUEST_URL
    }
];

mainMenuItems = [
    {
        icon: {iconName: 'dashboard', iconVersion: 'v1'},
        name: 'Google',
        redirect: 'http://google.com'
    },
    {
        icon: {iconName: 'spaceship', iconVersion: 'v1'},
        name: 'Web Sites',
        children: [
            {
                name: 'Yahoo',
                redirect: \`http://yahoo.com/\`,
                cssClass: 'is-user-menu-last-child-item',
                additionalAction: {
                    name: '+ Email',
                    redirect: 'http://mail.yahoo.com'
                }
            },
            {
                name: 'Ynet',
                redirect: 'http://ynet.co.il',
                cssClass: 'is-user-menu-last-child-item'
            }
        ]
    }
];
`;

    constructor(private versionService: VersionService, private router: Router) {}

    ngOnInit(): void {
        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V2 || styleVersion === StyleVersion.V3) {
                this.router.navigate(['docs/components/v2/layout']);
            }
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}
