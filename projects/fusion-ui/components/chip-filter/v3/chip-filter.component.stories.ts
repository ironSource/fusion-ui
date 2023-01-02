import {Story, Meta} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {dedent} from 'ts-dedent';
import {CommonModule} from '@angular/common';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {environment} from '../../../../../stories/environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChipFilterComponent, ChipFilterModule} from '@ironsource/fusion-ui/components/chip-filter';
import {DropdownModule} from '@ironsource/fusion-ui/components/dropdown';
import {MOCK_OPTIONS} from '@ironsource/fusion-ui/components/dropdown/v3/stories/dropdown.mock';
import {DaterangeModule} from '@ironsource/fusion-ui/components/daterange';
import {DropdownDualMultiSelectModule} from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';

export default {
    title: 'Components/Chip-Filter',
    component: ChipFilterComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SvgModule.forRoot({assetsPath: environment.assetsPath}),
                IconModule,
                ChipFilterModule,
                DropdownModule,
                DaterangeModule,
                DropdownDualMultiSelectModule
            ]
        })
    ],
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/V4eZU3qDgKYPhR4eaTvSwy/%F0%9F%8E%A8-Style-guide-2021-Master?node-id=5268%3A162019&t=bF5K0Z1370QwBbYu-1'
        },
        docs: {
            description: {
                component: dedent`**ChipFilter**`
            }
        }
    },
    args: {
        placeholder: 'Chip filter',
        options: MOCK_OPTIONS,
        title: 'Label'
    },
    argTypes: {
        formControl: {
            control: false
        },
        fcDateRange: {
            control: false
        }
    }
} as Meta<ChipFilterComponent>;

const ChipFilterTemplate: Story<ChipFilterComponent> = (args: ChipFilterComponent) => ({
    props: {...args},
    template: `<div style="height: 250px;">
    <fusion-chip-filter [configuration]="configuration">
        <div class="filter-element">
            <fusion-dropdown
                 [title]="title"
                 [placeholder]="placeholder"
                 [formControl]="formControl"
                 [options]="options"
                 >
            </fusion-dropdown>
        </div>
    </fusion-chip-filter>
</div>`
});

// region Default
export const Default = ChipFilterTemplate.bind({});
Default.args = {
    formControl: new FormControl(),
    configuration: {mode: 'static', close: true}
};
Default.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ChipFilterModule } from "@ironsource/fusion-ui/components/chip-filter";
import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="height: 250px; width: 250px; margin: auto">
    <fusion-chip-filter [configuration]="{ id: 1, mode: 'static', close: true }">
        <div class="filter-element">
            <fusion-dropdown
                 [placeholder]="placeholder"
                 [formControl]="formControl"
                 [options]="options"
                 >
            </fusion-dropdown>
        </div>
    </fusion-chip-filter>
</div>\`,
  standalone: true,
  imports: [ReactiveFormsModule, ChipFilterModule, DropdownModule],
})
export class FusionStoryWrapperComponent {
    placeholder = 'Chip filter';
    formControl = new FormControl();
    options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS)};
}
`,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region Disabled
export const Disabled = ChipFilterTemplate.bind({});
Disabled.args = {
    formControl: new FormControl(),
    configuration: {mode: 'static', close: true, disabled: true}
};
Disabled.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ChipFilterModule } from "@ironsource/fusion-ui/components/chip-filter";
import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="height: 250px; width: 250px; margin: auto">
    <fusion-chip-filter [configuration]="{ id: 1, mode: 'static', close: true, disabled: true }">
        <div class="filter-element">
            <fusion-dropdown
                 [placeholder]="placeholder"
                 [formControl]="formControl"
                 [options]="options"
                 >
            </fusion-dropdown>
        </div>
    </fusion-chip-filter>
</div>\`,
  standalone: true,
  imports: [ReactiveFormsModule, ChipFilterModule, DropdownModule],
})
export class FusionStoryWrapperComponent {
    placeholder = 'Chip filter';
    formControl = new FormControl();
    options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS)};
}
`,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region Selected
export const Selected = ChipFilterTemplate.bind({});
Selected.args = {
    formControl: new FormControl(MOCK_OPTIONS[1]),
    configuration: {mode: 'static', close: true}
};
Selected.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ChipFilterModule } from "@ironsource/fusion-ui/components/chip-filter";
import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="height: 250px; width: 250px; margin: auto">
    <fusion-chip-filter [configuration]="{ id: 1, mode: 'static', close: true }">
        <div class="filter-element">
            <fusion-dropdown
                 [placeholder]="placeholder"
                 [formControl]="formControl"
                 [options]="options"
                 >
            </fusion-dropdown>
        </div>
    </fusion-chip-filter>
</div>\`,
  standalone: true,
  imports: [ReactiveFormsModule, ChipFilterModule, DropdownModule],
})
export class FusionStoryWrapperComponent {
    placeholder = 'Chip filter';
    options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS)};
    formControl = new FormControl(this.options[1]);
}
`,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region SelectedUnremovable
export const SelectedUnremovable = ChipFilterTemplate.bind({});
SelectedUnremovable.args = {
    formControl: new FormControl(MOCK_OPTIONS[1]),
    configuration: {mode: 'static', close: false}
};
SelectedUnremovable.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ChipFilterModule } from "@ironsource/fusion-ui/components/chip-filter";
import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="height: 250px; width: 250px; margin: auto">
    <fusion-chip-filter [configuration]="{ id: 1, mode: 'static', close: false }">
        <div class="filter-element">
            <fusion-dropdown
                 [placeholder]="placeholder"
                 [formControl]="formControl"
                 [options]="options"
                 >
            </fusion-dropdown>
        </div>
    </fusion-chip-filter>
