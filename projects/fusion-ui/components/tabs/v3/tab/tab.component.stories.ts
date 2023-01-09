import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TabComponent, TabsModule} from '@ironsource/fusion-ui/components/tabs/v3';

export default {
    title: 'Components/Tabs/Tab',
    component: TabComponent,
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
                component: dedent`***Tab*** Use tabs to allow users to navigate easily between views within the same context.

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
        disabled: false,
        selected: false
    }
} as Meta<TabComponent>;

const TabTemplate: Story<TabComponent> = (args: TabComponent) => ({
    props: args,
    template: `<div style="width: 50px;">
    <fusion-tab [selected]="selected" [disabled]="disabled">$link</fusion-tab>
</div>`
});

// region Text tab
export const Default = TabTemplate.bind({});
Default.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';
import { TabsModule } from '@ironsource/fusion-ui/components/tabs/v3';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="width: 50px;">
    <fusion-tab [selected]="selected" [disabled]="disabled">$link</fusion-tab>
</div>\`,
  standalone: true,
  imports: [TabsModule],
})
export class FusionStoryWrapperComponent {
    selected = false;
    disabled = false;
}
`,
            format: true,
            type: 'code'
        }
    }
};

export const Selected = TabTemplate.bind({});
Selected.args = {
    disabled: false,
    selected: true
};
Selected.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';
import { TabsModule } from '@ironsource/fusion-ui/components/tabs/v3';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="width: 50px;">
    <fusion-tab [selected]="selected" [disabled]="disabled">$link</fusion-tab>
</div>\`,
  standalone: true,
  imports: [TabsModule],
})
export class FusionStoryWrapperComponent {
    selected = true;
    disabled = false;
}
`,
            format: true,
            type: 'code'
        }
    }
};

export const Disabled = TabTemplate.bind({});
Disabled.args = {
    disabled: true,
    selected: false
};
Disabled.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';
import { TabsModule } from '@ironsource/fusion-ui/components/tabs/v3';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="width: 50px;">
    <fusion-tab [selected]="selected" [disabled]="disabled">$link</fusion-tab>
</div>\`,
  standalone: true,
  imports: [TabsModule],
})
export class FusionStoryWrapperComponent {
    selected = false;
    disabled = true;
}
`,
            format: true,
            type: 'code'
        }
    }
};

export const SelectedDisabled = TabTemplate.bind({});
SelectedDisabled.args = {
    selected: true,
    disabled: true
};
SelectedDisabled.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';
import { TabsModule } from '@ironsource/fusion-ui/components/tabs/v3';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="width: 50px;">
    <fusion-tab [selected]="selected" [disabled]="disabled">$link</fusion-tab>
</div>\`,
  standalone: true,
  imports: [TabsModule],
})
export class FusionStoryWrapperComponent {
    selected = true;
    disabled = true;
}
`,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region IconLeft Tab
const TabIconLeftTemplate: Story<TabComponent> = (args: TabComponent) => ({
    props: args,
    template: `<div style="width: 100px;">
    <fusion-tab [selected]="selected" [disabled]="disabled">
        <fusion-icon class="fu-tab-icon" name="frame"></fusion-icon> $link
    </fusion-tab>
</div>`
});
export const WithIconLeftDefault = TabIconLeftTemplate.bind({});
WithIconLeftDefault.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';
import { IconModule } from "@ironsource/fusion-ui/components/icon/v1";
import { TabsModule } from '@ironsource/fusion-ui/components/tabs/v3';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="width: 50px;">
    <fusion-tab [selected]="selected" [disabled]="disabled">
        <fusion-icon class="fu-tab-icon" name="frame"></fusion-icon> $link
    </fusion-tab>
