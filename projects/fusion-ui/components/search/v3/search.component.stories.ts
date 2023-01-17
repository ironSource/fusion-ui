import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {dedent} from 'ts-dedent';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';

import {SearchComponent} from './search.component';

const formControl = new FormControl();
// const formControlWithValue = new FormControl('Typing something');
// const formControlDisabled = new FormControl({value: 'Typing something', disabled: true});

export default {
    title: 'Components/Search',
    component: SearchComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), FormsModule, ReactiveFormsModule]
        })
    ],
    parameters: {
        docs: {
            description: {
                component: dedent`**SearchComponent component**`
            }
        },
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5204%3A224368&t=W94xASouNL6qlRXv-1'
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
        showClearIcon: true
    },
    argTypes: {
        formControl: {
            control: false
        },
        placeholder: {
            control: 'text'
        },
        searchClassName: {
            control: false
        },
        transparentClassName: {
            control: false
        }
    }
} as Meta<SearchComponent>;

const TooltipTemplate: Story<SearchComponent> = (args: SearchComponent) => ({
    props: {...args},
    template: `<div style="width: 230px;"><fusion-search class="{{searchClassName}} {{transparentClassName}}" [showClearIcon]="showClearIcon" [placeholder]="placeholder" [formControl]="formControl"></fusion-search></div>`
});

// region Default
export const Default = TooltipTemplate.bind({});
Default.args = {
    formControl: formControl
};
Default.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from '@ironsource/fusion-ui/components/search/v3';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="width: 230px;">
  <fusion-search
   [formControl]="formControl"
  ></fusion-search>
</div>\`,
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SearchComponent],
})
export class FusionStoryWrapperComponent {
  formControl = new FormControl();
}
`,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region NoClearIcon
export const NoClearIcon = TooltipTemplate.bind({});
NoClearIcon.args = {
    formControl: formControl,
    showClearIcon: false
};
NoClearIcon.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from '@ironsource/fusion-ui/components/search/v3';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="width: 230px;">
  <fusion-search
   [formControl]="formControl"
   [showClearIcon]="showClearIcon"
  ></fusion-search>
</div>\`,
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SearchComponent],
})
export class FusionStoryWrapperComponent {
  formControl = new FormControl();
  showClearIcon = false;
}
`,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region Small
export const Small = TooltipTemplate.bind({});
Small.args = {
    formControl: formControl,
    searchClassName: 'fu-small'
};
Small.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from '@ironsource/fusion-ui/components/search/v3';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="width: 230px;">
  <fusion-search class="fu-small"
   [formControl]="formControl"
  ></fusion-search>
</div>\`,
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SearchComponent],
})
export class FusionStoryWrapperComponent {
  formControl = new FormControl();
}
`,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region SmallNoClearIcon
export const SmallNoClearIcon = TooltipTemplate.bind({});
SmallNoClearIcon.args = {
    formControl: formControl,
    searchClassName: 'fu-small',
    showClearIcon: false
};
SmallNoClearIcon.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from '@ironsource/fusion-ui/components/search/v3';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="width: 230px;">
  <fusion-search  class="fu-small"
   [formControl]="formControl"
   [showClearIcon]="showClearIcon"
  ></fusion-search>
</div>\`,
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SearchComponent],
})
export class FusionStoryWrapperComponent {
  formControl = new FormControl();
  showClearIcon = false;
}
`,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region Transparent
export const Transparent = TooltipTemplate.bind({});
Transparent.args = {
    formControl: formControl,
    transparentClassName: 'fu-transparent'
};
// endregion

// region TransparentNoClearIcon
export const TransparentNoClearIcon = TooltipTemplate.bind({});
TransparentNoClearIcon.args = {
    formControl: formControl,
    transparentClassName: 'fu-transparent',
    showClearIcon: false
};
TransparentNoClearIcon.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from '@ironsource/fusion-ui/components/search/v3';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="width: 230px;">
  <fusion-search class="fu-transparent"
   [formControl]="formControl"
   [showClearIcon]="showClearIcon"
  ></fusion-search>
</div>\`,
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SearchComponent],
})
export class FusionStoryWrapperComponent {
  formControl = new FormControl();
  showClearIcon = false;
}
`,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region TransparentSmallNoClearIcon
export const TransparentSmallNoClearIcon = TooltipTemplate.bind({});
TransparentSmallNoClearIcon.args = {
    formControl: formControl,
    searchClassName: 'fu-small',
    transparentClassName: 'fu-transparent',
    showClearIcon: false
};
TransparentSmallNoClearIcon.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from '@ironsource/fusion-ui/components/search/v3';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="width: 230px;">
  <fusion-search class="fu-transparent fu-small"
   [formControl]="formControl"
   [showClearIcon]="showClearIcon"
  ></fusion-search>
</div>\`,
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SearchComponent],
})
export class FusionStoryWrapperComponent {
  formControl = new FormControl();
  showClearIcon = false;
}
`,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region Disabled - wait for design for Shai
/*
export const Disabled = TooltipTemplate.bind({});
Disabled.args = {
    formControl: formControlDisabled
};
*/
// endregion