</div>\`,
  standalone: true,
  imports: [ReactiveFormsModule, ChipFilterModule, DropdownModule],
})
export class FusionStoryWrapperComponent {
    placeholder = 'Chip filter';
    options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS)};
    formControl = new FormControl(this.options[1]);
}
`,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region SelectedUnremovableDisabled
export const SelectedUnremovableDisabled = ChipFilterTemplate.bind({});
SelectedUnremovableDisabled.args = {
    formControl: new FormControl(MOCK_OPTIONS[1]),
    configuration: {mode: 'static', close: false, disabled: true}
};
SelectedUnremovableDisabled.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component} from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ChipFilterModule } from "@ironsource/fusion-ui/components/chip-filter";
import { DropdownModule } from "@ironsource/fusion-ui/components/dropdown";
import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="height: 250px; width: 250px; margin: auto">
    <fusion-chip-filter [configuration]="{ id: 1, mode: 'static', close: false, disabled: true }">
        <div class="filter-element">
            <fusion-dropdown
                 [placeholder]="placeholder"
                 [formControl]="formControl"
                 [options]="options"
                 >
            </fusion-dropdown>
        </div>
    </fusion-chip-filter>
</div>\`,
  standalone: true,
  imports: [ReactiveFormsModule, ChipFilterModule, DropdownModule],
})
export class FusionStoryWrapperComponent {
    placeholder = 'Chip filter';
    options: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS)};
    formControl = new FormControl(this.options[1]);
}
`,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region WithIconDateRange
const ChipFilterIconTemplate: Story<ChipFilterComponent> = (args: ChipFilterComponent) => ({
    props: {...args},
    template: `<div style="height: 350px;">
    <fusion-chip-filter [configuration]="configuration">
        <div class="filter-element">
            <fusion-daterange [options]="dateRangeOptions" [formControl]="fcDateRange"> </fusion-daterange>
        </div>
    </fusion-chip-filter>
</div>`
});
export const WithIconDateRange = ChipFilterIconTemplate.bind({});
WithIconDateRange.args = {
    configuration: {mode: 'static', close: true, maxWidth: 300},
    dateRangeOptions: {chipLabel: 'Date range', placeholder: 'All'},
    fcDateRange: new FormControl()
};
WithIconDateRange.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ChipFilterModule } from '@ironsource/fusion-ui/components/chip-filter';
import { DaterangeModule } from '@ironsource/fusion-ui/components/daterange';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div style="height: 250px; width: 250px;">
    <fusion-chip-filter [configuration]="{ id: 1, mode: 'static', close: true, maxWidth: 300}">
        <div class="filter-element">
            <fusion-daterange [options]="{ chipLabel: 'Date range', placeholder: 'All' }" [formControl]="fcDateRange"> </fusion-daterange>
        </div>
    </fusion-chip-filter>
</div>\`,
  standalone: true,
  imports: [ReactiveFormsModule, ChipFilterModule, DaterangeModule],
})
export class FusionStoryWrapperComponent {
  fcDateRange = new FormControl();
}
`,
            format: true,
            type: 'code'
        }
    }
};
// endregion

// region WithLabelIncludeExclude
const ChipFilterIncludeExcludeTemplate: Story<ChipFilterComponent> = (args: ChipFilterComponent) => ({
    props: {...args},
    template: `<div style="height: 350px; width: 250px;">
    <fusion-chip-filter [configuration]="configuration">
        <div class="filter-element">
             <fusion-dropdown-dual-multi-select
                [title]="title"
                [placeholder]="placeholder"
                [formControl]="formControl"
                [items]="items"
             ></fusion-dropdown-dual-multi-select>
        </div>
    </fusion-chip-filter>
</div>`
});
export const WithLabelIncludeExclude = ChipFilterIncludeExcludeTemplate.bind({});
WithLabelIncludeExclude.args = {
    formControl: new FormControl([]),
    items: [...MOCK_OPTIONS],
    configuration: {mode: 'static', close: true}
};
WithLabelIncludeExclude.parameters = {
    docs: {
        source: {
            language: 'typescript',
            code: dedent`
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ChipFilterModule } from '@ironsource/fusion-ui/components/chip-filter';
import {DropdownDualMultiSelectModule} from "@ironsource/fusion-ui/components/dropdown-dual-multi-select";
import { DropdownOption } from '@ironsource/fusion-ui/components/dropdown-option/entities';

@Component({
  selector: 'fusion-story-wrapper',
  template: \`<div>
    <fusion-chip-filter [configuration]="{ id: 1, mode: 'static', close: true, maxWidth: 300}">
        <div class="filter-element">
            <fusion-dropdown-dual-multi-select
                [title]="title"
                [placeholder]="placeholder"
                [formControl]="formControl"
                [items]="items"
            ></fusion-dropdown-dual-multi-select>
        </div>
    </fusion-chip-filter>
</div>\`,
  standalone: true,
  imports: [ReactiveFormsModule, ChipFilterModule, DropdownDualMultiSelectModule],
})
export class FusionStoryWrapperComponent {
    title = 'Label';
    placeholder = 'Chip filter';
    formControl = new FormControl();
    items: DropdownOption[] = ${JSON.stringify(MOCK_OPTIONS)};
}
`,
            format: true,
            type: 'code'
        }
    }
};
// endregion
