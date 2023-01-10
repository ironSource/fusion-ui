import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {TooltipComponent, TooltipModule} from './';
import {dedent} from 'ts-dedent';

export default {
    title: 'Components/Tooltip/Implementation',
    component: TooltipComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, TooltipModule]
        })
    ],
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

const TooltipTemplate: Story<TooltipComponent> = (args: TooltipComponent) => ({
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

// region Directive
export const Directive = TooltipTemplate.bind({});
Directive.parameters = {
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
};
// endregion

// region Inline
const TooltipInlineTemplate: Story<TooltipComponent> = (args: TooltipComponent) => ({
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
export const Inline = TooltipInlineTemplate.bind({});
Inline.args = {
    tooltipConfiguration: {
        backgroundColor: '#696A6B'
    }
};
Inline.parameters = {
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
};

export const InlineCustomization = TooltipInlineTemplate.bind({});
InlineCustomization.args = {
    tooltipConfiguration: {
        backgroundColor: '#3083FF'
    }
};
InlineCustomization.parameters = {
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
};
// endregion