</div>\`,
  standalone: true,
  imports: [IconModule, TabsModule],
})
export class FusionStoryWrapperComponent {
    selected = false;
    disabled = false;
}
`,
            format: true,
            type: 'code'
        }
    }
};
export const WithIconLeftSelected = TabIconLeftTemplate.bind({});
WithIconLeftSelected.args = {
    selected: true
};
WithIconLeftSelected.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';
import { IconModule } from "@ironsource/fusion-ui/components/icon/v1";
import { TabsModule } from '@ironsource/fusion-ui/components/tabs/v3';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="width: 50px;">
    <fusion-tab [selected]="selected" [disabled]="disabled">
        <fusion-icon class="fu-tab-icon" name="frame"></fusion-icon> $link
    </fusion-tab>
</div>\`,
  standalone: true,
  imports: [IconModule, TabsModule],
})
export class FusionStoryWrapperComponent {
    selected = true;
    disabled = false;
}
`,
            format: true,
            type: 'code'
        }
    }
};
export const WithIconLeftDisabled = TabIconLeftTemplate.bind({});
WithIconLeftDisabled.args = {
    disabled: true
};
WithIconLeftDisabled.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';
import { IconModule } from "@ironsource/fusion-ui/components/icon/v1";
import { TabsModule } from '@ironsource/fusion-ui/components/tabs/v3';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="width: 50px;">
    <fusion-tab [selected]="selected" [disabled]="disabled">
        <fusion-icon class="fu-tab-icon" name="frame"></fusion-icon> $link
    </fusion-tab>
</div>\`,
  standalone: true,
  imports: [IconModule, TabsModule],
})
export class FusionStoryWrapperComponent {
    selected = false;
    disabled = true;
}
`,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region Icon Only Tab
const TabIconOnlyTemplate: Story<TabComponent> = (args: TabComponent) => ({
    props: args,
    template: `<div style="width: 50px;">
    <fusion-tab [selected]="selected" [disabled]="disabled">
        <fusion-icon class="fu-tab-icon" name="frame"></fusion-icon>
    </fusion-tab>
</div>`
});
export const WithIconOnlyDefault = TabIconOnlyTemplate.bind({});
WithIconOnlyDefault.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';
import { IconModule } from "@ironsource/fusion-ui/components/icon/v1";
import { TabsModule } from '@ironsource/fusion-ui/components/tabs/v3';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="width: 50px;">
    <fusion-tab [selected]="selected" [disabled]="disabled">
        <fusion-icon class="fu-tab-icon" name="frame"></fusion-icon>
    </fusion-tab>
</div>\`,
  standalone: true,
  imports: [IconModule, TabsModule],
})
export class FusionStoryWrapperComponent {
    selected = false;
    disabled = false;
}
`,
            format: true,
            type: 'code'
        }
    }
};
export const WithIconOnlySelected = TabIconOnlyTemplate.bind({});
WithIconOnlySelected.args = {
    selected: true
};
WithIconOnlySelected.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';
import { IconModule } from "@ironsource/fusion-ui/components/icon/v1";
import { TabsModule } from '@ironsource/fusion-ui/components/tabs/v3';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="width: 50px;">
    <fusion-tab [selected]="selected" [disabled]="disabled">
        <fusion-icon class="fu-tab-icon" name="frame"></fusion-icon>
    </fusion-tab>
</div>\`,
  standalone: true,
  imports: [IconModule, TabsModule],
})
export class FusionStoryWrapperComponent {
    selected = true;
    disabled = false;
}
`,
            format: true,
            type: 'code'
        }
    }
};
export const WithIconOnlyDisabled = TabIconOnlyTemplate.bind({});
WithIconOnlyDisabled.args = {
    disabled: true
};
WithIconOnlyDisabled.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';
import { IconModule } from "@ironsource/fusion-ui/components/icon/v1";
import { TabsModule } from '@ironsource/fusion-ui/components/tabs/v3';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="width: 50px;">
    <fusion-tab [selected]="selected" [disabled]="disabled">
        <fusion-icon class="fu-tab-icon" name="frame"></fusion-icon>
    </fusion-tab>
</div>\`,
  standalone: true,
  imports: [IconModule, TabsModule],
})
export class FusionStoryWrapperComponent {
    selected = false;
    disabled = true;
}
`,
            format: true,
            type: 'code'
        }
    }
};
// endregion