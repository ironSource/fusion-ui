import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {action} from '@storybook/addon-actions';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TabsComponent, TabsModule} from '@ironsource/fusion-ui/components/tabs/v3';

const actionsData = {
    selectedChange: action('selectedChange')
};

export default {
    title: 'Components/Tabs/Tabs',
    component: TabsComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), IconModule, TabsModule]
        })
    ],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5578%3A110199&t=y6EJ8bDv5djsnAXo-1'
        },
        docs: {
            description: {
                component: dedent`***Tabs*** Use tabs to allow users to navigate easily between views within the same context.

Each tab should contain content that is distinct from other tabs in a set. For example, tabs can present different sections of news, different genres of music, or different themes of documents.`
            }
        },
        backgrounds: {
            default: 'grey',
            values: [
                {
                    name: 'white',
                    value: '#FFFFFF'
                },
                {
                    name: 'grey',
                    value: '#F5F5F5'
                }
            ]
        }
    },
    args: {
        tabSize: ''
    },
    argTypes: {
        tabSize: {
            options: ['fu-size-sm', null, 'fu-size-lg', 'fu-size-xl'],
            control: {
                type: 'select',
                labels: {
                    null: 'MD - default',
                    'fu-size-sm': 'SM',
                    'fu-size-lg': 'LG',
                    'fu-size-xl': 'XL'
                }
            }
        }
    }
} as Meta<TabsComponent>;

const TabsTemplate: Story<TabsComponent> = (args: TabsComponent) => ({
    props: {...args, selectedChange: actionsData.selectedChange},
    template: `<style>
    fusion-tab {background-color: #fff;}
</style>
<div style="width: 300px;">
    <fusion-tabs (selectedChange)="selectedChange($event)" [class]="tabSize">
      <fusion-tab [selected]="true">
        <fusion-icon class="fu-tab-icon" name="bullhorn"></fusion-icon>
        First Tab
      </fusion-tab>
      <fusion-tab>
        <fusion-icon class="fu-tab-icon" name="group"></fusion-icon>
        Second Tab
      </fusion-tab>
    </fusion-tabs>
</div>`
});

export const Default = TabsTemplate.bind({});
Default.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component } from '@angular/core';
import { IconModule } from '@ironsource/fusion-ui/components/icon/v1';
import { TabsModule } from '@ironsource/fusion-ui/components/tabs/v3';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="width: 300px;">
    <fusion-tabs (selectedChange)="selectedChange($event)">
      <fusion-tab [selected]="true">
        <fusion-icon class="fu-tab-icon" name="bullhorn"></fusion-icon>
        First Tab
      </fusion-tab>
      <fusion-tab>
        <fusion-icon class="fu-tab-icon" name="group"></fusion-icon>
        Second Tab
      </fusion-tab>
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
};
export const Small = TabsTemplate.bind({});
Small.args = {
    tabSize: 'fu-size-sm'
};
Small.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component } from '@angular/core';
import { IconModule } from '@ironsource/fusion-ui/components/icon/v1';
import { TabsModule } from '@ironsource/fusion-ui/components/tabs/v3';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="width: 300px;">
    <fusion-tabs class="fu-size-sm" (selectedChange)="selectedChange($event)">
      <fusion-tab [selected]="true">
        <fusion-icon class="fu-tab-icon" name="bullhorn"></fusion-icon>
        First Tab
      </fusion-tab>
      <fusion-tab>
        <fusion-icon class="fu-tab-icon" name="group"></fusion-icon>
        Second Tab
      </fusion-tab>
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
};
export const Large = TabsTemplate.bind({});
Large.args = {
    tabSize: 'fu-size-lg'
};
Large.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component } from '@angular/core';
import { IconModule } from '@ironsource/fusion-ui/components/icon/v1';
import { TabsModule } from '@ironsource/fusion-ui/components/tabs/v3';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="width: 300px;">
    <fusion-tabs class="fu-size-lg" (selectedChange)="selectedChange($event)">
      <fusion-tab [selected]="true">
        <fusion-icon class="fu-tab-icon" name="bullhorn"></fusion-icon>
        First Tab
      </fusion-tab>
      <fusion-tab>
        <fusion-icon class="fu-tab-icon" name="group"></fusion-icon>
        Second Tab
      </fusion-tab>
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
};
export const ExtraLarge = TabsTemplate.bind({});
ExtraLarge.args = {
    tabSize: 'fu-size-xl'
};
ExtraLarge.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component } from '@angular/core';
import { IconModule } from '@ironsource/fusion-ui/components/icon/v1';
import { TabsModule } from '@ironsource/fusion-ui/components/tabs/v3';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="width: 300px;">
    <fusion-tabs class="fu-size-xl" (selectedChange)="selectedChange($event)">
      <fusion-tab [selected]="true">
        <fusion-icon class="fu-tab-icon" name="bullhorn"></fusion-icon>
        First Tab
      </fusion-tab>
      <fusion-tab>
        <fusion-icon class="fu-tab-icon" name="group"></fusion-icon>
        Second Tab
      </fusion-tab>
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
};
