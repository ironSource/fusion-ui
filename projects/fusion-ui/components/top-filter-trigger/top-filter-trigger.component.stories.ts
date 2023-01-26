import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {dedent} from 'ts-dedent';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TopFilterTriggerComponent} from '@ironsource/fusion-ui/components/top-filter-trigger/top-filter-trigger.component';

export default {
    title: 'Components/Top Filter Trigger',
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
    props: {...args}
});

// region Default
export const Default = DefaultTemplate.bind({});
// endregion

// region SelectedAmountApps
export const SelectedAmountApps = DefaultTemplate.bind({});
SelectedAmountApps.args = {
    label: 'All Apps selected',
    helper: '33 applications'
};
// endregion

// region SingleIOSAppSelected
export const SingleIOSAppSelected = DefaultTemplate.bind({});
SingleIOSAppSelected.args = {
    label: 'Dizzy Diamond Puzzle',
    helper: 'appKey',
    icon: 'ios',
    imageApp: 'https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/e5/52/eb/e552eb88-72c7-f284-7622-988200f345bd/source/512x512bb.jpg'
};
// endregion

// region SingleAndroidAppSelected
export const SingleAndroidAppSelected = DefaultTemplate.bind({});
SingleAndroidAppSelected.args = {
    label: 'Moy 7 the Virtual Pet Game',
    helper: 'appKey',
    icon: 'android',
    imageApp: 'https://lh3.googleusercontent.com/T0yo2MIuoWWrhk7vaNX18MaOOI3StYYNb43Y1V_X8QJiWGu0SgMCAhSqoNc9ei5BHH9b=s180'
};
// endregion

// region ErrorRequired
export const ErrorRequired = DefaultTemplate.bind({});
ErrorRequired.args = {
    label: 'Select App',
    required: true,
    error: 'Mandatory field'
};
// endregion
