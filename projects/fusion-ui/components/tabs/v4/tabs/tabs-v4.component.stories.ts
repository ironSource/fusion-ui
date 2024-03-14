import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {action} from '@storybook/addon-actions';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TabV4Component} from '../tab/tab-v4.component';
import {TabsV4Component} from './tabs-v4.component';
import {TabsConsts} from '@ironsource/fusion-ui/testIds';

const actionsData = {
    selectedChange: action('selectedChange')
};

export default {
    title: 'V4/Components/Tabs',
    component: TabsV4Component,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule, TabV4Component]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`***TabsComponent*** Use tabs to allow users to navigate easily between views within the same context.

Each tab should contain content that is distinct from other tabs in a set. For example, tabs can present different sections of news, different genres of music, or different themes of documents.
`
            }
        }
    },
    args: {
        variant: 'card',
        testId: TabsConsts.wrapperTestId,
        firstTestId: TabsConsts.firstTestId,
        secondTestId: TabsConsts.secondTestId,
        thirdTestId: TabsConsts.thirdTestId,
        disabledTestId: TabsConsts.disabledTestId
    },
    argsTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['card', 'page']
            }
        }
    }
} as Meta<TabsV4Component>;

type TabsStory = StoryObj<TabsV4Component>;

export const Basic: TabsStory = {
    render: args => ({
        props: args,
        template: `
<div>
    <fusion-tabs [variant]="variant" (selectedChange)="selectedChange($event)" [attr.data-testid]="testId">
      <fusion-tab [selected]="true" [attr.data-testid]="firstTestId">First</fusion-tab>
      <fusion-tab [attr.data-testid]="secondTestId">Second</fusion-tab>
      <fusion-tab [attr.data-testid]="thirdTestId">Third</fusion-tab>
      <fusion-tab [attr.data-testid]="disabledTestId" [disabled]="true">Disabled</fusion-tab>
    </fusion-tabs>
</div>
`
    }),
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { IconModule } from '@ironsource/fusion-ui/components/icon/v1';
    import { TabComponent, TabsComponent } from '@ironsource/fusion-ui/components/tabs/v4';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div>
<fusion-tabs [variant]="variant" (selectedChange)="selectedChange($event)">
  <fusion-tab [selected]="true">First</fusion-tab>
  <fusion-tab>Second</fusion-tab>
  <fusion-tab>Third</fusion-tab>
  <fusion-tab [disabled]="true">Disabled</fusion-tab>
</fusion-tabs>
    </div>\`,
      standalone: true,
      imports: [IconModule, TabsModule],
    })
    export class FusionStoryWrapperComponent {
      selectedChange($event) {
        console.log('Selected Tab: ', $event, $event.tabElement.innerText);
      }
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const Card: TabsStory = {
    render: args => ({
        props: args,
        template: `
<div>
    <fusion-tabs [variant]="variant" (selectedChange)="selectedChange($event)">
      <fusion-tab [selected]="true">First</fusion-tab>
      <fusion-tab>Second</fusion-tab>
      <fusion-tab>Third</fusion-tab>
      <fusion-tab [disabled]="true">Disabled</fusion-tab>
    </fusion-tabs>
</div>
`
    }),
    parameters: {
        docs: {
            source: {
                language: 'typescript',
                code: dedent`
    import { Component } from '@angular/core';
    import { IconModule } from '@ironsource/fusion-ui/components/icon/v1';
    import { TabComponent, TabsComponent } from '@ironsource/fusion-ui/components/tabs/v4';

    @Component({
      selector: 'fusion-story-wrapper',
      template: \`<div>
<fusion-tabs [variant]="variant" (selectedChange)="selectedChange($event)">
  <fusion-tab [selected]="true">First</fusion-tab>
  <fusion-tab>Second</fusion-tab>
  <fusion-tab>Third</fusion-tab>
  <fusion-tab [disabled]="true">Disabled</fusion-tab>
</fusion-tabs>
    </div>\`,
      standalone: true,
      imports: [IconModule, TabsModule],
    })
    export class FusionStoryWrapperComponent {
      selectedChange($event) {
        console.log('Selected Tab: ', $event, $event.tabElement.innerText);
      }
    }
    `,
                format: true,
                type: 'code'
            }
        }
    }
};

export const Page: TabsStory = {
    render: args => ({
        props: {...args, variant: 'page'},
        template: `
<div>
    <h1 class="font-v4-heading-1" style="margin: 10px 0px; color: var(--text-primary);"> Title page </h1>
    <fusion-tabs [variant]="variant" (selectedChange)="selectedChange($event)">
      <fusion-tab [selected]="true">First</fusion-tab>
      <fusion-tab>Second</fusion-tab>
      <fusion-tab>Third</fusion-tab>
      <fusion-tab [disabled]="true">Disabled</fusion-tab>
    </fusion-tabs>
</div>
`
    })
};

export const Icons: TabsStory = {
    render: args => ({
        props: args,
        template: `
<div>
    <fusion-tabs [variant]="variant" (selectedChange)="selectedChange($event)">
      <fusion-tab [selected]="true"><fusion-icon style="width: 16px; height: 16px" name="ph/placeholder"></fusion-icon> First</fusion-tab>
      <fusion-tab><fusion-icon style="width: 16px; height: 16px" name="ph/placeholder"></fusion-icon> Second</fusion-tab>
      <fusion-tab><fusion-icon style="width: 16px; height: 16px" name="ph/placeholder"></fusion-icon> Third</fusion-tab>
      <fusion-tab [disabled]="true"><fusion-icon style="width: 16px; height: 16px" name="ph/placeholder"></fusion-icon> Disabled</fusion-tab>
    </fusion-tabs>
</div>
`
    })
};

export const ABTest: TabsStory = {
    render: args => ({
        props: args,
        template: `
<div>
    <fusion-tabs [variant]="variant" (selectedChange)="selectedChange($event)">
      <fusion-tab [selected]="true">
        <fusion-icon class="fu-colored" style="height: 28px" name="v4/ab-test/ab"></fusion-icon>Control group
      </fusion-tab>
      <fusion-tab>
          <fusion-icon class="fu-colored" style="height: 28px" name="v4/ab-test/ab-gray"></fusion-icon>Test group
      </fusion-tab>
    </fusion-tabs>
</div>
`
    })
};
