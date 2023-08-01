import {Meta, StoryFn} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {LayoutHeaderComponent} from './layout-header.component';
import {HEADER_CONTENT_MOCK} from '@ironsource/fusion-ui/components/navigation-menu/v4/stories/navigation-menu.mock';
import {TopFilterIncludeExcludeComponent} from '@ironsource/fusion-ui/components/top-filter-include-exclude';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {MOK_APPLICATIONS_ONE_LINE_OPTIONS} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';
import {ApiService} from '@ironsource/fusion-ui';

const actionsData = {
    backButtonClicked: action('backButtonClicked')
};

const meta: Meta<LayoutHeaderComponent> = {
    title: 'Components/Layout/Header',
    component: LayoutHeaderComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, FormsModule, ReactiveFormsModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule],
            providers: [ApiService]
        })
    ],
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        headerContent: HEADER_CONTENT_MOCK
    }
};
export default meta;

const LayoutHeaderTemplate: StoryFn<LayoutHeaderComponent> = (args: LayoutHeaderComponent) => ({
    props: {...args, backButtonClicked: actionsData.backButtonClicked},
    template: `<div style="border-bottom: solid 1px #E0E0E0; max-height: 64px;">
    <fusion-layout-header [headerContent]="headerContent" [teleportElements]="teleportElements" (backButtonClicked)="backButtonClicked($event)"></fusion-layout-header>
</div>`
});

export const Default = {
    render: LayoutHeaderTemplate
};

export const WithHeaderDynamicComponent = {
    render: LayoutHeaderTemplate,
    args: {
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
    }
};

export const WithHeaderDynamicComponentOnRight = {
    render: LayoutHeaderTemplate,
    args: {
        headerContent: {
            ...HEADER_CONTENT_MOCK,
            actionComponent: TopFilterIncludeExcludeComponent,
            actionData: {
                placeholder: 'Select application',
                formControl: new FormControl() as FormControl<DropdownOption[]>,
                title: 'Applications',
                items: MOK_APPLICATIONS_ONE_LINE_OPTIONS
            },
            actionAlignRight: true
        }
    }
};

export const WithSubTitle = {
    render: LayoutHeaderTemplate,
    args: {
        headerContent: {
            ...HEADER_CONTENT_MOCK,
            subTitle: 'Updated 1 hour ago',
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

export const WithBackButton = {
    render: LayoutHeaderTemplate,
    args: {
        headerContent: {
            ...HEADER_CONTENT_MOCK,
            hasBackButton: true,
            subTitle: 'Updated 1 hour ago',
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
