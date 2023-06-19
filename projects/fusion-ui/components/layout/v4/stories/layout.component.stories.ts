import {Meta, StoryFn} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {ApiService} from '@ironsource/fusion-ui';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {LayoutComponent} from '../layout.component';
import {
    LAYOUT_HEADER_CONTENT_MOCK,
    NAVIGATION_MENU_MOCK
} from '@ironsource/fusion-ui/components/navigation-menu/v4/stories/navigation-menu.mock';
import {LayoutStoryWrapperComponent} from './layout-story-wrapper.component';
import {ButtonModule} from '@ironsource/fusion-ui/components/button';
import {TeleportingDirective} from '@ironsource/fusion-ui/directives/teleporting';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TopFilterIncludeExcludeComponent} from '@ironsource/fusion-ui/components/top-filter-include-exclude';
import {MOK_APPLICATIONS_ONE_LINE_OPTIONS} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/entities';

const meta: Meta<LayoutStoryWrapperComponent> = {
    title: 'Components/Layout',
    component: LayoutComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                LayoutStoryWrapperComponent,
                ButtonModule,
                TeleportingDirective,
                TopFilterIncludeExcludeComponent
            ],
            providers: [ApiService]
        })
    ],
    parameters: {
        docs: {
            description: {
                component: dedent`***Layout v4*** description will be here`
            }
        },
        layout: 'fullscreen'
    },
    args: {
        headerContent: LAYOUT_HEADER_CONTENT_MOCK,
        layoutConfiguration: {
            navigationMenuItems: NAVIGATION_MENU_MOCK,
            layoutUser: {
                name: 'Jonny Kim',
                email: 'jonny.kim@supercell.com'
            }
        }
    }
};
export default meta;

const LayoutTemplate: StoryFn<LayoutComponent> = (args: LayoutComponent) => ({
    props: {...args},
    template: `<fusion-layout-story-wrapper [headerContent]="headerContent" [layoutConfiguration]="layoutConfiguration"></fusion-layout-story-wrapper>`
});

export const Default = {
    render: LayoutTemplate
};

export const WithHeaderDynamicComponent = {
    render: LayoutTemplate,
    args: {
        headerContent: {
            ...LAYOUT_HEADER_CONTENT_MOCK,
            actionComponent: TopFilterIncludeExcludeComponent,
            actionData: {
                placeholder: 'Select application',
                formControl: new FormControl() as FormControl<DropdownOption[]>,
                title: 'Applications',
                items: MOK_APPLICATIONS_ONE_LINE_OPTIONS
            }
        }
    }
};

export const WithHeaderBackButtonSubTitleAndDynamicComponent = {
    render: LayoutTemplate,
    args: {
        headerContent: {
            ...LAYOUT_HEADER_CONTENT_MOCK,
            hasBackButton: true,
            subTitle: 'Updated 1 hour ago',
            actionComponent: TopFilterIncludeExcludeComponent,
            actionData: {
                placeholder: 'Select application',
                formControl: new FormControl(MOK_APPLICATIONS_ONE_LINE_OPTIONS.slice(2, 4)) as FormControl<DropdownOption[]>,
                title: 'Applications',
                items: MOK_APPLICATIONS_ONE_LINE_OPTIONS
            }
        }
    }
};

const HeaderTeleportTemplate: StoryFn<LayoutComponent> = (args: LayoutComponent) => ({
    props: {...args},
    template: `<fusion-layout-story-wrapper [headerContent]="headerContent" [layoutConfiguration]="layoutConfiguration"></fusion-layout-story-wrapper>

    <ng-container *fusionTeleporting="'#fuHeaderTeleport'">
        <div style="display: flex; gap:8px; margin-right: 24px;">
            <fusion-button class="transparent">Button</fusion-button>
            <fusion-button>Button</fusion-button>
        </div>
    </ng-container>
`
});
export const WithHeaderTeleportElements = {
    render: HeaderTeleportTemplate,
    args: {
        headerContent: {
            ...LAYOUT_HEADER_CONTENT_MOCK,
            teleportElements: [{id: 'fuHeaderTeleport', isOnRight: true}]
        }
    }
};

export const WithHeaderTeleportElementsAndDynamicComponent = {
    render: HeaderTeleportTemplate,
    args: {
        headerContent: {
            ...LAYOUT_HEADER_CONTENT_MOCK,
            actionComponent: TopFilterIncludeExcludeComponent,
            actionData: {
                placeholder: 'Select application',
                formControl: new FormControl() as FormControl<DropdownOption[]>,
                title: 'Applications',
                items: MOK_APPLICATIONS_ONE_LINE_OPTIONS
            },
            teleportElements: [{id: 'fuHeaderTeleport', isOnRight: true}]
        }
    }
};
