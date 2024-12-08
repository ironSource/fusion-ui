import {CommonModule} from '@angular/common';
import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {environment} from '../../../../../../stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TagsInputComponent} from '@ironsource/fusion-ui/components/tags-input';
import {MOK_APPLICATIONS_ONE_LINE_OPTIONS} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DropdownDualMultiSelectModule} from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';
import {TagsInputStoryIncludeExcludeWrapperComponent} from '@ironsource/fusion-ui/components/tags-input/v3/stories/tags-input-include-exclude-story-wrapper.component';

export default {
    title: 'V3/Components/Tag/Tags Input include-exclude',
    component: TagsInputComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                DropdownDualMultiSelectModule,
                TagsInputStoryIncludeExcludeWrapperComponent
            ]
        })
    ],
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5335%3A100960&t=Pm3tJhze1AY1d00J-4'
        }
    },
    args: {
        placeholder: 'Select applications',
        error: '',
        helper: '',
        items: MOK_APPLICATIONS_ONE_LINE_OPTIONS
    },
    argTypes: {
        placeholder: {table: {disable: true}},
        inputPlaceholder: {table: {disable: true}},
        tags: {table: {disable: true}},
        addNewTag: {table: {disable: true}},
        removeTag: {table: {disable: true}}
    }
} as Meta<TagsInputComponent>;

const TagsInputTemplate: StoryFn<TagsInputComponent> = args => ({
    props: {...args},
    template: `<div style="width: 520px; height: 380px">
    <fusion-tags-input-include-exclude-wrapper
    [placeholder]="placeholder"
    [error]="error"
    [helper]="helper"
    [items]="items"
    [preselectedItems]="preselectedItems"
    ></fusion-tags-input-include-exclude-wrapper>
</div>
`
});

export const Default = {
    render: TagsInputTemplate,

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
    import { TagsInputComponent } from '@ironsource/fusion-ui/components/tags-input';
    import { TagComponentConfigurations } from '@ironsource/fusion-ui/components/tag';
    import { DropdownDualMultiSelectModule } from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<fusion-tags-input [placeholder]="placeholder" [tags]="tags" [error]="error" [helper]="helper">
      <div class="filter-element">
          <fusion-dropdown-dual-multi-select
              [title]="title"
              [formControl]="formControl"
              [items]="items"
          ></fusion-dropdown-dual-multi-select>
      </div>
    </fusion-tags-input>\`,
      standalone: true,
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TagsInputComponent,
        DropdownDualMultiSelectModule,
      ],
    })
    export class FusionStoryWrapperComponent implements OnInit, OnDestroy {
      placeholder = 'Select applications';
      error = '';
      helper = '';

      items: DropdownOption[] = ITEMS_MOCK;

      tags: TagComponentConfigurations[];
      formControl = new FormControl<DropdownOption[]>([]);
      title = 'Applications';

      private onDestroy$ = new Subject<void>();

      ngOnInit() {
        this.formControl.valueChanges
          .pipe(takeUntil(this.onDestroy$))
          .subscribe(this.setTags.bind(this));
      }

      ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
      }

      private setTags(selected: DropdownOption[]){
        if (Array.isArray(selected) && selected.length) {
            if (selected.length === this.items.length) {
                this.tags = [];
                this.placeholder = 'All applications';
            } else {
                this.placeholder = '';
                this.tags = selected.map((option: DropdownOption) => ({
                    id: option.id,
                    title: option.displayText,
                    image: option.image
                }));
            }
        } else {
            this.placeholder = 'Select applications';
            this.tags = [];
        }
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
        preselectedItems: MOK_APPLICATIONS_ONE_LINE_OPTIONS.slice(1, 5)
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
    import { TagsInputComponent } from '@ironsource/fusion-ui/components/tags-input';
    import { TagComponentConfigurations } from '@ironsource/fusion-ui/components/tag';
    import { DropdownDualMultiSelectModule } from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';
    import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<fusion-tags-input [placeholder]="placeholder" [tags]="tags" [error]="error" [helper]="helper">
      <div class="filter-element">
          <fusion-dropdown-dual-multi-select
              [title]="title"
              [formControl]="formControl"
              [items]="items"
          ></fusion-dropdown-dual-multi-select>
      </div>
    </fusion-tags-input>\`,
      standalone: true,
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TagsInputComponent,
        DropdownDualMultiSelectModule,
      ],
    })
    export class FusionStoryWrapperComponent implements OnInit, OnDestroy {
      placeholder = 'Select applications';
      error = '';
      helper = '';

      items: DropdownOption[] = ITEMS_MOCK;

      tags: TagComponentConfigurations[];
      formControl = new FormControl<DropdownOption[]>(ITEMS_MOCK.slice(1, 5));
      title = 'Applications';

      private onDestroy$ = new Subject<void>();

      ngOnInit() {
        this.setTags(this.formControl.value);
        this.formControl.valueChanges
          .pipe(takeUntil(this.onDestroy$))
          .subscribe(this.setTags.bind(this));
      }

      ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
      }

      private setTags(selected: DropdownOption[]){
        if (Array.isArray(selected) && selected.length) {
            if (selected.length === this.items.length) {
                this.tags = [];
                this.placeholder = 'All applications';
            } else {
                this.placeholder = '';
                this.tags = selected.map((option: DropdownOption) => ({
                    id: option.id,
                    title: option.displayText,
                    image: option.image
                }));
            }
        } else {
            this.placeholder = 'Select applications';
            this.tags = [];
        }
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
