import {Meta, StoryFn} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {dedent} from 'ts-dedent';
import {ApiService} from '@ironsource/fusion-ui/services';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TopFilterIncludeExcludeComponent} from './top-filter-include-exclude.component';
import {
    MOK_APPLICATIONS_ONE_LINE_OPTIONS,
    MOK_APPLICATIONS_OPTIONS
} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';

const meta: Meta<TopFilterIncludeExcludeComponent> = {
    title: 'Components/Filters/Top Filter/Include-Exclude (combined)',
    component: TopFilterIncludeExcludeComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, FormsModule, ReactiveFormsModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule],
            providers: [ApiService]
        })
    ],
    parameters: {
        docs: {
            description: {
                component: dedent`**Top Filter Trigger Component**`
            }
        }
    },
    tags: ['autodocs'],
    args: {
        placeholder: 'Select application'
    }
};
export default meta;

const DefaultTemplate: StoryFn<TopFilterIncludeExcludeComponent> = (args: TopFilterIncludeExcludeComponent) => ({
    props: {...args},
    template: `<div style="height: 380px">
    <fusion-top-filter-include-exclude
        [placeholder]="placeholder"
        [error]="error"
        [required]="required"
        [loading]="loading"
        [title]="title"
        [items]="items"
        [formControl]="formControl"
    ></fusion-top-filter-include-exclude>
</div>`
});

export const Default = {
    render: DefaultTemplate,
    args: {
        title: 'Applications',
        items: MOK_APPLICATIONS_ONE_LINE_OPTIONS,
        formControl: new FormControl()
    }
};

export const PreselectedOneItem = {
    render: DefaultTemplate,
    args: {
        title: 'Applications',
        items: MOK_APPLICATIONS_ONE_LINE_OPTIONS,
        formControl: new FormControl([MOK_APPLICATIONS_ONE_LINE_OPTIONS[2]])
    }
};

export const PreselectedSomeItems = {
    render: DefaultTemplate,
    args: {
        title: 'Applications',
        items: MOK_APPLICATIONS_ONE_LINE_OPTIONS,
        formControl: new FormControl(MOK_APPLICATIONS_ONE_LINE_OPTIONS.slice(2, 6))
    }
};

export const Loading = {
    render: DefaultTemplate,
    args: {
        title: 'Applications',
        items: MOK_APPLICATIONS_ONE_LINE_OPTIONS,
        formControl: new FormControl(),
        loading: true
    }
};

export const Error = {
    render: DefaultTemplate,
    args: {
        title: 'Applications',
        items: MOK_APPLICATIONS_ONE_LINE_OPTIONS,
        formControl: new FormControl(),
        error: 'error message'
    }
};

export const Required = {
    render: DefaultTemplate,
    args: {
        title: 'Applications',
        items: MOK_APPLICATIONS_ONE_LINE_OPTIONS,
        formControl: new FormControl(),
        required: true
    }
};
