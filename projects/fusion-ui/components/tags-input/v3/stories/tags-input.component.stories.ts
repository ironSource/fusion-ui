import {CommonModule} from '@angular/common';
import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {dedent} from 'ts-dedent';
import {environment} from '../../../../../../stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TagsInputComponent} from '@ironsource/fusion-ui/components/tags-input';
import {TAGS_CLOSE_BUTTON_MOCK, TAGS_ERROR_MOCK, TAGS_MOCK} from './tag.component.stories.mock';
import {TagsInputStoryWrapperComponent} from '@ironsource/fusion-ui/components/tags-input/v3/stories/tags-input-story-wrapper.component';

const actionsData = {
    addNewTag: action('addNewTag'),
    removeTag: action('removeTag')
};

export default {
    title: 'Components/Tag/Tags Input',
    component: TagsInputComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule, TagsInputStoryWrapperComponent]
        })
    ],
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5257%3A156797&t=P02BLgjB1f21WTzk-1'
        }
    },
    args: {
        inputPlaceholder: 'Placeholder text',
        tags: TAGS_MOCK
    }
} as Meta<TagsInputComponent>;

const TagsInputTemplate: Story<TagsInputComponent> = (args: TagsInputComponent) => ({
    props: {...args, addNewTag: actionsData.addNewTag, removeTag: actionsData.removeTag},
    template: `<div style="width: 576px">
    <fusion-tags-input-wrapper
        [inputPlaceholder]="inputPlaceholder"
        [tags]="tags"
        [error]="error"
        [helper]="helper"
        (addNewTag)="addNewTag($event)"
        (removeTag)="removeTag($event)"
    ></fusion-tags-input-wrapper>
</div>
`
});

// region Default
export const Default = TagsInputTemplate.bind({});
/*Default.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component } from '@angular/core';
import { TooltipModule } from '@ironsource/fusion-ui/components/tooltip/v3';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`
  <fusion-tags-input
        [inputPlaceholder]="inputPlaceholder"
        [tags]="tags"
        [error]="error"
        [helper]="helper"
        (addNewTag)="onAddNewTag($event)"
        (removeTag)="onRemoveTag($event)"
    ></fusion-tags-input>
  \`,
  standalone: true,
  imports: [TooltipModule],
})
export class FusionStoryWrapperComponent {
  tooltipText = 'Well done! You successfully read this alert message';
}
`,
            format: true,
            type: 'code'
        }
    }
}*/
// endregion

// region Removable
export const Removable = TagsInputTemplate.bind({});
Removable.args = {
    tags: TAGS_CLOSE_BUTTON_MOCK
};
// endregion

// region ErrorTag
export const ErrorTag = TagsInputTemplate.bind({});
ErrorTag.args = {
    tags: TAGS_ERROR_MOCK
};
// endregion

// region MainError
export const MainError = TagsInputTemplate.bind({});
MainError.args = {
    tags: TAGS_CLOSE_BUTTON_MOCK,
    error: 'Error text'
};
// endregion

// region MainHelper
export const MainHelper = TagsInputTemplate.bind({});
MainHelper.args = {
    tags: TAGS_CLOSE_BUTTON_MOCK,
    helper: 'Helper text'
};
// endregion
