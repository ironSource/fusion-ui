import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {dedent} from 'ts-dedent';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TopFilterTriggerComponent} from '@ironsource/fusion-ui/components/top-filter-trigger/v3/top-filter-trigger.component';

export default {
    title: 'V3/Components/Filters/Top Filter/Trigger',
    component: TopFilterTriggerComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`**Top Filter Trigger Component**`
            }
        },
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=15033%3A122198&t=AkzAq91BGNVsVY4p-1'
        }
    }
} as Meta<TopFilterTriggerComponent>;

const DefaultTemplate: StoryFn<TopFilterTriggerComponent> = (args: TopFilterTriggerComponent) => ({
    props: {...args},
    template: `<fusion-top-filter-trigger
    [placeholder]="placeholder"
    [label]="label"
    [imageApp]="imageApp"
    [icon]="icon"
    [helper]="helper"
    [error]="error"
    [required]="required"
    [loading]="loading"
>
</fusion-top-filter-trigger>`
});

export const Default = {
    render: DefaultTemplate
};

export const SelectedAmountApps = {
    render: DefaultTemplate,

    args: {
        placeholder: '33 apps selected',
        helper: 'Dizzy Diamond and 32 more'
    }
};

export const SelectedAllApps = {
    render: DefaultTemplate,

    args: {
        placeholder: 'All Apps selected',
        helper: '65 applications'
    }
};

export const SingleIOSAppSelected = {
    render: DefaultTemplate,

    args: {
        label: 'Dizzy Diamond Puzzle',
        helper: 'appKey',
        icon: 'ios',
        imageApp: 'https://fusion-storybook.ironsrc.mobi/branch_demo-assets/4_app.png'
    }
};

export const SingleAndroidAppSelected = {
    render: DefaultTemplate,

    args: {
        label: 'Moy 7 the Virtual Pet Game',
        helper: 'appKey',
        icon: 'android',
        imageApp: 'https://fusion-storybook.ironsrc.mobi/branch_demo-assets/12_app.png'
    }
};

export const ErrorRequired = {
    render: DefaultTemplate,

    args: {
        placeholder: 'Select App',
        required: true,
        error: 'Mandatory field'
    }
};

export const Loading = {
    render: DefaultTemplate,

    args: {
        loading: true
    }
};
