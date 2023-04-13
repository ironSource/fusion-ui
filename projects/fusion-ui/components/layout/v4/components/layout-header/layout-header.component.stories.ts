import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {LayoutHeaderComponent} from './layout-header.component';
import {HEADER_CONTENT_MOCK} from '@ironsource/fusion-ui/components/navigation-menu/v4/stories/navigation-menu.mock';
import {TopFilterIncludeExcludeComponent} from '@ironsource/fusion-ui/components/top-filter-include-exclude';
import {FormControl} from '@angular/forms';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {MOK_APPLICATIONS_ONE_LINE_OPTIONS} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';

const actionsData = {
    backButtonClicked: action('backButtonClicked')
};

export default {
    title: 'Components/Layout/Header',
    component: LayoutHeaderComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
    ],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/RO1s5kunvJuWbnb9tebZDA/%F0%9F%9F%A2-Unity-LevelPlay-Kit---Dashboard?node-id=717-62763&t=9gnxZ1A9pSeF7Tr3-4'
        },
        docs: {
            description: {
                component: '***Layout Header v4*** description will be here'
            }
        },
        layout: 'fullscreen'
    },
    args: {
        headerContent: HEADER_CONTENT_MOCK
    }
} as Meta<LayoutHeaderComponent>;

const DefaultTemplate: Story<LayoutHeaderComponent> = (args: LayoutHeaderComponent) => ({
    props: {...args, backButtonClicked: actionsData.backButtonClicked},
    template: `<div style="border-bottom: solid 1px #E0E0E0; max-height: 64px;">
    <fusion-layout-header [headerContent]="headerContent" (backButtonClicked)="backButtonClicked($event)"></fusion-layout-header>
</div>`
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

export const WithSubTitle = DefaultTemplate.bind({});
WithSubTitle.args = {
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
};

export const WithBackButton = DefaultTemplate.bind({});
WithBackButton.args = {
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
};
