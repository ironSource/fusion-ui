import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {dedent} from 'ts-dedent';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TopFilterTriggerComponent} from './top-filter-trigger.component';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DropdownDualMultiSelectModule} from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';
import {
    MOK_APPLICATIONS_ONE_LINE_OPTIONS,
    MOK_APPLICATIONS_OPTIONS
} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';
import {ApiService} from '@ironsource/fusion-ui';

export default {
    title: 'Components/Filters/Top Filter/Filter Include-Exclude',
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
                DropdownDualMultiSelectModule
            ],
            providers: [ApiService]
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

const DefaultTemplate: StoryFn<TopFilterTriggerComponent> = (args: TopFilterTriggerComponent) => ({
    props: {...args},
    template: `<div style="height: 380px">
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
     <fusion-dropdown-dual-multi-select
        [title]="title"
        [formControl]="formControl"
        [items]="items"
     ></fusion-dropdown-dual-multi-select>
</div>
</fusion-top-filter-trigger>
</div>`
});

export const Default = {
    render: DefaultTemplate,

    args: {
        title: 'Applications',
        items: MOK_APPLICATIONS_ONE_LINE_OPTIONS,
        formControl: new FormControl(),
        placeholder: 'Select Application'
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import {TopFilterTriggerComponent} from '@ironsource/fusion-ui/components/top-filter-trigger'
    import { DropdownDualMultiSelectModule } from "@ironsource/fusion-ui/components/dropdown-dual-multi-select";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 380px">
    <fusion-top-filter-trigger
        [placeholder]="placeholder"
        (onSelectedChange)="onSelectedChange($event)"
    >
    <div class="filter-element">
         <fusion-dropdown-dual-multi-select
            [title]="title"
            [formControl]="formControl"
            [items]="items"
         ></fusion-dropdown-dual-multi-select>
    </div>
    </fusion-top-filter-trigger>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, TopFilterTriggerComponent, DropdownDualMultiSelectModule],
    })
    export class FusionStoryWrapperComponent {
        title = 'Applications';
        placeholder = 'Select Application';
        formControl = new FormControl();
        items: DropdownOption[] = ${JSON.stringify(MOK_APPLICATIONS_OPTIONS)};

        onSelectedChange($event){
            console.log('onSelectedChange', $event);
        }
    }
                `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const SelectedOneApplication = {
    render: DefaultTemplate,

    args: {
        title: 'Applications',
        items: MOK_APPLICATIONS_ONE_LINE_OPTIONS,
        formControl: new FormControl([MOK_APPLICATIONS_ONE_LINE_OPTIONS[2]]),
        placeholder: 'Select Application'
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component, ChangeDetectionStrategy} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import {TopFilterTriggerComponent} from '@ironsource/fusion-ui/components/top-filter-trigger'
    import { DropdownDualMultiSelectModule } from "@ironsource/fusion-ui/components/dropdown-dual-multi-select";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: \`<div style="height: 380px">
    <fusion-top-filter-trigger
        [placeholder]="placeholder"
        (onSelectedChange)="onSelectedChange($event)"
    >
    <div class="filter-element">
         <fusion-dropdown-dual-multi-select
            [title]="title"
            [formControl]="formControl"
            [items]="items"
         ></fusion-dropdown-dual-multi-select>
    </div>
    </fusion-top-filter-trigger>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, TopFilterTriggerComponent, DropdownDualMultiSelectModule],
    })
    export class FusionStoryWrapperComponent {
        title = 'Applications';
        placeholder = 'Select Application';
        items: DropdownOption[] = ${JSON.stringify(MOK_APPLICATIONS_OPTIONS)};
        formControl = new FormControl([this.items[2]]);

        onSelectedChange($event){
            console.log('onSelectedChange', $event);
        }
    }
                `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const SelectedSomeApplications = {
    render: DefaultTemplate,

    args: {
        title: 'Applications',
        items: MOK_APPLICATIONS_ONE_LINE_OPTIONS,
        formControl: new FormControl([MOK_APPLICATIONS_ONE_LINE_OPTIONS[2], MOK_APPLICATIONS_ONE_LINE_OPTIONS[4]]),
        placeholder: 'Select Application'
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import {TopFilterTriggerComponent} from '@ironsource/fusion-ui/components/top-filter-trigger'
    import { DropdownDualMultiSelectModule } from "@ironsource/fusion-ui/components/dropdown-dual-multi-select";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 380px">
    <fusion-top-filter-trigger
        [placeholder]="placeholder"
        (onSelectedChange)="onSelectedChange($event)"
    >
    <div class="filter-element">
         <fusion-dropdown-dual-multi-select
            [title]="title"
            [formControl]="formControl"
            [items]="items"
         ></fusion-dropdown-dual-multi-select>
    </div>
    </fusion-top-filter-trigger>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, TopFilterTriggerComponent, DropdownDualMultiSelectModule],
    })
    export class FusionStoryWrapperComponent {
        title = 'Applications';
        placeholder = 'Select Application';
        items: DropdownOption[] = ${JSON.stringify(MOK_APPLICATIONS_OPTIONS)};
        formControl = new FormControl([this.items[2],this.items[4]]);

        onSelectedChange($event){
            console.log('onSelectedChange', $event);
        }
    }
                `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const Loading = {
    render: DefaultTemplate,

    args: {
        loading: true,
        title: 'Applications',
        items: MOK_APPLICATIONS_ONE_LINE_OPTIONS,
        formControl: new FormControl(),
        placeholder: 'Select Application'
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component} from '@angular/core';
    import { ReactiveFormsModule, FormControl } from '@angular/forms';
    import {TopFilterTriggerComponent} from '@ironsource/fusion-ui/components/top-filter-trigger'
    import { DropdownDualMultiSelectModule } from "@ironsource/fusion-ui/components/dropdown-dual-multi-select";
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="height: 380px">
    <fusion-top-filter-trigger
        [placeholder]="placeholder"
        [loading]="loading"
        (onSelectedChange)="onSelectedChange($event)"
    >
    <div class="filter-element">
         <fusion-dropdown-dual-multi-select
            [title]="title"
            [formControl]="formControl"
            [items]="items"
         ></fusion-dropdown-dual-multi-select>
    </div>
    </fusion-top-filter-trigger>
    </div>\`,
      standalone: true,
      imports: [ReactiveFormsModule, TopFilterTriggerComponent, DropdownDualMultiSelectModule],
    })
    export class FusionStoryWrapperComponent {
        loading = true;
        title = 'Applications';
        placeholder = 'Select Application';
        formControl = new FormControl();
        items: DropdownOption[] = ${JSON.stringify(MOK_APPLICATIONS_OPTIONS)};

        onSelectedChange($event){
            console.log('onSelectedChange', $event);
        }
    }
                `,
                format: true,
                type: 'code'
            }
        }
    }
};
