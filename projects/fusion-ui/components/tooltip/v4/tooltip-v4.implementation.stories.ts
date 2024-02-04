import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {dedent} from 'ts-dedent';
import {TooltipV4Component} from './tooltip-v4.component';
import {TooltipV4Directive} from '@ironsource/fusion-ui/components/tooltip/v4/tooltip-v4.directive';
import {ButtonComponent} from '@ironsource/fusion-ui/components/button/v4/button/button.component';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipPosition} from '@ironsource/fusion-ui/components/tooltip/common/base';

export default {
    title: 'V4/Components/Tooltip',
    component: TooltipV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                TooltipV4Directive,
                ButtonComponent
            ]
        })
    ],
    /*tags: ['autodocs'],*/
    parameters: {
        docs: {
            description: {
                component: dedent`**Tooltip directive** Use directive ***[fusionTooltip]*** to set tooltip text for element.
                If element has class mane 'truncate', but element content entered to place, tooltip will not shown.

                Position will calculated automatically`
            }
        },
        layout: 'centered'
    }
} as Meta<TooltipV4Component>;

type Story = StoryObj<TooltipV4Component>;

export const Basic: Story = {
    render: args => ({
        props: args,
        template: `<fusion-button color="primary" fusionTooltip="I am tooltip!" [configuration]="tooltipConfiguration">Hover me</fusion-button>`
    }),
    args: {
        tooltipText: 'Tooltip: You successfully read this alert message'
    }
};

export const WithoutArrow: Story = {
    render: args => ({
        props: args,
        template: `<fusion-button color="primary" fusionTooltip="I am tooltip!" [configuration]="tooltipConfiguration">Hover me</fusion-button>`
    }),
    args: {
        tooltipText: 'Tooltip: You successfully read this alert message',
        tooltipConfiguration: {
            suppressPositionArrow: true
        }
    }
};

export const Placement: Story = {
    render: args => ({
        props: args,
        template: `
<div style="display: flex; gap: 32px; flex-direction: column; align-items: center">
<div style="display: flex; gap: 16px;">
    <fusion-button color="primary" fusionTooltip="I am tooltip!" [configuration]="tooltipConfigurationLeft">Left</fusion-button>
    <fusion-button color="primary" fusionTooltip="I am tooltip!">Top</fusion-button>
    <fusion-button color="primary" fusionTooltip="I am tooltip!" [configuration]="tooltipConfigurationBottom">Bottom</fusion-button>
    <fusion-button color="primary" fusionTooltip="I am tooltip!" [configuration]="tooltipConfigurationRight">Right</fusion-button>
</div>
<div style="display: flex; gap: 16px;">
    <fusion-button color="primary" fusionTooltip="I am tooltip!" [configuration]="tooltipConfigurationBottomStart">Bottom-start when it is long</fusion-button>
    <fusion-button color="primary" fusionTooltip="I am tooltip!" [configuration]="tooltipConfigurationBottomEnd">Bottom-end when it is long </fusion-button>
</div>
<div style="display: flex; gap: 16px;">
    <fusion-button color="primary" fusionTooltip="I am tooltip!" [configuration]="tooltipConfigurationTopStart">Top-start when it is long</fusion-button>
    <fusion-button color="primary" fusionTooltip="I am tooltip!" [configuration]="tooltipConfigurationTopEnd">Top-end when it is long </fusion-button>
</div>
</div>
`
    }),
    args: {
        tooltipText: 'Tooltip: You successfully read this alert message',
        // @ts-ignore
        tooltipConfigurationLeft: {
            position: TooltipPosition.Left
        },
        // @ts-ignore
        tooltipConfigurationBottom: {
            position: TooltipPosition.Bottom
        },
        // @ts-ignore
        tooltipConfigurationRight: {
            position: TooltipPosition.Right
        },
        // @ts-ignore
        tooltipConfigurationBottomStart: {
            position: TooltipPosition.BottomLeft
        },
        // @ts-ignore
        tooltipConfigurationBottomEnd: {
            position: TooltipPosition.BottomRight
        },
        // @ts-ignore
        tooltipConfigurationTopStart: {
            position: TooltipPosition.TopLeft
        },
        // @ts-ignore
        tooltipConfigurationTopEnd: {
            position: TooltipPosition.TopRight
        }
    }
};

export const WithTitle: Story = {
    render: args => ({
        props: args,
        template: `
<fusion-tooltip class="fusion-v4" [tooltipConfiguration]="tooltipConfiguration">
    <div class="fusionTooltipTrigger">
        <fusion-button color="primary">Hover me</fusion-button>
    </div>
    <div class="fusionTooltipContent">
        <div class="font-v4-heading-5" style="margin-bottom: 5px;">{{tooltipTitle}}</div>
        <div class="font-v4-body-2" style="color: var(--text-secondary, #646464)">{{tooltipDescription}}</div>
    </div>
</fusion-tooltip>
`
    }),
    args: {
        // @ts-ignore
        tooltipTitle: 'This is a tooltip',
        // @ts-ignore
        tooltipDescription: 'Tooltip is highly flexible, you can put anything you want into it.'
    }
};

export const WithHTML: Story = {
    render: args => ({
        props: args,
        template: `<div style="display: flex; align-content: center; align-items: center; gap: 8px;">
GDPR <fusion-tooltip class="fusion-v4" [tooltipConfiguration]="tooltipConfiguration">
    <div class="fusionTooltipTrigger"><fusion-icon style="width: 16px; height: 16px" name="ph/fill/info"></fusion-icon></div>
    <div class="fusionTooltipContent">
        <div style="width: 225px">
            <div class="font-v4-body-2" style="color: var(--text-secondary, #646464); margin-bottom: 10px">The General Data Protection Regulation is a European Union regulation on information privacy</div>
            <fusion-button variant="outlined" color="primary" size="small">Read more</fusion-button>
        </div>
    </div>
</fusion-tooltip></div>
`
    }),
    args: {
        tooltipConfiguration: {
            position: TooltipPosition.Bottom,
            preventTooltipToClose: true
        }
    }
};

/*export const TruncatedText: Story = {
    render: args => ({
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
<div class="truncate" [fusionTooltip]="tooltipText" style="width: 100px;">{{tooltipText}}</div>`
    })
};*/

/*
// region Inline
const TooltipInlineTemplate: StoryFn<TooltipComponent> = (args: TooltipComponent) => ({
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

const TooltipInlineWithLinkTemplate: StoryFn<TooltipComponent> = (args: TooltipComponent) => ({
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
};*/
