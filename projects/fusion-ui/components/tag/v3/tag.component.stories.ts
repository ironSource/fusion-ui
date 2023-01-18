import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {TagComponent, TagComponentConfigurations} from '@ironsource/fusion-ui/components/tag';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

const DEFAULT_CONFIGURATION: TagComponentConfigurations = {
    title: 'Your label'
};

export default {
    title: 'Components/Tag',
    component: TagComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule]
        })
    ],
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5268%3A162020&t=v5iXDyyAgCZADhRr-1'
        }
    },
    args: {
        configuration: DEFAULT_CONFIGURATION
    }
} as Meta<TagComponent>;

const TagTemplate: Story<TagComponent> = (args: TagComponent) => ({
    props: {...args},
    template: `<fusion-tag [class]="customClass" [configuration]="configuration"></fusion-tag>`
});

// region Default
export const Default = TagTemplate.bind({});
Default.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TagComponent, TagComponentConfigurations} from '@ironsource/fusion-ui/components/tag';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`

  \`,
  standalone: true,
  imports: [CommonModule, IconModule],
})
export class FusionStoryWrapperComponent {

}
`,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region WithCloseButton
export const WithCloseButton = TagTemplate.bind({});
WithCloseButton.args = {
    configuration: {
        ...DEFAULT_CONFIGURATION,
        close: true
    }
};
// endregion

// region Error
export const Error = TagTemplate.bind({});
Error.args = {
    configuration: {
        ...DEFAULT_CONFIGURATION,
        close: true
    },
    customClass: 'fu-tag-error'
};
// endregion

// region WithImage
export const WithImage = TagTemplate.bind({});
WithImage.args = {
    configuration: {
        ...DEFAULT_CONFIGURATION,
        image: 'https://lh3.googleusercontent.com/T0yo2MIuoWWrhk7vaNX18MaOOI3StYYNb43Y1V_X8QJiWGu0SgMCAhSqoNc9ei5BHH9b=s180'
    }
};
// endregion

// region WithImageAndCloseButton
export const WithImageAndCloseButton = TagTemplate.bind({});
WithImageAndCloseButton.args = {
    configuration: {
        ...DEFAULT_CONFIGURATION,
        close: true,
        image: 'https://lh3.googleusercontent.com/T0yo2MIuoWWrhk7vaNX18MaOOI3StYYNb43Y1V_X8QJiWGu0SgMCAhSqoNc9ei5BHH9b=s180'
    }
};
// endregion
