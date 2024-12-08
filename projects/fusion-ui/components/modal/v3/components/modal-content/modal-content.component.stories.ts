import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../../stories/environments/environment';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v3';
import {ModalContentComponent} from '@ironsource/fusion-ui/components/modal';

export default {
    title: 'V3/Components/Dialog/Content',
    component: ModalContentComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), ButtonModule]
        })
    ],
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light'
        }
    },
    args: {
        pending: false
    }
} as Meta<ModalContentComponent>;

const ModalContentTemplate: StoryFn<ModalContentComponent> = args => ({
    props: {...args},
    template: `<div style="background-color: #ffffff;">
    <style>
        .content-holder{
            width: 500px;
            height: 250px;
            background-color: #F1F3F4;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 30px
        }
    </style>
    <fusion-modal-content
        [pending]="pending"
    >
      <div class="content-holder">
      <div>Content item placeholder. To be replaced with component</div>
      <fusion-button>Content button</fusion-button>
      </div>

    </fusion-modal-content>
</div>`
});

export const Default = {
    render: ModalContentTemplate
};

export const Pending = {
    render: ModalContentTemplate,

    args: {
        pending: true
    }
};
