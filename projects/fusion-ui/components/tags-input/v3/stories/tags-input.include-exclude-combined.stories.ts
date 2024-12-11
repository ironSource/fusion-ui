import {CommonModule} from '@angular/common';
import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {environment} from '../../../../../../stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TagsInputIncludeExcludeComponent} from '@ironsource/fusion-ui/components/tags-input';
import {MOK_APPLICATIONS_ONE_LINE_OPTIONS} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';

export default {
    title: 'V3/Components/Tag/Tags Input Include-Exclude Combined',
    component: TagsInputIncludeExcludeComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, FormsModule, ReactiveFormsModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5335%3A100960&t=Pm3tJhze1AY1d00J-4'
        },
        docs: {
            description: {
                component: dedent`**TagsInputIncludeExcludeComponent** combined component that include DropdownDualMultiSelectComponent.
                `
            }
        }
    },
    args: {
        placeholder: 'Select applications',
        error: '',
        helper: '',
        title: 'Applications',
        items: MOK_APPLICATIONS_ONE_LINE_OPTIONS
    },
    argTypes: {
        formControl: {
            control: false
        }
    }
} as Meta<TagsInputIncludeExcludeComponent>;

const TagsInputTemplate: StoryFn<TagsInputIncludeExcludeComponent> = args => ({
    props: {...args},
    template: `<div style="width: 520px; height: 380px">
    <fusion-tags-input-include-exclude
        [placeholder]="placeholder"
        [error]="error"
        [helper]="helper"
        [title]="title"
        [items]="items"
        [formControl]="formControl"
    ></fusion-tags-input-include-exclude>
</div>
`
});

export const Default = {
    render: TagsInputTemplate,

    args: {
        formControl: new FormControl<DropdownOption[]>([])
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component, OnDestroy, OnInit } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { takeUntil } from 'rxjs/operators';
    import { Subject } from 'rxjs';
    import { TagsInputIncludeExcludeComponent } from '@ironsource/fusion-ui/components/tags-input';
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<fusion-tags-input-include-exclude
      [placeholder]="placeholder"
      [error]="error"
      [helper]="helper"
      [title]="title"
      [items]="items"
      [formControl]="formControl"
    ></fusion-tags-input-include-exclude>\`,
      standalone: true,
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TagsInputIncludeExcludeComponent,
      ],
    })
    export class FusionStoryWrapperComponent implements OnInit, OnDestroy {
      placeholder = 'Select applications';
      error = '';
      helper = '';

      items: DropdownOption[] = ITEMS_MOCK;

      formControl = new FormControl<DropdownOption[]>([]);
      title = 'Applications';

      private onDestroy$ = new Subject<void>();

      ngOnInit() {
        this.formControl.valueChanges
          .pipe(takeUntil(this.onDestroy$))
          .subscribe((selected) => {
            console.log('Selected:', selected);
          });
      }

      ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
      }
    }
    const ITEMS_MOCK = ${JSON.stringify(MOK_APPLICATIONS_ONE_LINE_OPTIONS)};
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const Preselected = {
    render: TagsInputTemplate,

    args: {
        formControl: new FormControl<DropdownOption[]>(MOK_APPLICATIONS_ONE_LINE_OPTIONS.slice(1, 4))
    },

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component, OnDestroy, OnInit } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { takeUntil } from 'rxjs/operators';
    import { Subject } from 'rxjs';
    import { TagsInputIncludeExcludeComponent } from '@ironsource/fusion-ui/components/tags-input';
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<fusion-tags-input-include-exclude
      [placeholder]="placeholder"
      [error]="error"
      [helper]="helper"
      [title]="title"
      [items]="items"
      [formControl]="formControl"
    ></fusion-tags-input-include-exclude>\`,
      standalone: true,
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TagsInputIncludeExcludeComponent,
      ],
    })
    export class FusionStoryWrapperComponent implements OnInit, OnDestroy {
      placeholder = 'Select applications';
      error = '';
      helper = '';

      items: DropdownOption[] = ITEMS_MOCK;

      formControl = new FormControl<DropdownOption[]>(ITEMS_MOCK.slice(1,4));
      title = 'Applications';

      private onDestroy$ = new Subject<void>();

      ngOnInit() {
        this.formControl.valueChanges
          .pipe(takeUntil(this.onDestroy$))
          .subscribe((selected) => {
            console.log('Selected:', selected);
          });
      }

      ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
      }
    }
    const ITEMS_MOCK = ${JSON.stringify(MOK_APPLICATIONS_ONE_LINE_OPTIONS)};
    `,
                format: true,
                type: 'code'
            }
        }
    }
};
