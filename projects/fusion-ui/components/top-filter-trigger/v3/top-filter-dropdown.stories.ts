import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {dedent} from 'ts-dedent';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TopFilterTriggerComponent} from '@ironsource/fusion-ui/components/top-filter-trigger/v3/top-filter-trigger.component';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MOK_APPLICATIONS_OPTIONS} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';
import {DropdownModule} from '@ironsource/fusion-ui/components/dropdown/v3';

export default {
    title: 'Components/Filters/Top Filter/Filter Dropdown',
    component: TopFilterTriggerComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                DropdownModule
            ]
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
} as Meta<TopFilterTriggerComponent>;

const DefaultTemplate: Story<TopFilterTriggerComponent> = (args: TopFilterTriggerComponent) => ({
    props: {...args},
    template: `<div style="height: 430px">
<fusion-top-filter-trigger
    [placeholder]="placeholder"
    [imageApp]="imageApp"
    [icon]="icon"
    [helper]="helper"
    [error]="error"
    [required]="required"
    [loading]="loading"
    (onSelectedChange)="onSelectedChange($event)"
>
<div class="filter-element">
    <fusion-dropdown
         [formControl]="formControl"
         [options]="options"
         [optionsTitle]="optionsTitle"
         [search]="search"
         >
    </fusion-dropdown>
</div>
</fusion-top-filter-trigger>
</div>`
});

// region Default
export const Default = DefaultTemplate.bind({});
Default.args = {
    optionsTitle: 'Applications',
    search: true,
    options: MOK_APPLICATIONS_OPTIONS,
    formControl: new FormControl(),
    placeholder: 'Select Application'
};
// endregion

// region Loading
export const Loading = DefaultTemplate.bind({});
Loading.args = {
    loading: true,
    optionsTitle: 'Applications',
    search: true,
    options: MOK_APPLICATIONS_OPTIONS,
    formControl: new FormControl(),
    placeholder: 'Select Application'
};
// endregion

// region SelectedApplication
export const SelectedApplication = DefaultTemplate.bind({});
SelectedApplication.args = {
    title: 'Applications',
    items: MOK_APPLICATIONS_OPTIONS,
    formControl: new FormControl([MOK_APPLICATIONS_OPTIONS[2]]),
    placeholder: 'Select Application'
};
// endregion
