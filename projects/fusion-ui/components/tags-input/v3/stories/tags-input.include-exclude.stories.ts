import {CommonModule} from '@angular/common';
import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {environment} from '../../../../../../stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TagsInputComponent} from '@ironsource/fusion-ui/components/tags-input';
import {MOK_APPLICATIONS_ONE_LINE_OPTIONS} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DropdownDualMultiSelectModule} from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';
import {TagsInputStoryIncludeExcludeWrapperComponent} from '@ironsource/fusion-ui/components/tags-input/v3/stories/tags-input-include-exclude-story-wrapper.component';

export default {
    title: 'Components/Tag/Tags Input include-exclude',
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

const TagsInputTemplate: Story<TagsInputComponent> = (args: TagsInputComponent) => ({
    props: {...args},
    template: `<div style="width: 520px; height: 380px">
    <fusion-tags-input-include-exclude-wrapper
    [placeholder]="placeholder"
    [error]="error"
    [helper]="helper"
    [items]="items"
    ></fusion-tags-input-include-exclude-wrapper>
</div>
`
});

// region Default
export const Default = TagsInputTemplate.bind({});
// endregion
