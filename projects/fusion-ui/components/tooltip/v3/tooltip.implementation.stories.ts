import {StoryFn, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {TooltipComponent, TooltipModule} from './';
import {dedent} from 'ts-dedent';

export default {
    title: 'V3/Components/Tooltip/Implementation',
    component: TooltipComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, TooltipModule]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`**Tooltip directive** Use directive ***[fusionTooltip]*** to set tooltip text for element.
                If element has class mane 'truncate', but element content entered to place, tooltip will not shown.

                Position will calculated automatically`
            }
        },
        layout: 'centered'
    },
    args: {
        fusionTooltip: 'Well done! You successfully read this alert message'
    }
} as Meta<TooltipComponent>;

const TooltipTemplate: StoryFn<TooltipComponent> = args => ({
    props: args,
    template: `
<style>
    .truncate{
       width: 100%;
       display: inline-block;
       white-space: nowrap;
       overflow: hidden !important;
       text-overflow: ellipsis;
    }
</style>
<div class="truncate" [fusionTooltip]="fusionTooltip" style="width: 100px;">Element with tooltip</div>
`
});

export const Directive = {
    render: TooltipTemplate,

    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { TooltipModule } from '@ironsource/fusion-ui/components/tooltip/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div [fusionTooltip]="tooltipText" style="width: max-content; margin: auto;">Element with tooltip</div>\`,
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
    }
};

// endregion

// region Inline
const TooltipInlineTemplate: StoryFn<TooltipComponent> = args => ({
    props: args,
    template: `
<fusion-tooltip [tooltipConfiguration]="tooltipConfiguration">
    <div class="fusionTooltipTrigger">
        <div>Element with tooltip</div>
    </div>
    <div class="fusionTooltipContent">
        <div style="margin-bottom: 5px; font-size: 14px">Tooltip title</div>
        <div>{{fusionTooltip}}</div>
    </div>
</fusion-tooltip>
`
});

export const Inline = {
    render: TooltipInlineTemplate,

    parameters: {
        docs: {
            description: {
                story: dedent`**Tooltip component** Use ***TooltipComponent*** (<fusion-tooltip>). In this case you can put in tooltip ***any*** content.
    * Inner element with class ***"fusionTooltipTrigger"*** has trigger for tooltip.
    * Inner element with class ***"fusionTooltipContent"*** has tooltip content.
    `
            },
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { TooltipModule } from '@ironsource/fusion-ui/components/tooltip/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="width:150px; margin:auto; margin-top: 100px"><fusion-tooltip>
        <div class="fusionTooltipTrigger">
            <div>Element with tooltip</div>
        </div>
        <div class="fusionTooltipContent">
            <div style="margin-bottom: 5px; font-size: 14px">Tooltip title</div>
            <div>Well done! You successfully read this alert message</div>
        </div>
    </fusion-tooltip></div>\`,
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
    }
};

const TooltipInlineWithLinkTemplate: StoryFn<TooltipComponent> = args => ({
    props: args,
    template: `
<fusion-tooltip [tooltipConfiguration]="tooltipConfiguration">
    <div class="fusionTooltipTrigger">
        <div>Element with tooltip</div>
    </div>
    <div class="fusionTooltipContent">
        <div style="margin-bottom: 5px; font-size: 14px">Tooltip title</div>
        <div>{{fusionTooltip}} <a href="https://fusion.ironsrc.net/" target="_blank" style="color: #ffffff">click me</a></div>
    </div>
</fusion-tooltip>
`
});

export const InlinePreventToClose = {
    render: TooltipInlineWithLinkTemplate,

    args: {
        tooltipConfiguration: {
            preventTooltipToClose: true
        }
    },

    parameters: {
        docs: {
            description: {
                story: dedent`**Tooltip component** with link in tooltip content

                In this case need "prevent" hide tooltip on "tooltiped" element "mouseleave" event.
                For this need to add to the tooltipConfiguration \`preventTooltipToClose: true\`
                `
            },
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { TooltipModule } from '@ironsource/fusion-ui/components/tooltip/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="width:150px; margin:auto; margin-top: 100px">
      <fusion-tooltip [tooltipConfiguration]="{preventTooltipToClose: true}">
        <div class="fusionTooltipTrigger">
            <div>Element with tooltip</div>
        </div>
        <div class="fusionTooltipContent">
            <div style="margin-bottom: 5px; font-size: 14px">Tooltip title</div>
            <div>Well done! You successfully read this alert message <a href="https://fusion.ironsrc.net/" target="_blank" style="color: #ffffff">click me</a></div>
        </div>
    </fusion-tooltip>
    </div>\`,
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
    }
};

export const InlineCustomization = {
    render: TooltipInlineTemplate,

    args: {
        tooltipConfiguration: {
            backgroundColor: '#3083FF'
        }
    },

    parameters: {
        docs: {
            description: {
                story: dedent`**Tooltip customization** Use ***[tooltipConfiguration]*** for change tooltip default background color`
            },
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { TooltipModule } from '@ironsource/fusion-ui/components/tooltip/v3';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div style="width:150px; margin:auto; margin-top: 100px">
        <fusion-tooltip [tooltipConfiguration]="{backgroundColor: '#3083FF'}">
        <div class="fusionTooltipTrigger">
            <div>Element with tooltip</div>
        </div>
        <div class="fusionTooltipContent">
            <div style="margin-bottom: 5px; font-size: 14px">Tooltip title</div>
            <div>Well done! You successfully read this alert message</div>
        </div>
      </fusion-tooltip>
    </div>\`,
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
    }
};
