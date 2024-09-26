import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {InlineCopyComponent} from '@ironsource/fusion-ui/components/inline-copy';
import {environment} from 'stories/environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipDirective} from '@ironsource/fusion-ui/components/tooltip/v4';

export default {
    title: 'V4/Components/Buttons/Common Actions',
    component: InlineCopyComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule, TooltipDirective]
        }),
        componentWrapperDecorator(story => `<div>${story}</div>`)
    ],
    tags: ['autodocs'],
    parameters: {
        options: {
            showPanel: true,
            panelPosition: 'bottom'
        }
    },
    args: {
        text: 'Copy me',
        testId: 'inline-copy-test-id'
    }
} as Meta<InlineCopyComponent>;

type Story = StoryObj<InlineCopyComponent>;

export const InlineCopy: Story = {};
