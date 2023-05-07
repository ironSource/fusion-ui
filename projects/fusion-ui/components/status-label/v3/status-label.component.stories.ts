import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {dedent} from 'ts-dedent';
import {StatusLabelComponent} from './status-label.component';

export default {
    title: 'Components/Stats Label',
    component: StatusLabelComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule]
        })
    ],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: dedent`**StatusLabelComponent component**

                has css variables for change colors as you want:
                * **--fu-status-label-text-color**:  default text color (#53575B)
                * **--fu-status-label-color**:  default icon color (#3083FF)

                also you can set statuses colors to custom:
                * **--fu-status-label-archived** (#D2D5D8)
                * **--fu-status-label-disabled** (#7B838C)
                * **--fu-status-label-warning** (#FFB424)
                * **--fu-status-label-error** (#FF6A63)
                * **--fu-status-label-success** (#22C891)

                size:
                * **--fu-status-label-size** (8px)
                * **--fu-status-label-large-size** (12px)
                `
            }
        },
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=12029%3A115705&t=ThHtp6fTBWEAzj7R-1'
        }
    },
    args: {
        label: 'Text Label',
        helper: 'helper text'
    }
} as Meta<StatusLabelComponent>;

const StatusLabelTemplate: StoryFn<StatusLabelComponent> = (args: StatusLabelComponent) => ({
    props: {...args}
});

export const Default = {
    render: StatusLabelTemplate
};

// endregion

// region WithLabel
const StatusLabelWithLabelTemplate: StoryFn<StatusLabelComponent> = (args: StatusLabelComponent) => ({
    props: {...args},
    template: `<fusion-status-label
  [status]="status"
  [flat]="true"
>
  {{label}}
</fusion-status-label>`
});

export const WithLabel = {
    render: StatusLabelWithLabelTemplate,

    parameters: {
        docs: {
            description: {
                story: `For label - just add text inside:
            \`<fusion-status-label>Text Label</fusion-status-label>\`
    `
            }
        }
    }
};

// endregion

// region WithTwoLines
const StatusLabelWithTwoLinesTemplate: StoryFn<StatusLabelComponent> = (args: StatusLabelComponent) => ({
    props: {...args},
    template: `<fusion-status-label
  [status]="status"
  [flat]="true"
>
  <div>
    <div>{{label}}</div>
    <div class="font-bodyXSmall" style="color: #7B838C">{{helper}}</div>
  </div>
</fusion-status-label>`
});

export const WithTwoLines = {
    render: StatusLabelWithTwoLinesTemplate,

    parameters: {
        docs: {
            description: {
                story: `You can add any inner content: \`<fusion-status-label [flat]="true">
      <div>
        <div>Test Label</div>
        <div class="font-bodyXSmall" style="color: #7B838C">helper text</div>
      </div>
    </fusion-status-label>\`
    `
            }
        }
    }
};
