import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {action} from '@storybook/addon-actions';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TabsComponent} from './tabs.component';
import {TabComponent} from '@ironsource/fusion-ui/components/tabs/v4';

const actionsData = {
    selectedChange: action('selectedChange')
};

export default {
    title: 'V4/Components/Tabs',
    component: TabsComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule, TabComponent]
        })
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: dedent`***TabsComponent*** Use tabs to allow users to navigate easily between views within the same context.

Each tab should contain content that is distinct from other tabs in a set. For example, tabs can present different sections of news, different genres of music, or different themes of documents.`
            }
        }
    },
    args: {
        variant: 'card'
    },
    argsTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['card', 'page']
            }
        }
    }
} as Meta<TabsComponent>;

type TabsStory = StoryObj<TabsComponent>;

export const Basic: TabsStory = {
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
    })
};

export const Page: TabsStory = {
    render: args => ({
        props: {...args, variant: 'page'},
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
        <fusion-icon class="fu-colored" style="height: 28px" name="v4/ab-test/ab"></fusion-icon>First
      </fusion-tab>
      <fusion-tab>
          <fusion-icon class="fu-colored" style="height: 28px" name="v4/ab-test/ab-gray"></fusion-icon>Second
      </fusion-tab>
    </fusion-tabs>
</div>
`
    })
};
