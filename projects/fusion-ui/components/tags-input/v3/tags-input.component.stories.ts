import {CommonModule} from '@angular/common';
import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {dedent} from 'ts-dedent';
import {environment} from '../../../../../stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TagsInputComponent} from '@ironsource/fusion-ui/components/tags-input';
import {TagComponent} from '@ironsource/fusion-ui/components/tag';
import {TAGS_CLOSE_BUTTON_MOCK, TAGS_ERROR_MOCK, TAGS_MOCK} from './tag.component.stories.mock';

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
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule, TagComponent]
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
    <fusion-tags-input
        [inputPlaceholder]="inputPlaceholder"
        [tags]="tags"
        [error]="error"
        [helper]="helper"
        (addNewTag)="addNewTag($event)"
        (removeTag)="removeTag($event)"
    ></fusion-tags-input>
</div>
`
});

// region Default
export const Default = TagsInputTemplate.bind({});
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
