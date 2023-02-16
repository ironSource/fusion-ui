import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {dedent} from 'ts-dedent';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TopFilterTriggerComponent} from '@ironsource/fusion-ui/components/top-filter-trigger/v3/top-filter-trigger.component';

export default {
    title: 'Components/Filters/Top Filter/Trigger',
    component: TopFilterTriggerComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
    ],
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

const DefaultTemplate: Story<TopFilterTriggerComponent> = (args: TopFilterTriggerComponent) => ({
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

// region Default
export const Default = DefaultTemplate.bind({});
// endregion

// region SelectedAmountApps
export const SelectedAmountApps = DefaultTemplate.bind({});
SelectedAmountApps.args = {
    placeholder: '33 apps selected',
    helper: 'Dizzy Diamond and 32 more'
};
// endregion

// region SelectedAllApps
export const SelectedAllApps = DefaultTemplate.bind({});
SelectedAllApps.args = {
    placeholder: 'All Apps selected',
    helper: '65 applications'
};
// endregion

// region SingleIOSAppSelected
export const SingleIOSAppSelected = DefaultTemplate.bind({});
SingleIOSAppSelected.args = {
    label: 'Dizzy Diamond Puzzle',
    helper: 'appKey',
    icon: 'ios',
    imageApp: 'https://fusion-storybook.ironsrc.mobi/branch_demo-assets/4_app.png'
};
// endregion

// region SingleAndroidAppSelected
export const SingleAndroidAppSelected = DefaultTemplate.bind({});
SingleAndroidAppSelected.args = {
    label: 'Moy 7 the Virtual Pet Game',
    helper: 'appKey',
    icon: 'android',
    imageApp: 'https://fusion-storybook.ironsrc.mobi/branch_demo-assets/12_app.png'
};
// endregion

// region ErrorRequired
export const ErrorRequired = DefaultTemplate.bind({});
ErrorRequired.args = {
    placeholder: 'Select App',
    required: true,
    error: 'Mandatory field'
};
// endregion

// region Loading
export const Loading = DefaultTemplate.bind({});
Loading.args = {
    loading: true
};
// endregion
