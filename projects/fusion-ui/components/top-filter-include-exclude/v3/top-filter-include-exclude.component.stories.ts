import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {dedent} from 'ts-dedent';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TopFilterIncludeExcludeComponent} from './top-filter-include-exclude.component';
import {MOK_APPLICATIONS_ONE_LINE_OPTIONS} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';

export default {
    title: 'Components/Filters/Top Filter/Include-Exclude (combined)',
    component: TopFilterIncludeExcludeComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, FormsModule, ReactiveFormsModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
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
    },
    args: {
        placeholder: 'Select application'
    },
    argTypes: {
        formControl: {
            control: false
        }
    }
} as Meta<TopFilterIncludeExcludeComponent>;

const DefaultTemplate: Story<TopFilterIncludeExcludeComponent> = (args: TopFilterIncludeExcludeComponent) => ({
    props: {...args},
    template: `<div style="height: 380px">
    <fusion-top-filter-include-exclude
        [placeholder]="placeholder"
        [helper]="helper"
        [error]="error"
        [required]="required"
        [loading]="loading"
        [title]="title"
        [items]="items"
        [formControl]="formControl"
    ></fusion-top-filter-include-exclude>
</div>`
});

// region Default
export const Default = DefaultTemplate.bind({});
Default.args = {
    title: 'Applications',
    items: MOK_APPLICATIONS_ONE_LINE_OPTIONS,
    formControl: new FormControl()
};
// endregion

// region PreselectedOneItem
export const PreselectedOneItem = DefaultTemplate.bind({});
PreselectedOneItem.args = {
    title: 'Applications',
    items: MOK_APPLICATIONS_ONE_LINE_OPTIONS,
    formControl: new FormControl([MOK_APPLICATIONS_ONE_LINE_OPTIONS[2]])
};
// endregion

// region PreselectedSomeItems
export const PreselectedSomeItems = DefaultTemplate.bind({});
PreselectedSomeItems.args = {
    title: 'Applications',
    items: MOK_APPLICATIONS_ONE_LINE_OPTIONS,
    formControl: new FormControl(MOK_APPLICATIONS_ONE_LINE_OPTIONS.slice(2, 6))
};
// endregion
