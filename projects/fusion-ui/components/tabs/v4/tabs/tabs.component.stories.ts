import {Meta, moduleMetadata, StoryFn} from '@storybook/angular';
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
    title: 'V4/Components/Tabs/Tabs',
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
    }
} as Meta<TabsComponent>;

const TabsTemplate: StoryFn<TabsComponent> = (args: TabsComponent) => ({
    props: {...args, selectedChange: actionsData.selectedChange},
    template: `
<div>
    <fusion-tabs (selectedChange)="selectedChange($event)">
      <fusion-tab [selected]="true">First</fusion-tab>
      <fusion-tab>Second</fusion-tab>
      <fusion-tab>Third</fusion-tab>
      <fusion-tab>Disabled</fusion-tab>
    </fusion-tabs>
</div>`
});

export const Default = {
    render: TabsTemplate
};
