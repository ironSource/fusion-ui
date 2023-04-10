import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from '../layout.component';
import {HEADER_CONTENT_MOCK, NAVIGATION_MENU_MOCK} from '@ironsource/fusion-ui/components/navigation-menu/v4/stories/navigation-menu.mock';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {LayoutStoryWrapperComponent} from './layout-story-wrapper.component';
import {ButtonModule} from '@ironsource/fusion-ui/components/button';
import {TeleportingDirective} from '@ironsource/fusion-ui/directives/teleporting';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TopFilterIncludeExcludeComponent} from '@ironsource/fusion-ui/components/top-filter-include-exclude';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {MOK_APPLICATIONS_ONE_LINE_OPTIONS} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';

export default {
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
            ]
        })
    ],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/RO1s5kunvJuWbnb9tebZDA/%F0%9F%9F%A2-Unity-LevelPlay-Kit---Dashboard?node-id=727%3A110807&t=Id7OdIs4FdHUCSAD-1'
        },
        docs: {
            description: {
                component: '***Layout v4*** description will be here'
            }
        },
        layout: 'fullscreen'
    },
    args: {
        headerContent: HEADER_CONTENT_MOCK,
        layoutConfiguration: {
            navigationMenuItems: NAVIGATION_MENU_MOCK,
            layoutUser: {
                name: 'Jonny Kim',
                email: 'jonny.kim@supercell.com'
            }
        }
    }
} as Meta<LayoutComponent>;

const DefaultTemplate: Story<LayoutComponent> = (args: LayoutComponent) => ({
    props: {...args},
    template: `<fusion-layout-story-wrapper [headerContent]="headerContent" [layoutConfiguration]="layoutConfiguration"></fusion-layout-story-wrapper>
`
});

export const Default = DefaultTemplate.bind({});

export const WithHeaderDynamicComponent = DefaultTemplate.bind({});
WithHeaderDynamicComponent.args = {
    headerContent: {
        ...HEADER_CONTENT_MOCK,
        actionComponent: TopFilterIncludeExcludeComponent,
        actionData: {
            placeholder: 'Select application',
            formControl: new FormControl() as FormControl<DropdownOption[]>,
            title: 'Applications',
            items: MOK_APPLICATIONS_ONE_LINE_OPTIONS
        }
    }
};

const HeaderTeleportTemplate: Story<LayoutComponent> = (args: LayoutComponent) => ({
    props: {...args},
    template: `<fusion-layout-story-wrapper [headerContent]="headerContent" [layoutConfiguration]="layoutConfiguration"></fusion-layout-story-wrapper>

    <fusion-button *fusionTeleporting="'#fuHeaderTeleport3'" style="margin-right: 15px;">Teleported-3</fusion-button>
    <fusion-button *fusionTeleporting="'#fuHeaderTeleport1'" style="margin: 0 15px;">Teleported-1</fusion-button>
    <fusion-button *fusionTeleporting="'#fuHeaderTeleport2'" style="margin-right: 15px;">Teleported-2</fusion-button>
`
});
export const WithHeaderTeleportElements = HeaderTeleportTemplate.bind({});
WithHeaderTeleportElements.args = {
    headerContent: {
        ...HEADER_CONTENT_MOCK,
        teleportElements: [{id: 'fuHeaderTeleport1'}, {id: 'fuHeaderTeleport2'}, {id: 'fuHeaderTeleport3', isOnRight: true}]
    }
};

export const WithHeaderElements = HeaderTeleportTemplate.bind({});
WithHeaderElements.args = {
    headerContent: {
        ...HEADER_CONTENT_MOCK,
        actionComponent: TopFilterIncludeExcludeComponent,
        actionData: {
            placeholder: 'Select application',
            formControl: new FormControl() as FormControl<DropdownOption[]>,
            title: 'Applications',
            items: MOK_APPLICATIONS_ONE_LINE_OPTIONS
        },
        teleportElements: [{id: 'fuHeaderTeleport1'}, {id: 'fuHeaderTeleport2'}, {id: 'fuHeaderTeleport3', isOnRight: true}]
    }
};
